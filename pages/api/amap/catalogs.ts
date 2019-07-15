import XLSX from 'xlsx';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Catalog {
  序号: number;
  NEW_TYPE: string;
  大类: string;
  中类: string;
  小类: string;
}

export const getCatalogs = () => {
  const workbook = XLSX.readFile('./static/excel/catalogs.xlsx');
  const json = XLSX.utils.sheet_to_json<Catalog>(
    workbook.Sheets['POI分类与编码（中英文）'],
  );
  return json;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await getCatalogs();
    res.send(result);
  } catch (error) {
    res.send([]);
  }
};
