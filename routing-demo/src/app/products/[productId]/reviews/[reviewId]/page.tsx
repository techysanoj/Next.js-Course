import { notFound } from "next/navigation"
export default async function ReviewsData({params} : {
    params: Promise<{productId: string, reviewId: string}>
}) {
    const reviewId = (await params).reviewId
    const productId = (await params).productId
    if(parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <>
        <h1>Review {reviewId} about product {productId}</h1>
        </>
    )
} 