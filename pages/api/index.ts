// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.send('hello');
};
