import { useTitle } from '@renderer/context/title-context'
import { HardDriveDownload } from 'lucide-react'

import { DownloadForm } from './download-form'
import { EmptyDownload } from './empty-download'

export function Download() {
  const { setTitle } = useTitle()

  setTitle('Download')
  return (
    <div className="flex flex-1 flex-col space-y-4">
      <div>
        <h1 className="flex items-center gap-3 text-3xl font-medium tracking-tight text-gray-700 dark:text-gray-200">
          <HardDriveDownload className="h-6 w-6" /> Download Video
        </h1>
        <span className="text-sm font-medium text-muted-foreground">
          Baixe seu video apenas colocando a url do video.
        </span>
      </div>

      <DownloadForm />

      <EmptyDownload />
    </div>
  )
}
