// @flow

export type Files = {
    [fileName: string]: File
}

export type Api = {
    submitFiles: (files: File) => Promise<void>
}

