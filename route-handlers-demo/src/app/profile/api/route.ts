import { type NextRequest } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"))
    const headerList = await headers(); // it is an async method
    console.log(headerList.get("Authorization"))
    // return new Response("Profile API data");

    // const theme = request.cookies.get("theme");
    // console.log(theme)
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");

    console.log(cookieStore.get("resultsPerPage"));
    return new Response("<h1>Profile API Data</h1>",
        {
            headers: {
            "Content-Type": "text/html",// custom headers
            "Set-Cookie": "theme=dark",
        },
        })
}