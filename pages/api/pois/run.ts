import fetch from "isomorphic-fetch";
import fs from "fs";
import cats from "./data/entry.json";
import { NextApiRequest, NextApiResponse } from "next";

const pageSize = 25;
// const city = '汕头';
const city = "大同";

const genURL = ({ types, pageSize, pageIndex }: any) =>
  `//restapi.amap.com/v3/place/text?key=0be38fc2fae9d48dc6161615689ce700&keywords=&types=${encodeURIComponent(
    types
  )}&city=${encodeURIComponent(
    city
  )}&children=1&offset=${pageSize}&page=${pageIndex}&extensions=all`;

// 单个Poi分类
const getPoi = async (types: any) => {
  const arr = [];
  console.log(`fetching ${city} ${types} ${1}`);
  const json = await fetch(genURL({ types, pageIndex: 1, pageSize })).then(
    res => res.json()
  );
  arr.push(...json.pois);
  // 获取总条数
  const count = json.count;
  const pages = Math.ceil(count / pageSize);
  // 分批请求完成全量覆盖
  for (let index = 1; index <= pages; index++) {
    console.log(`fetching ${city} ${types} ${index}/${pages}`);
    const perJSON = await fetch(
      genURL({ types, pageIndex: index, pageSize })
    ).then(res => res.json());
    arr.push(...perJSON.pois);
  }
  console.log(`done`);
  // 存储起来
  return arr;
};

const run = async () => {
  if (!fs.existsSync(`./pages/api/pois/data/${city}`)) {
    fs.mkdirSync(`./pages/api/pois/data/${city}`);
  }
  for (const types of cats) {
    if (fs.existsSync(`./pages/api/pois/data/${city}/${types}.json`)) {
      continue;
    } else {
      const result = await getPoi(types);
      fs.writeFileSync(
        `./pages/api/pois/data/${city}/${types}.json`,
        JSON.stringify(result)
      );
    }
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await run();
  res.send("ok");
};

// run();
