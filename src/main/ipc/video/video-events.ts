import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron'

import { IPC } from '../../../shared/ipc'
import { VideoDownloader } from '../../controllers/video'

interface VideoGetInfoHandlerArgs {
  url: string
}

interface VideoDownloadOnArgs {
  videoUrl: string
  filename: string
}

ipcMain.handle(
  IPC.VIDEO.GET_INFO,
  async (_event: IpcMainInvokeEvent, { url }: VideoGetInfoHandlerArgs) => {
    return await VideoDownloader.getVideoInfo(url)
  },
)

ipcMain.on(
  IPC.VIDEO.DOWNLOAD.START,
  async (_event: IpcMainEvent, { videoUrl, filename }: VideoDownloadOnArgs) => {
    const videoController = new VideoDownloader(_event)
    const filepath = videoController.downloadVideoByUrl(videoUrl, filename)

    ipcMain.emit(IPC.VIDEO.DOWNLOAD.FINISHED, { filepath })
  },
)
