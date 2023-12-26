import type { Video } from '@renderer/store/@types/video'
import { create } from 'zustand'

interface VideoDownload {
  videos: Video[]
  insertVideoInfo: (video: Video) => 'success' | 'duplicated'
  removeVideoFromList: (videoId: string) => void
}

export const useStore = create<VideoDownload>((set, get) => {
  return {
    videos: [],

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
  }
})
