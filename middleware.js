import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req) {
    const res = NextResponse.next();

    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const isProtected = req.nextUrl.pathname.startsWith('/admin');

    if (isProtected && !session) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    return res;
}


export const config = {
    matcher: ['/admin/:path*'],
};
