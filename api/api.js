// @flow
import apiDev from './apiDev';
import apiServer from './apiServer';
import type { Api } from './apiType';

const isProd = true;

const api: Api = isProd ? apiServer : apiDev

export default api;