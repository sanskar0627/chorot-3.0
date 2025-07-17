import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import dotenv from "dotenv";
dotenv.config();
const jwtSecret = process.env.JWT_SECRET_KEY;
if (!jwtSecret) {
  throw new Error("JWT_SECRET_KEY is missing in environment variables");
}

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  //to do  zod  validation and hash the password // check also if there is someone with same username or not
  const { username, password } = req.body;
  try {
    await UserModel.create({
      username: username,
      password: password,
    });
    res.status(200).json({ message: "User Signed up" });
  } catch (e) {
    res.status(411).json({
      message: "User Already Existed",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      jwtSecret
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000);
