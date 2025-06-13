const express = require('express');
const app = express();

function isoldenoughmiddlware(req, res, next) {
    const age = Number(req.query.age);
    if (age >= 18) {
        next();
    }
    else {
        res.status(403).json({ mssg: "Sry U Are not elible yet" });
    }
}
app.use(isoldenoughmiddlware);
app.get("/ride1",function(req,res){
    res.status(200).json({mssg:"Enjoy the Ride"});
});
app.listen(3000);