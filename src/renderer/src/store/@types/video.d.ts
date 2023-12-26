interface VideoFormat {
  approxDurationMs: string
  contentLength: string
  fps: number
  lastModified: string
  mimeType: string
  projectionType: string
  quality: string
  qualityLabel: string
  hasVideo: boolean
  hasAudio: boolean
  width: number
  height: number
}

interface VideoThumbnail {
  height: number
  width: number
  url: string
}

interface VideoAuthor {
  channel_url: string
  id: string
  thumbnails: VideoThumbnail[]
  user: string
  user_url: string
  verified: boolean
  external_channel_url?: string
  name?: string
  subscriber_count?: number
}

interface VideoRelated {
  author: VideoAuthor
  id: string
  length_seconds: string
  published: string
  richThumbnails: VideoThumbnail[]
  thumbnails: VideoThumbnail[]
  title: string
  view_count: string
}

interface VideoEmbed {
  height: number
  width: number
  iframeUrl: string
}

interface VideoDetails {
  age_restricted: boolean
  allowRatings: boolean
  author: VideoAuthor
  availableCountries: string[]
  category: string
  channelId: string
  description: string
  embed: VideoEmbed
  keywords: string[]
  lengthSeconds: string
  ownerChannelName: string
  ownerProfileUrl: string
  publishDate: string
  thumbnails: VideoThumbnail[]
  title: string
  uploadDate: string
  videoId: string
  video_url: string
  viewCount: string
}

interface Video {
  formats: VideoFormat[]
  related_videos: VideoRelated
  videoDetails: VideoDetails
}

export type {
  Video,
  VideoAuthor,
  VideoDetails,
  VideoEmbed,
  VideoFormat,
  VideoThumbnail,
  VideoRelated,
}
