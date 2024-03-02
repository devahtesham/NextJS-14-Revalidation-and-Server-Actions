

import { NextResponse } from "next/server";
import { connectDB } from "../db/db-connection";
import productModel from "../db/model/product";
import { revalidateTag } from "next/cache";


export async function GET(request){
    console.log("product listing API Call !");
    // console.log('[request]',request)
    await connectDB();
    
    try {
        const response = await productModel.find({})
        return NextResponse.json({message:'Product fetch Successfully !',data:response},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Internal Server error !'},{status:503})
    }
}

export async function POST(request){
    const body = await request.json();
    await connectDB();
    try {
        let response = await productModel.create(body);
        console.log('[response]',response);
        return NextResponse.json({message:'Product added Successfully !'},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Internal Server error !'},{status:503})
    }
}