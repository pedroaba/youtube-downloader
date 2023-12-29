import { Tooltip } from './tooltip'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({
  progress: progressInPercentage,
}: ProgressBarProps) {
  return (
    <Tooltip
      message={`O progresso está em ${progressInPercentage.toFixed(2)}%`}
    >
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-zinc-700/30 dark:bg-zinc-800/80">
        <div
          style={{ width: `${progressInPercentage}%` }}
          className="rounded-full bg-green-600 transition-all duration-700 dark:bg-green-700"
        />
      </div>
    </Tooltip>
  )
}
