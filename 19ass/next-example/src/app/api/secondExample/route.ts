import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  text: string;
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ text: 'Hello Next.js with TypeScript' });
}
