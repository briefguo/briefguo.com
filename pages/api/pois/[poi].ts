import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { poi } = req.query;
  const json = await import(`./data/${poi}.json`);
  res.send(json.default);
};
