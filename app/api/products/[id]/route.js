import { NextResponse } from "next/server";
import { connectDB } from "../../db/db-connection";
import productModel from "../../db/model/product";

export async function GET(request,content){
    const id = content.params.id;
    await connectDB()

    try {
        const response = await productModel.find({_id:id});
        return NextResponse.json({message:"Product Fetch Successfully !",data:response},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Internal Server error !'},{status:503})   
    }

}

export async function PUT(request,content){
    const id = content.params.id;
    const body = await request.json();

    await connectDB();

    const objToSend = {
        ...body
    }
    try {
        
        const response = await productModel.findByIdAndUpdate(id,objToSend,{new:true});
        return NextResponse.json({message:"Product Updated Successfully !",data:response},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Internal Server error !'},{status:503})   
    }

}

export async function DELETE(request,content){
    const id = content.params.id;

    await connectDB();

    try {
        const response = await productModel.findByIdAndDelete(id);
        return NextResponse.json({message:"Product Deleted Successfully !",data:response},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Internal Server error !'},{status:503})   
    }

}