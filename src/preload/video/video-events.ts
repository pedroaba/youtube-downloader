import { ipcRenderer } from 'electron'

import { IPC } from '../../shared/ipc'

export const VIDEO_EVENTS = {
  downloadAVideoByUrl(videoUrl: string) {
    ipcRenderer.send(IPC.VIDEO.DOWNLOAD.START, { videoUrl })
  },
}
