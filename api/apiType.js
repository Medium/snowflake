// @flow
import type { Tracks, RoleToLevel } from '../constants'
import type { UserData } from '../models/UserData'
import type { MilestoneMap } from '../constants'

export type Files = {
    [fileName: string]: File
}

export type MasterConfig = {
    role: RoleToLevel,
    rating: Tracks
}

export type Api = {
    submitFiles: (files: File) => Promise<void>,
    getMasterConfig: (dept: string) => Promise<MasterConfig>,
    fetchUsers: () => Promise<Array<string>>,
    fetchUser: (username: string) => Promise<UserData>,
    saveUser: (ratings: MilestoneMap,  currentRole: string, username: string) => Promise<void>
}

