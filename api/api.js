// @flow
import apiDev from './apiDev';
import apiServer from './apiServer';

const isProd = false;

const api = isProd ? apiServer : apiDev

export default api;