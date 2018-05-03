// @flow
import type { Api, Files } from './apiType';
import { tracks } from '../constants'

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
        return tracks;
    }
}

export default apiDev;