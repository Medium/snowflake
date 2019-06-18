// @flow
import type { Api, Files } from './apiType';
import { tracks, mockRoleToLevel } from '../constants'

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 500);
    })
} 

const apiDev: Api = {
    async submitFiles(files: Files) {
        // does some stuff
        await wait();
        return;
    },
    async getMasterConfig(department: string) {
        return {
            rating: tracks,
            role: mockRoleToLevel
        }
    },
    async fetchUsers() {
        return []
    },
    async fetchUser() {
        return 
    },
    async saveUser() {
        return
    }
}

export default apiDev;