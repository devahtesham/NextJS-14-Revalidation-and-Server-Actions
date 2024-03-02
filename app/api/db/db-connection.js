
import { mongoose } from "mongoose";


export async function connectDB() {
    try {
        await mongoose.connect(process.env.BASE_URI)
        console.log("MongoDB Connect !")
    } catch (error) {
        console.log(error)
    }
}




// .env.local file data
/*

username=devahtesham
password=devahtesham3301
BASE_URI=`mongodb+srv://${username}:${password}@cluster0.uqftu3w.mongodb.net/NextJS-CRUD-APIs?retryWrites=true&w=majority&appName=Cluster0`

*/