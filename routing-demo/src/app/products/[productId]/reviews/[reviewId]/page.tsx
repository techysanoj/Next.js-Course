import { notFound, redirect} from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}


export default async function ReviewsData({params} : {
    params: Promise<{productId: string, reviewId: string}>
}) {
    const reviewId = (await params).reviewId
    const productId = (await params).productId
    const random = getRandomInt(2);
    // if(random == 1) {
    //     throw new Error("Error Loading")
    // }
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