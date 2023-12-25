import { ProgressBar } from '@renderer/components/progress-bar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@renderer/components/ui/table'

import { DownloadTableButtons } from './download-table-buttons'

export function TableDownload() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[16px]"></TableHead>
          <TableHead className="w-[180px]">Nome do video</TableHead>
          <TableHead className="w-[80px]">Progresso</TableHead>
          <TableHead className="w-[48px]">Status</TableHead>
          <TableHead className="w-[48px]">Tamanho</TableHead>
          <TableHead className="w-[20px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
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
          <TableCell></TableCell>
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
        </TableRow>
      </TableBody>
    </Table>
  )
}
