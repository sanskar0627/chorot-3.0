import express  from "express";
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hi welcomew to website ")
})

app.listen(4000,()=>{
    console.log(`The port is running on  https://localhost:4000`)
})