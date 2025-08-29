"use client"

import { serverSideFunction } from "@/utils/server-utils"; // using this directly doess not prevent to use server funciton in client side code
// to prevent this we need to use server-only package. Install this using npm i server-only

export default function ClientRoutePage() {
    const result = serverSideFunction();
    return <h1>Client Route {result}</h1>
}