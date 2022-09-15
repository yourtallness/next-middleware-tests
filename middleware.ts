import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Hello from middleware');

    if (['/config-node', '/config-edge', '/config-gssp'].includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    const rewriteDestination = request.nextUrl.searchParams.get('rewrite_to');

    let url: URL;

    try {
        url = new URL(rewriteDestination || '');
    } catch (_) {
        url = new URL([request.nextUrl.protocol,
            '//',
            request.nextUrl.hostname,
            ':',
            request.nextUrl.port,
            rewriteDestination || request.nextUrl.pathname,
            '?foo=bar&',
            request.nextUrl.searchParams.toString(),
        ].join(''));
    }

    const response = NextResponse.rewrite(url);

    // Set a header
    response.headers.set('my-header', 'baz');

    // Set a cookie
    response.cookies.set('my-cookie', 'wyz');

    return response;
}
