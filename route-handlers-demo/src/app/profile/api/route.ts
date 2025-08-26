import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"))
    const headerList = await headers(); // it is an async method
    console.log(headerList.get("Authorization"))
    // return new Response("Profile API data");
    return new Response("<h1>Profile API Data</h1>",
        {
            headers: {
            "Content-Type": "text/html" // custom headers
        },
        })
}