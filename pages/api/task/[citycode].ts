import fs from 'fs';
import { getCatalogs, Catalog } from '@/api/amap/catalogs';
import { amap } from '@/api/amap';
import { NextApiRequest, NextApiResponse } from 'next';
import { range, flatMapDeep, chunk } from 'lodash';

const pageSize = 25;
export const getPlaceTextPages = (count: number) => Math.ceil(count / pageSize);

const getPlaceText = async ({ types, city, pageIndex }: any) =>
  await amap.service<any>('/place/text', {
    types,
    pageIndex,
    city,
    children: 1,
    extensions: 'all',
    citylimit: 'true',
    offset: pageSize,
  });

const catalogs = getCatalogs();

const getPoi = async ({ types, citycode }: any) => {
  // 单个Poi分类
  const checkoutPage = (index: number) =>
    getPlaceText({
      types,
      pageIndex: index,
      city: citycode,
    });

  const poi = await checkoutPage(1);
  // 获取总条数
  const pages = getPlaceTextPages(poi.count);
  const getRest = async () => {
    // 分批请求完成全量覆盖
    const arr = [];
    // 并发量20
    const chunks = chunk(range(2, pages + 1), 20);
    for (const chunk of chunks) {
      console.log(`fetching ${citycode} ${types} ${chunks} ${chunks.length}`);
      const pois = flatMapDeep(await Promise.all(chunk.map(checkoutPage)));
      const chunkPois = flatMapDeep(pois.map(p => p.pois));
      arr.push(...chunkPois);
    }
    return arr;
  };
  return { citycode, types, pages, poi, getRest };
};

const savePoi = async (query: any, filename: string) => {
  const { poi, getRest } = await getPoi(query);
  const rest = await getRest();
  console.log(poi);
  const pois = poi.pois && poi.pois.concat(rest);
  poi.pois && fs.writeFileSync(filename, JSON.stringify(pois));
};

const getFullPoi = async (query: any) => {
  const { types, citycode } = query;
  const dir = `./temp/${citycode}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filename = `${dir}/${types}.json`;
  if (fs.existsSync(filename)) {
    console.log(filename, 'exist');
    return [];
  } else {
    console.log(filename, 'creating');
    await savePoi(query, filename);
    return [];
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  const getCatalogPoi = (catalog: Catalog) =>
    getFullPoi({ ...req.query, types: catalog.NEW_TYPE });
  for (const catalog of catalogs) {
    const index = catalogs.findIndex(c => c.NEW_TYPE === catalog.NEW_TYPE);
    console.log(`${index + 1}/${catalogs.length}`);
    await getCatalogPoi(catalog);
  }
  res.send('ok');
};
