import { BrowserWindow, ipcMain } from 'electron'

import { IPC } from '../../shared/ipc'

ipcMain.on(IPC.FRAME_EVENTS.CLOSE, (event, _) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)

  currentWindow?.close()
})

ipcMain.on(IPC.FRAME_EVENTS.MAXIMIZE, (event, _) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)
  if (!currentWindow?.isMaximized()) {
    currentWindow?.maximize()

    return currentWindow?.webContents.send(IPC.FRAME_EVENTS.MAXIMIZE, {
      isMaximized: currentWindow?.isMaximized(),
    })
  }

  currentWindow?.unmaximize()
  currentWindow?.webContents.send(IPC.FRAME_EVENTS.MAXIMIZE, {
    isMaximized: currentWindow?.isMaximized(),
  })
})

ipcMain.on(IPC.FRAME_EVENTS.MINIMIZE, (event, _) => {
  const currentWindow = BrowserWindow.fromWebContents(event.sender)

  currentWindow?.minimize()
})
