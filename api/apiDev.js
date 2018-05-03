// @flow
import type { Api, Files } from './apiType';

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
    }
}


