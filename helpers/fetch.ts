import { CATCHED_CODE, FetchError } from '@/config/error';
import CONSTANTS from '@/config/constants';
import { getCookie } from './secure';
import fetch from 'isomorphic-fetch';
import { logger } from '@/core/logger';
import qs from 'qs';

let token: string;

export const getToken = () => token || getCookie(CONSTANTS.KEYOF_TOKEN);
export const setToken = (t: string) => {
  token = t;
};

export default fetch;

export async function enhancedFetch<D = any>(api: string, opts?: RequestInit) {
  // 处理URL
  const url = api;
  const options = {
    method: 'GET',
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
      ...(opts ? opts.headers : {}),
    },
  };
  if (!options.headers.Authorization) {
    delete options.headers.Authorization;
  }
  // 处理参数params
  logger.info(`[ ${options.method} ] ${api} fetching...`);

  // 为了解决node请求中文识别问题
  const result = await fetch(url, options);
  const json = await result.clone().json();
  logger.info(`[ ${options.method} ] ${api}`, json);
  if (CATCHED_CODE.includes(json.statusCode)) {
    throw new FetchError(json.statusCode);
  }
  return json;
}

const SUNMI_PROD_URL = process.env.SUNMI_PROD_URL || 'http://localhost:3000';

const createLocalUtil = (method: string) => {
  return async function<D = any>(url: string, query: any = {}): Promise<D> {
    const defaultUrl = `${SUNMI_PROD_URL}${url}`;
    let fullUrl = defaultUrl;
    const opt = {
      method,
      body: JSON.stringify(query),
    };
    if (method === 'GET') {
      fullUrl = `${defaultUrl}?${qs.stringify(query)}`;
      delete opt.body;
    }
    const json = await fetch(fullUrl, opt).then(res => res.json());
    return json;
  };
};

export const local = {
  get: createLocalUtil('GET'),
  post: createLocalUtil('POST'),
  put: createLocalUtil('PUT'),
  delete: createLocalUtil('DELETE'),
};

const createHttpUtil = (method: string) => {
  return async function<D = any>(url: string, query: any = {}): Promise<D> {
    let fullUrl = url;
    const opt = {
      method,
      body: JSON.stringify(query),
    };
    if (method === 'GET') {
      fullUrl = `${url}?${qs.stringify(query)}`;
      delete opt.body;
    }
    const json = await fetch(fullUrl, opt).then(res => res.json());
    return json;
  };
};

export const http = {
  get: createHttpUtil('GET'),
  post: createHttpUtil('POST'),
  put: createHttpUtil('PUT'),
  delete: createHttpUtil('DELETE'),
};
