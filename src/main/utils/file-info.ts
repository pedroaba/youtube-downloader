import { statSync } from 'node:fs'

export class FileUtils {
  static getFileSize(filepath: string) {
    return statSync(filepath).size
  }
}
