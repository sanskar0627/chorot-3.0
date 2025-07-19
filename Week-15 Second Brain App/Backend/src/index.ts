import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import dotenv from "dotenv";
import { useMiddleware } from "./middleware";
import { random } from "./utils";

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

app.post("/api/v1/content", useMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  await ContentModel.create({
    link,
    type,
    //@ts-ignore
    userid: req.userId,
    tags: [],
  });
  res.json({
    message: "Content Added",
  });
});

app.get("/api/v1/content", useMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({ userid: userId }).populate(
    "userid",
    "username"
  );
  res.json({
    content,
  });
});

app.delete("/api/v1/content", useMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteMany({
    _id: contentId,
    //@ts-ignore
    userid: req.userId,
  });
  res.json({
    message: "Deleted",
  });
});

app.post("/api/v1/brain/share", useMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    const existingLink = await LinkModel.findOne({
      //@ts-ignore
      userid: req.userId,
    });

    if (existingLink) {
      res.json({
        hash: existingLink.hash,
      });
      return;
    }

    const hash = random(10);
    await LinkModel.create({
      //@ts-ignore
      userid: req.userId,
      hash: hash,
    });
    res.json({
      message: "/share/" + hash,
    });
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userid: req.userId,
    });
  }
  res.json({
    message: "Removed Link",
  });
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({
    hash,
  });
  if (!link) {
    res.status(411).json({ message: "Sorry Incorrect Input" });
    return;
  }
  const content = await ContentModel.find({
    userid: link.userid,
  });
  const user = await UserModel.findById(link.userid);

  res.json({
    username: user?.username,
    content: content,
  });
});

app.listen(3000);
