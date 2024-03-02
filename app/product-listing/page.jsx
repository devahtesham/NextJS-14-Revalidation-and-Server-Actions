// export const dynamic = "force-dynamic"   // regenerate on every request from the browser or we can say page reload
// export const revalidate = 10             // (time based re-validation) cache of this segment valid till 10seconds since the request, then it regenerate this page 

import Card from "@/components/Card/Card";
import { fetchAllProducts } from "@/lib/product";

export default async function ProductListingPage() {
    console.log("Product Listing page rendered !")
    const data = await fetchAllProducts()
    return (
        <>
        
            <div className="container">
                <div className="row">
                {
                    data.map(product =>(
                    <div className="col-3" key={product._id}>
                        <Card>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="text-end fw-bolder ">${product.price}</p>
                            <p>Available:- {product.isAvailable ? 'Yes' : 'No'}</p>
                        </Card>
                    </div>
                        
                    ))
                }
                </div>
            </div>
        </>
    )
}