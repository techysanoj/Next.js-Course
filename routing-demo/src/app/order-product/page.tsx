"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); // sending back to home page
        // multiple options are there like replace, back, forward, much more
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}