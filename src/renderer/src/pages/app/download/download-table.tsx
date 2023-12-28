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
          {/* <TableRow>
          <TableCell>34kl23bn35kl</TableCell>
          <TableCell className="">
            Netolab Provando Sabores de sorvete
          </TableCell>
          <TableCell>
            <ProgressBar progress={80} total={100} />
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-800" />
              <span>Downloading</span>
            </div>
          </TableCell>
          <TableCell>-</TableCell>
          <DownloadTableButtons />
        </TableRow>
        <TableRow>
          <TableCell>1k24bn12l</TableCell>
          <TableCell className="">
            Netolab Provando Sabores de sorvete
          </TableCell>
          <TableCell>
            <ProgressBar progress={100} total={100} />
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-700 dark:bg-green-900" />
              <span>Pronto</span>
            </div>
          </TableCell>
          <TableCell>100 MB</TableCell>
          <DownloadTableButtons />
        </TableRow> */}
        </TableBody>
      </Table>
    </div>
  )
}
