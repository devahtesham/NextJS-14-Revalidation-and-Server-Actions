
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connectDB } from "@/app/api/db/db-connection";
import productModel from "@/app/api/db/model/product";


// server action
const formSubmitAction = async (formData) => {
    "use server"
    const title = formData.get('title')
    const description = formData.get('description')
    const price = formData.get('price')
    const isAvailable = formData.get('isAvailable') === 'Yes' ? true : false

    if (!title || !description || !price) {
        return
    }

    let objToSend = {
        title,
        description,
        price,
        isAvailable,
    }

    await connectDB();
    const response = await productModel.create(objToSend);
    console.log('[response]', response)

    // on Demand revalidation using revalidate path. now /product-listing route cache invalid only when the form is submitted or you can say the product will be added
    revalidatePath('/product-listing')      
    redirect("/product-listing")
}

export default formSubmitAction
