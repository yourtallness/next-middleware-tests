import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Hello from node handler');

    return res.status(200).json({
        runtime: process.env.NEXT_RUNTIME,
        url: req.url,
        query: req.query,
        header: req.headers['my-header'] || null,
        cookie: req.cookies['my-cookie'] || null,
    });
}
