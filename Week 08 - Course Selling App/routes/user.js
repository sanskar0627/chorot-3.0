const express=require("express");
const router=express.Router();
const { authenticationUser } = require("../middlewares/auth");
const jwt=require("jsonwebtoken");
const JWT_SECRET="your key";

router.post("/signup",(req,res)=>{
    res.send("User signedup")
});

router.post("/login",(req,res)=>{
    const {username,password}=req.body;
    //Fake logic
    if (username === "user" && password === "pass") {
    const token = jwt.sign({ username, role: "user" }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

router.get("/courses",(req,res)=>{
    res.send("all courses visible to user")
});

router.post("/courses/:courseId",(req,res)=>{
    res.send(`User purchased a course ${req.params.courseId}`);
});

router.post("/courses/:courseId",authenticationUser,(req,res)=>{
    res.send("Phurcahsed course")
})

module.exports=router;