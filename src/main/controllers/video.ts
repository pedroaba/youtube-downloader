import fs from 'node:fs'
import path from 'node:path'

import { app } from 'electron'
import ytdl, { type videoInfo } from 'ytdl-core'

export class VideoDownloader {
  static async downloadVideoByUrl(url: string) {
    const downloadFolderPath = path.join(
      app.getPath('documents'),
      'YoutubeVideoDownloader',
    )

    if (!fs.existsSync(path.resolve(downloadFolderPath))) {
      fs.mkdirSync(downloadFolderPath)
    }

    const video = ytdl
      .downloadFromInfo(await VideoDownloader.getVideoInfo(url), {
        quality: 'highestvideo',
        filter: 'video',
      })
      .pipe(
        fs.createWriteStream(path.resolve(downloadFolderPath, 'video2.mp4')),
      )

    video.on('data', (...params) => console.log(params, 'data'))
    video.on('error', (...params) => console.log(params, 'error'))
    video.on('close', (...params) => console.log(params, 'close'))
    video.on('end', (...params) => console.log(params, 'end'))
  }

  static async getVideoInfo(url: string): Promise<videoInfo> {
    return ytdl.getInfo(url)
  }
}
