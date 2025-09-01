"use client"

import { useAuth, useUser } from "@clerk/nextjs"; // for getting the auth details and user details as in server component we were using auth currentUser
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    // if(!isLoaded || !userId) {
    //     return null;
    // }
    const {isLoaded, IsSignedIn, user} = useUser(); // -> isLoaded conflict

    if(!isLoaded || !IsSignedIn) {
        return null;
    }  
    

    return (
        <>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Inc + 1</button>

        </>
    )
}