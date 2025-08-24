"use client";
import './styles.css'; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const navLinks = [
    { name: "Register", href: "/register"},
    { name: "Login", href: "/login"},
    { name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div>
            <div>
                <input value = {input} onChange={e => setInput(e.target.value)}></input> 
                {/* it will be same for all means if you write anything in the login page in this input button
                it will remain same for the register or forgot password
                to remove this simply change the layout.tsx file to templates.tsx*/}
            </div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link className= {isActive ? "font-bold mr-4 active" : "text-blue-500 mr-4 inactive"} href={link.href} key={link.name}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    );
}