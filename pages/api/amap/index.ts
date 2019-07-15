import { NextApiRequest, NextApiResponse } from 'next';
import { sample } from 'lodash';
import { http, local } from '@/helpers/fetch';
import constants from '@/config/constants';

export const amap = {
  get<T>(service: string, query?: object): Promise<T> {
    return local.get('/api/amap', { service, ...query });
  },
  service<T>(service: string, query?: object): Promise<T> {
    return http.get(`//restapi.amap.com/v3${service}`, {
      key: sample(constants.AMAP_USER_KEYS),
      ...query,
    });
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { service, ...query } = req.query as any;
    res.send(await amap.service(service, query));
  } catch (error) {
    res.send(error);
  }
};
