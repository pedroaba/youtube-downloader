import type { Video } from '@renderer/store/@types/video'
import { create } from 'zustand'

export interface VideoInDownload extends Video {
  downloadProgress: number
  status: 'in queue' | 'in progress' | 'finished' | 'cancelled'
}

export interface VideoDownloadStore {
  videos: Video[]
  videosInDownload: VideoInDownload[]
  insertVideoInfo: (video: Video) => 'success' | 'duplicated'
  removeVideoFromList: (videoId: string) => void
  downloadVideo: (video: Video) => 'success' | 'duplicated'
}

export const useStore = create<VideoDownloadStore>((set, get) => {
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

    downloadVideo: (video: Video) => {
      const { videosInDownload } = get()
      const hasVideoInDownload =
        videosInDownload.length > 0 &&
        videosInDownload.some((v) => v.status === 'in progress')

      const doesVideoAlreadyAdded = videosInDownload.some(
        (v) => v.videoDetails.videoId === video.videoDetails.videoId,
      )

      if (doesVideoAlreadyAdded) {
        return 'duplicated'
      }

      if (hasVideoInDownload) {
        set({
          videosInDownload: [
            ...videosInDownload,
            { status: 'in queue', downloadProgress: 0, ...video },
          ],
        })
      } else {
        set({
          videosInDownload: [
            { status: 'in progress', downloadProgress: 0, ...video },
          ],
        })

        window.api.videoActions.downloadAVideoByUrl(
          video.videoDetails.video_url,
        )
      }

      return 'success'
    },
  }
})
