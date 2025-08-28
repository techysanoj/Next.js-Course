"use client"; // it tells that this is client components

import { useState } from "react";

export default function DashboardPage() {
    console.log("Dashboard client compoent")
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Dashboard</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello, {name}</p>
        </div>
    )
}