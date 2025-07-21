import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

export interface AuthRequest extends Request {
  userID?: string| JwtPayload;
}

export const isAuthenticated = async(req: AuthRequest,res: Response,next: NextFunction)=>{
  try{
  const token = typeof req.headers.token === "string" ? req.headers.token : undefined;

    console.log("token..",token);
  if(!token){
    res.status(400).json({
      message: "Bad token Request"
    })
  return;
  }

  //comparing token
  if(!process.env.SECRET_KEY){
    res.status(500).json({
      message: "server internal problem"
    })
    return;
  }
  const decoded = jwt.verify(token, process.env.SECRET_KEY) as unknown as { userID: Types.ObjectId };
  req.userID = decoded.userID;
  next();
  }catch(err){
    res.status(401).json({
      message: `Inavlid or expired token ${err}`
    })
    return;
  }
}