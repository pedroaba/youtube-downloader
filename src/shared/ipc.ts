export const IPC = {
  FRAME_EVENTS: {
    CLOSE: 'frame-events: close',
    MAXIMIZE: 'frame-events: maximize',
    MINIMIZE: 'frame-events: minimize',
    RESIZE: 'frame-events: minimize',
  },
  GLOBAL: {
    VERSION: 'version',
  },
  VIDEO: {
    GET_INFO: 'video: get-info',
    DOWNLOAD: {
      FINISHED: 'video: download-finished',
      START: 'video: download-video',
    },
  },
} as const
