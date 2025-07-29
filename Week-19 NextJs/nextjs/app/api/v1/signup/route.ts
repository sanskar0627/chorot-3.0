import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prismaClient=new PrismaClient();
export async function POST (req:NextRequest) {
    const data = await req.json();
    await prismaClient.uSer.create({
        data:{
            username: data.username,
            passwor: data.password
        }
    })
    return NextResponse.json({
        message:"You have been signed up"
    })
    
}

export  async function  GET(req:NextRequest) {
    const user=await prismaClient.uSer.findFirst();

    return NextResponse.json({
        user
    })
    
}