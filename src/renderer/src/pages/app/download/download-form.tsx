import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import colors from 'tailwindcss/colors'
import { z } from 'zod'

const videoDownloadSchema = z.object({
  url: z.string().url(),
})

type VideoDownloadForm = z.infer<typeof videoDownloadSchema>

export function DownloadForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<VideoDownloadForm>({
    resolver: zodResolver(videoDownloadSchema),
  })

  async function handleVideoDownload(data: VideoDownloadForm) {
    try {
      console.log(data)

      toast.success("Video: 'Nome do video'", {
        action: {
          label: 'View on explorer',
          onClick: () => {},
        },
        actionButtonStyle: {
          backgroundColor: colors.zinc[700],
          height: 32,
        },
        description: 'Download feito com sucesso!',
        descriptionClassName: 'text-sm text-zinc-500 dark:text-zinc-600',
      })
    } catch {
      toast.error("Video: 'Nome do video'", {
        action: {
          label: 'Tentar novamente',
          onClick: () => handleVideoDownload(data),
        },
        actionButtonStyle: {
          height: 32,
        },
        description:
          'Houve um erro durante o download, por favor aguarde e tente novamente!',
        descriptionClassName: 'text-sm text-zinc-500 dark:text-zinc-600',
      })
    }
  }

  return (
    <form
      className="flex items-center"
      onSubmit={handleSubmit(handleVideoDownload)}
    >
      <div className="flex flex-1 items-center gap-4">
        <Label htmlFor="url">Video Url</Label>
        <Input
          type="url"
          id="url"
          className="h-10 flex-1 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
          placeholder="Exemplo: https://www.youtube.com/watch?v=uNFB9EbQz90"
          {...register('url')}
        />
      </div>
      <Button
        type="submit"
        className="ml-4 h-10"
        variant="ghost"
        disabled={isSubmitting}
      >
        Baixar
      </Button>
    </form>
  )
}
