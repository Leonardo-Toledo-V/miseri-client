import { NextResponse } from "next/server";
import { verifyAuth } from "./libs/auth";

export async function middleware(req){
    const token = req.cookies.get('miseri-auth')?.value;

    if(token === undefined){
        return NextResponse.redirect(new URL("/", req.url));
      }

    try {
        await verifyAuth(token);
        NextResponse.redirect(new URL("/dashboard", req.url));
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}


export const config = {
    matcher: ["/hola/:path*"]
}