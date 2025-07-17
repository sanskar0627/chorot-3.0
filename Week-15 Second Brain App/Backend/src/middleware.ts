import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();

export const useMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers["authorization"];
    const decoded=jwt.verify(header as string,process.env.JWT_SECRET_KEY!)
    if(decoded){
        //@ts-ignore
        req.userId=decoded.id;
        next()
    }
    else{
        res.status(403).json({message:"You are not logged in"})
    }
}