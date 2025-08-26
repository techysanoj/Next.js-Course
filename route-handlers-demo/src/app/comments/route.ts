import { NextRequest } from "next/server";
import { comments } from "./data"
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query"); // single query parameter
    // it will be like in the query you are refering to ?query=first
    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {"Content-Type": "application/json"},
        status: 201,
    });
}