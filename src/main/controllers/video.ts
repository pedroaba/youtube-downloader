import { Readable } from 'node:stream'

import ytdl from 'ytdl-core'

export class VideoDownloader {
  async downloadVideoByUrl(url): Promise<Readable> {
    return ytdl(url)
  }
}
