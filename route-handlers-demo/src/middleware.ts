// navigating to /profile but it redirects to homepage

// 1. using the custom matcher config
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/profile",
// }

// 2. conditional statements
// export function middleware(request: NextRequest) {
//     if(request.nextUrl.pathname === '/profile') {
//         // return NextResponse.redirect(new URL("/hello", request.nextUrl)) -> this will change the url and the content
//         return NextResponse.rewrite(new URL("/hello", request.nextUrl)) // this will change only the content
//     }
// }

// 3. use of cookies
// export function middleware(request: NextRequest) {
//     const response = NextResponse.next();
//     const themePref = request.cookies.get("theme");
//     if(!themePref) {
//         response.cookies.set("theme", "dark");
//     }
//     return response;
// }

// 4. use of headers
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const themePref = request.cookies.get("theme");
    if(!themePref) {
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "custom-value");
    return response;
}