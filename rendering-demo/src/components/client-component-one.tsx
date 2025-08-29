"use client"

import { useState } from "react"
import { ClientComponentTwo } from "./client-component-two";


// server component inside client compoent -> not supported
// so to fix that we will pass server component as children prop to the client compoent
// import { ServerComponentOne } from "./server-component-one"; // now this will not work directly because 
// any component inside the client compoent becomes a client component too

export const ClientComponentOne = ({children}: {
    children: React.ReactNode
}) => {
    const [name, setName] = useState("Sanoj");
    return (
        <>
            <h1>Client Component One</h1>
            {/* <ClientComponentTwo></ClientComponentTwo> */}
            {children}
            {/* <ServerComponentOne></ServerComponentOne> */}
        </>
    )
    
    
}