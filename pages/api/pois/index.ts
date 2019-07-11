import { NextApiRequest, NextApiResponse } from "next";
import cats from "./data/entry.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const arr = [];
  const { city } = req.query;
  for (const types of cats) {
    const result = await import(`./data/${city}/${types}.json`);
    arr.push(...result.default);
  }
  res.send(arr);
};
