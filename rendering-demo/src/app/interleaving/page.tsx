// import { ServerComponentOne } from "@/components/server-component-one" // this will work because default this is a server component and we are importing server compoent inside server compoent

// import { ClientComponentOne } from "@/components/client-component-one"

// import { ServerComponentOne } from "@/components/server-component-one" // When we used the client component in the server compoent

import { ClientComponentOne } from "@/components/client-component-one" // when we used the server component inside the client compoentne
import { ServerComponentOne } from "@/components/server-component-one"

export default function InterLeavingPage() {
    return (
        <>
            <h1>Interleaving Page</h1>
            {/* <ServerComponentOne></ServerComponentOne> */}
            <ClientComponentOne>
                <ServerComponentOne></ServerComponentOne>
            </ClientComponentOne>
        </>
    )
}