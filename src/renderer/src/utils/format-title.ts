export function formatTitle(title: string): string {
  const defaultTitle = 'Youtube Downloader'

  if (!title) {
    return defaultTitle
  }

  return `${title} | ${defaultTitle}`
}
