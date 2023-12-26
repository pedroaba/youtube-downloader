export function formatVideoDuration(videoDurationInSeconds: number) {
  const hours = Math.trunc(videoDurationInSeconds / 60 / 60)
    .toString()
    .padStart(2, '0')

  const minutes = Math.trunc((videoDurationInSeconds / 60) % 60)
    .toString()
    .padStart(2, '0')

  const seconds = videoDurationInSeconds % 60

  return `${hours}h ${minutes}m ${seconds}s`
}
