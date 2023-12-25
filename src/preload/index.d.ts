import { ElectronAPI } from '@electron-toolkit/preload'

import { FRAME_EVENTS } from './frame/frame-events'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: {
      frame: typeof FRAME_EVENTS
    }
  }
}
