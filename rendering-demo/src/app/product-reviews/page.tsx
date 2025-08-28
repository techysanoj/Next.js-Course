import { Product } from "@/components/product"
import { Reviews } from "@/components/reviews"
import { Suspense } from "react"

export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            {/* if we are directly using this then the page load will take too much time accordinlgy */}

            {/* using suspense we can show something else like here we are showing p tag when the content is begin loaded */}
            <Suspense fallback = {<p>Loading Product Details</p>}>
                <Product></Product> 
            </Suspense>
            <Suspense fallback = {<p>Loading Product Review Details</p>}>
                <Reviews></Reviews>
            </Suspense>
            
        </div>
    )
}