import express  from "express";

import reauth from "./routes/auth"
const app=express();

app.use('/api/user',reauth);


app.listen((4000),()=>{
    console.log(`The port is runiing on https://localhost:4000 `);
});