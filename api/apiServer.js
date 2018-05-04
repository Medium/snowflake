// @flow
import type { Api, Files } from './apiType';
import _ from 'lodash';


const apiServer: Api = {
    submitFiles(files: Files) {
        let formdata = new FormData();
        _.forEach(files, (file, key) => {
            formdata.append(key, file);
        });
        formdata.append("department", "ENGINEERING");
        // update endpoint
        return fetch("http://localhost:8080/api/performancematrix/config", {
            body: formdata,
            method: 'POST',
        }).then(response => undefined)
    }
};

export default apiServer;

