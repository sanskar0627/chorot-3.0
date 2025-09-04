import express  from "express";
const app=express();

app.get("/hello",(req,res)=>{
    res.send("Hello , world")
})

app.get('/greet/:name',(req,res)=>{
    const name =req.params.name;
    res.send(`hello ${name}`);
})

app.get("/sum/:a/:b",(req,res)=>{
    const a=Number(req.params.a);
    const b=Number(req.params.b);
    res.send(`${a+b}`);
})

app.get("/echo/:a",(req,res)=>{
    const a=String(req.params.a);
    res.json({"mssg":`${a}`});
})

app.listen(4000,()=>{
    console.log(`the port is running on https://localhost:4000`)
})