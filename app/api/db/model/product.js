import { mongoose } from "mongoose";

const schema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    isAvailable:{
        type:Boolean,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

// because sometimes it overwrites the existing model and throws an error so thats why we do the below using OR || operator
const productModel = mongoose.models.products || mongoose.model("products",schema);
export default productModel