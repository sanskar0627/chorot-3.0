const express = require("express");
const app = express();
let count=0;
app.use((req, res, next) => {
    count++;
    const method=req.method;
    const url=req.url;
    const time=new Date().toISOString();
    console.log(`[${method}]${url}-${time}`);
    next();

});
app.get('/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});
app.get('/request',(req,res)=>{
    res.json({Total_Request_made:count});
});
app.listen(3000);