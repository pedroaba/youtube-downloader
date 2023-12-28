import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron'

import { IPC } from '../../../shared/ipc'
import { VideoDownloader } from '../../controllers/video'

interface VideoGetInfoHandlerArgs {
  url: string
}

interface VideoDownloadOnArgs {
  videoUrl: string
}

ipcMain.handle(
  IPC.VIDEO.GET_INFO,
  async (_event: IpcMainInvokeEvent, { url }: VideoGetInfoHandlerArgs) => {
    return await VideoDownloader.getVideoInfo(url)
  },
)

ipcMain.on(
  IPC.VIDEO.DOWNLOAD.START,
  async (_event: IpcMainEvent, { videoUrl }: VideoDownloadOnArgs) => {
    const filepath = await VideoDownloader.downloadVideoByUrl(videoUrl)

    ipcMain.emit(IPC.VIDEO.DOWNLOAD.FINISHED, { filepath })
  },
)
