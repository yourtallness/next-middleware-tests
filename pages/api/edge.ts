import type { NextRequest } from 'next/server';

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
    console.log('Hello from edge handler');

    const response = new Response(
        JSON.stringify({
            runtime: process.env.NEXT_RUNTIME,
            url: req.url,
            query: req.nextUrl.searchParams.toString(),
            header: req.headers.get('my-header') || null,
            cookie: req.cookies.get('my-cookie') || null,
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )

    return response;
}
