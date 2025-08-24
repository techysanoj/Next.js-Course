import { notFound, redirect} from "next/navigation";
export default async function ReviewsData({params} : {
    params: Promise<{productId: string, reviewId: string}>
}) {
    const reviewId = (await params).reviewId
    const productId = (await params).productId
    if(parseInt(reviewId) > 100) {
        // notFound();
        redirect("/");
    }
    return (
        <>
        <h1>Review {reviewId} about product {productId}</h1>
        </>
    )
} 