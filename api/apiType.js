// @flow
import type { Tracks } from '../constants'

export type Files = {
    [fileName: string]: File
}

export type Api = {
    submitFiles: (files: File) => Promise<void>,
    getMasterConfig: (dept: string) => Promise<Tracks>
}

