export default async function ReviewDetails({params} : {
    params: Promise<{productId: string}>
}) {
    const productId = (await params).productId
    return (
        <>
        <h1>Reviews about product {productId}</h1>
        </>
    )
} 