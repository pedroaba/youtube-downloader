import fs from 'node:fs'
import path from 'node:path'

import dayjs from 'dayjs'
import { app, IpcMainEvent } from 'electron'
import ytdl, { type videoInfo } from 'ytdl-core'

import { IPC } from '../../shared/ipc'
import { FileUtils } from '../utils/file-info'

export class VideoDownloader {
  private event: IpcMainEvent

  constructor(event: IpcMainEvent) {
    this.event = event
  }

  static formatFileName(filename: string) {
    return filename
      .replaceAll('|', '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .normalize('NFKD')
  }

  async downloadVideoByUrl(url: string, filename: string) {
    const downloadFolderPath = path.join(
      app.getPath('documents'),
      'YoutubeVideoDownloader',
    )

    if (!fs.existsSync(path.resolve(downloadFolderPath))) {
      fs.mkdirSync(downloadFolderPath)
    }

    const videoInfo = await VideoDownloader.getVideoInfo(url)
    const format = videoInfo.formats
      .filter((f) => f.hasVideo)
      .sort((a, b) => {
        if (Number(a.contentLength) > Number(b.contentLength)) {
          return -1
        } else if (Number(a.contentLength) < Number(b.contentLength)) {
          return 1
        }

        return 0
      })[0]
    const totalFileSize = Number(format.contentLength)

    const filepath = path.resolve(
      downloadFolderPath,
      `${VideoDownloader.formatFileName(filename)}.mp4`,
    )

    const video = ytdl
      .downloadFromInfo(videoInfo, {
        quality: 'highestvideo',
        format,
      })
      .pipe(fs.createWriteStream(filepath))

    let downloadTimeEventControl = new Date()
    video.on('drain', () => {
      const currentFileSize = FileUtils.getFileSize(filepath)

      const percent = ((currentFileSize * 100.0) / totalFileSize).toFixed(2)

      if (dayjs(new Date()).diff(downloadTimeEventControl, 'seconds') >= 1) {
        console.log(percent)
        downloadTimeEventControl = new Date()
        this.event.sender.send(IPC.VIDEO.DOWNLOAD.PROGRESS, {
          progress: percent,
          videoId: videoInfo.videoDetails.videoId,
        })
      }
    })

    video.on('error', (...params) => console.log(params, 'error'))
    video.on('finish', () => {
      setTimeout(() => {
        this.event.sender.send(IPC.VIDEO.DOWNLOAD.PROGRESS, {
          progress: 100,
          videoId: videoInfo.videoDetails.videoId,
        })
      }, 1000)
    })

    return filepath
  }

  static async getVideoInfo(url: string): Promise<videoInfo> {
    return ytdl.getInfo(url)
  }
}
