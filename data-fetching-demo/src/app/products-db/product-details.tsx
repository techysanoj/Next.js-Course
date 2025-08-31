"use client"
import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db"
import Link from "next/link";
import { useOptimistic } from "react";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export const ProductDetail = ({products}: {products: Product[]}) => {
    const [optimisticProducts, setOptimisticProducts] = useOptimistic(
        products, 
        (currentProducts, productId) => {
        return currentProducts.filter((product) => product.id !==productId)
    })

    const removeProductById = async (productId: number) => {
        setOptimisticProducts(productId)
        await removeProduct(productId)
    }

    return (
        <ul className="space-y-4 p-4">
            {optimisticProducts.map((product) => (
                <li
                key={product.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    <h2 className="text-xl font-semibold">
                    <Link href = {`/products-db/${product.id}`}>{product.title}</Link></h2>
                    <p>{product.description}</p>
                    <p className="text-lg font-medium">${product.price}</p>

                    <form action={removeProductById.bind(null, product.id)}>
                        {/* we can directly use the onclick onto this but this will make this client componet so we will wrap it to form element */}
                        <button type="submit" 
                        className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-400">
                            Delete
                        </button>
                    </form>
                    
                </li>
            ))}
        </ul>
    )
}