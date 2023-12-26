import type { Video } from '@renderer/store/@types/video'
import { create } from 'zustand'

interface VideoInDownload extends Video {
  downloadProgress: number
  status: 'in queue' | 'in progress' | 'finished' | 'cancelled'
}

interface VideoDownload {
  videos: Video[]
  videosInDownload: VideoInDownload[]
  insertVideoInfo: (video: Video) => 'success' | 'duplicated'
  removeVideoFromList: (videoId: string) => void
  downloadVideo: (video: Video) => void
}

export const useStore = create<VideoDownload>((set, get) => {
  return {
    videos: [],
    videosInDownload: [],

    insertVideoInfo: (video: Video) => {
      const { videos: currentVideoState } = get()

      const doesVideoAlreadyAdded = currentVideoState.some(
        (v) => v.videoDetails.videoId === video.videoDetails.videoId,
      )

      if (doesVideoAlreadyAdded) {
        return 'duplicated'
      }

      set({
        videos: [...currentVideoState, video],
      })

      return 'success'
    },

    removeVideoFromList: (videoId: string) => {
      const { videos } = get()

      set({
        videos: videos.filter((v) => v.videoDetails.videoId !== videoId),
      })
    },

    downloadVideo: (_video: Video) => {},
  }
})
