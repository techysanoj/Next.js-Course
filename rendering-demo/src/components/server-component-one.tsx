import fs from "fs";

// server component inside another server components
// import { ServerComponentTwo } from "./server-component-two";

// client component inside server component
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
    return (
        <>
         <h1>Server Component One</h1>
         {/* <ServerComponentTwo></ServerComponentTwo> */}
         <ClientComponentOne> </ClientComponentOne>
        </>
    )
}