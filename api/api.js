// @flow
import type { Api } from './apiType'
import apiDev from './apiDev';
import apiServer from './apiServer';

const isProd = false;

const api: Api = isProd ? apiDev : apiDev

export default api;