import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { getCatalogs } from '@/api/amap/catalogs';
import XLSX from 'xlsx';
import { at } from 'lodash';

const locales: any = {
  name: '名称',
  type: '类型',
  pname: '省',
  cityname: '市',
  adname: '区',
  address: '详细地址',
  tel: '联系电话',
  business_area: '所属商圈',
  'indoor_data.floor': '楼层索引',
  'indoor_data.truefloor': '楼层名称',
  'biz_ext.cost': '客单价',
};

const genLabel = (key: string) => locales[key];

const toExcel = (
  json: object[],
  mapper = (v: object) => v,
  fields: string[],
) => {
  const ws = XLSX.utils.aoa_to_sheet(
    [fields.map(field => genLabel(field))].concat(
      json.map(i => at(mapper(i), fields)),
    ),
  );
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
  const buf = XLSX.write(wb, { type: 'buffer' });
  return buf;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const arr = [];
  const city = req.query.adcode as string;
  for (const catalog of getCatalogs()) {
    const json = readFileSync(
      `./temp/json/pois/${city}/${catalog.NEW_TYPE}.json`,
      'utf-8',
    );
    arr.push(...JSON.parse(json));
  }

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  );
  res.send(
    toExcel(arr, i => ({ ...i }), [
      'name',
      'type',
      'pname',
      'cityname',
      'adname',
      'address',
      'tel',
      'business_area',
      'indoor_data.floor',
      'indoor_data.truefloor',
      'biz_ext.cost',
    ]),
  );
};
