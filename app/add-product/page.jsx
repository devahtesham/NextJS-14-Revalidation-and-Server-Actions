// "use client"
import formSubmitAction from "@/actions/addProductAction";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";


// import { addProduct } from "@/lib/product";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

export default function AddProductPage() {

    // needed when whis will client component
    // const router = useRouter()

    // needed when whis will client component
    // const [productDetails, setProductDetails] = useState({
    //     title: "",
    //     description: "",
    //     price: "",
    //     isAvailable: "Yes"
    // })

    // needed when whis will client component
    // const handleInputChange = (e) => {
    //     const { value, name } = e.target
    //     setProductDetails({
    //         ...productDetails,
    //         [name]: value
    //     })

    // }

    // needed when whis will client component
    // const addProductHandler = async (e) => {
    //     e.preventDefault()
    //     let objtoSend = {
    //         ...productDetails,
    //         isAvailable: productDetails.isAvailable === "Yes" ? true : false
    //     }

    //     console.log('[objtoSend]', objtoSend)
    //     try {
    //         await addProduct(objtoSend);
    //         router.push("/product-listing")

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

   
    return (
        <>
            {/* This UI needed when we make this a client component */}
            {/* <div className="container">
                <h1>Add Your Product</h1>
                <div className="row">
                    <div className="col-6">
                        <Card>
                            <form
                                onSubmit={addProductHandler}
                            >
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" value={productDetails.title} name="title" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" value={productDetails.description} name="description" onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control" value={productDetails.price} name="price" onChange={handleInputChange} />
                                </div>
                                <select className="form-select" value={productDetails.isAvailable} name="isAvailable" onChange={handleInputChange} >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <button type="submit" className="btn btn-primary my-4">Submit</button>
                            </form>
                        </Card>

                    </div>
                </div>
            </div> */}

            {/* This UI needed when we are using server action */}
            <div className="container">
                <h1>Add Your Product</h1>
                <div className="row">
                    <div className="col-6">
                        <Card>
                            <form
                                action={formSubmitAction}
                            >
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" name="description" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control" name="price" required />
                                </div>
                                <select className="form-select" name="isAvailable" >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <Button />
                            </form>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}