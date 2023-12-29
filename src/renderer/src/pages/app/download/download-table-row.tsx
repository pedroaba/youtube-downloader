import { ProgressBar } from '@renderer/components/progress-bar'
import { TableCell, TableRow } from '@renderer/components/ui/table'
import { VideoInDownload } from '@renderer/store'
import { formatVideoDuration } from '@renderer/utils/formatters/video-duration'
import clsx from 'clsx'
import { IpcRendererEvent } from 'electron'
import { useState } from 'react'

import { DownloadTableButtons } from './download-table-buttons'

interface DownloadTableRowProps {
  video: VideoInDownload
  onOpenFolderClick?: () => Promise<void>
  onDeleteFileClick?: (videoId: string) => Promise<void>
  onConvertMP3Click?: () => Promise<void>
}

export type VideoProgressEvent = {
  progress: number
  videoId: string
}

export function DownloadTableRow({
  video: youtubeVideo,
  onConvertMP3Click = async () => {},
  onDeleteFileClick = async (_videoId: string) => {},
  onOpenFolderClick = async () => {},
}: DownloadTableRowProps) {
  const [videoProgress, setDownloadVideoProgress] = useState(0)
  const { videoDetails: video, status } = youtubeVideo

  window.electron.ipcRenderer.on(
    'video: download-progress',
    (_: IpcRendererEvent, { progress, videoId }: VideoProgressEvent) => {
      if (videoId === video.videoId) {
        setDownloadVideoProgress(Number(progress))
      }
    },
  )

  return (
    <TableRow key={video.videoId}>
      <TableCell>{video.videoId}</TableCell>
      <TableCell>{video.title}</TableCell>
      <TableCell>
        <ProgressBar progress={videoProgress} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span
            className={clsx(
              'flex h-2 w-2 animate-pulse rounded-full bg-green-800',
              { 'animate-none bg-blue-700': status === 'in queue' },
            )}
          />
          <span className="capitalize">{status}</span>
        </div>
      </TableCell>
      <TableCell>{formatVideoDuration(Number(video.lengthSeconds))}</TableCell>
      <DownloadTableButtons
        onDeleteFileClick={async () => onDeleteFileClick(video.videoId)}
        onConvertMP3Click={onConvertMP3Click}
        onOpenFolderClick={onOpenFolderClick}
      />
    </TableRow>
  )
}
