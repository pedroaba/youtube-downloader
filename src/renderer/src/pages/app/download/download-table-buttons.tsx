import { Tooltip } from '@renderer/components/tooltip'
import { Button } from '@renderer/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@renderer/components/ui/dropdown-menu'
import { TableCell } from '@renderer/components/ui/table'
import { FileAudio, FolderOpen, MoreHorizontal, Trash } from 'lucide-react'

interface DownloadTableButtonsProps {
  onOpenFolderClick?: () => Promise<void>
  onDeleteFileClick?: () => Promise<void>
  onConvertMP3Click?: () => Promise<void>
}

export function DownloadTableButtons({
  onConvertMP3Click = async () => {},
  onDeleteFileClick = async () => {},
  onOpenFolderClick = async () => {},
}: DownloadTableButtonsProps) {
  return (
    <TableCell className="transition-all duration-700">
      <div className="flex justify-end space-x-2 max-md:hidden">
        <Tooltip message="Abrir na pasta">
          <Button
            onClick={onOpenFolderClick}
            variant="outline"
            size="xs"
            className="cursor-pointer"
          >
            <FolderOpen className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
          </Button>
        </Tooltip>

        <Tooltip message="Deletar video">
          <Button
            onClick={onDeleteFileClick}
            variant="outline"
            size="xs"
            className="cursor-pointer"
          >
            <Trash className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
          </Button>
        </Tooltip>

        <Tooltip message="Converter para MP3">
          <Button
            onClick={onConvertMP3Click}
            variant="outline"
            size="xs"
            className="cursor-pointer"
          >
            <FileAudio className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
          </Button>
        </Tooltip>
      </div>
      <div className="hidden max-md:flex">
        <DropdownMenu>
          <Tooltip message="Ações que podem ser executadas">
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="xs"
                className="select-none outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
              >
                {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
                {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
                <MoreHorizontal className="h-4 w-4 text-zinc-700 dark:text-gray-100" />
                <span className="sr-only">Ações para executar com o video</span>
              </Button>
            </DropdownMenuTrigger>
          </Tooltip>
          <DropdownMenuContent align="end">
            <Button
              onClick={onOpenFolderClick}
              variant="ghost"
              size="xs"
              className="flex w-full cursor-pointer items-center justify-start gap-2"
            >
              <FolderOpen className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
              <span className="text-sm text-zinc-800 dark:text-zinc-500">
                Abrir na pasta
              </span>
            </Button>
            <Button
              onClick={onDeleteFileClick}
              variant="ghost"
              size="xs"
              className="flex w-full cursor-pointer items-center justify-start gap-2"
            >
              <Trash className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
              <span className="text-sm text-zinc-800 dark:text-zinc-500">
                Deletar video
              </span>
            </Button>
            <Button
              onClick={onConvertMP3Click}
              variant="ghost"
              size="xs"
              className="flex w-full cursor-pointer items-center justify-start gap-2"
            >
              <FileAudio className="h-3 w-3 text-zinc-700 dark:text-zinc-500" />
              <span className="text-sm text-zinc-800 dark:text-zinc-500">
                Converter para MP3
              </span>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TableCell>
  )
}
