import { ipcRenderer } from 'electron'

import { IPC } from '../../shared/ipc'

export const FRAME_EVENTS = {
  maximize() {
    ipcRenderer.send(IPC.FRAME_EVENTS.MAXIMIZE, {})
  },

  minimize() {
    ipcRenderer.send(IPC.FRAME_EVENTS.MINIMIZE, {})
  },

  close() {
    ipcRenderer.send(IPC.FRAME_EVENTS.CLOSE, {})
  },
}
