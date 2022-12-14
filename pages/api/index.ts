import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export const Handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({ name: 'John Doe' });
};

export default Handler;
