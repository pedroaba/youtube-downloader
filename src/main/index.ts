import './ipc/frame-events'
import './ipc/video/video-events'

import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { join } from 'path'

import windowsIcon from '../../resources/gojo-icon.ico?asset'
import linuxIcon from '../../resources/gojo-icon.png?asset'
import { IPC } from '../shared/ipc'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    minWidth: 670,
    autoHideMenuBar: true,
    ...(process.platform === 'linux'
      ? { icon: linuxIcon }
      : { icon: windowsIcon }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      nodeIntegrationInWorker: true,
      sandbox: false,
    },
    titleBarStyle: 'hidden',
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle(IPC.GLOBAL.VERSION, () => {
  return { version: app.getVersion() }
})
