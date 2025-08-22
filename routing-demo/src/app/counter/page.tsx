// "use client";
// import { useState } from "react";

// // export const metadata = {
// //     title: "Counter"
// // } - >  cannot use metadata in which use client is there means which is a client component

// export default function CounterPage() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>Count : {count}</p>
//             <button onClick={() =>setCount(count + 1)}>Increment</button>
//         </div>
//     )
// } -> one way

import { Counter } from "./counter";

export const metadata = {
    title: "Counter now we can use metadata here"
} 

export default function CounterPage() {
    return <Counter></Counter>
}