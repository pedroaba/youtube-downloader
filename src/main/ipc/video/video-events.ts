import { ipcMain, IpcMainInvokeEvent } from 'electron'

import { IPC } from '../../../shared/ipc'
import { VideoDownloader } from '../../controllers/video'

interface VideoGetInfoHandlerArgs {
  url: string
}

ipcMain.handle(
  IPC.VIDEO.GET_INFO,
  async (_event: IpcMainInvokeEvent, { url }: VideoGetInfoHandlerArgs) => {
    return await VideoDownloader.getVideoInfo(url)
  },
)
