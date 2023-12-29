import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@renderer/components/ui/table'
import { useStore } from '@renderer/store'

import { DownloadTableRow } from './download-table-row'
import { EmptyDownload } from './empty-download'

export function TableDownload() {
  const { videosInDownload: videos, removeVideoFromList } = useStore(
    ({ videosInDownload, removeVideoFromList }) => ({
      videosInDownload,
      removeVideoFromList,
    }),
  )

  if (videos.length === 0) {
    return <EmptyDownload />
  }

  return (
    <div className="rounded-md border border-muted">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[16px]">Video ID</TableHead>
            <TableHead className="w-[120px]">Nome do video</TableHead>
            <TableHead className="w-[140px]">Progresso</TableHead>
            <TableHead className="w-[48px]">Status</TableHead>
            <TableHead className="w-[48px]">Duração</TableHead>
            <TableHead className="w-[20px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {videos.map((youtubeVideo) => {
            const { videoDetails: video } = youtubeVideo

            return (
              <DownloadTableRow
                key={video.videoId}
                video={youtubeVideo}
                onDeleteFileClick={async () =>
                  removeVideoFromList(video.videoId)
                }
                onConvertMP3Click={async () => {}}
                onOpenFolderClick={async () => {}}
              />
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
