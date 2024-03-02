import { NextResponse } from "next/server";

export async function GET(){
    // await connectDB()
    return NextResponse.json({
        message:"API is working Perfectly !"
    },{status:200})
}