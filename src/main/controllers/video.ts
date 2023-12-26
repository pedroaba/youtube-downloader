import ytdl, { type videoInfo } from 'ytdl-core'

export class VideoDownloader {
  async downloadVideoByUrl(url: string) {}

  static async getVideoInfo(url: string): Promise<videoInfo> {
    return ytdl.getInfo(url)
  }
}
