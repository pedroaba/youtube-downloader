import { DownloadCloud } from 'lucide-react'

export function EmptyDownload() {
  return (
    <div className="m-auto flex w-full flex-1 flex-col items-center justify-center gap-4">
      <DownloadCloud className="h-20 w-20 text-zinc-400/90 dark:text-zinc-600/80" />
      <p className="max-w-96 text-center text-zinc-400/90 dark:text-zinc-600/80">
        Você não iniciou nenhum download ainda, inicie o download colocando um
        url no campo acima e clique em baixar.
      </p>
    </div>
  )
}
