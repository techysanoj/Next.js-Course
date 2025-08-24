// we can not use async await in client component so for that we need to use "use" hook
// import Link from "next/link"
// export default async function NewsArticle({params, searchParams}: {
//     params: Promise<{articleId: string}>;
//     searchParams: Promise<{lang? : "en" | "es" | "fr"}>;
// }) {
//     const {articleId} = await params;
//     const {lang = "en"} = await searchParams;
//     return <div>
//         <h1>News Article {articleId}</h1>
//         <p>Reading in language {lang}</p>

//         <div>
//             <Link href = {`/articles/${articleId}?lang=en`}>English</Link>
//             <Link href = {`/articles/${articleId}?lang=es`}>Spanish</Link>
//             <Link href = {`/articles/${articleId}?lang=fr`}>French</Link>
//         </div>
//     </div>
// }
"use client"
import Link from "next/link";
import {use} from "react";
export default function NewsArticle({params, searchParams}: {
    params: Promise<{articleId: string}>;
    searchParams: Promise<{lang? : "en" | "es" | "fr"}>;
}) {
    const {articleId} = use(params);
    const {lang = "en"} = use(searchParams);
    return <div>
        <h1>News Article {articleId}</h1>
        <p>Reading in language {lang}</p>

        <div>
            <Link href = {`/articles/${articleId}?lang=en`}>English</Link>
            <Link href = {`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href = {`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
}