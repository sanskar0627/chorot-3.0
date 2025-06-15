const express = require("express");
const app = express();
function middlware(req, res, next) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if (num1 === 0 && num2 === 0) {
        res.status(404).send("ENter a valid number");
    }
    else {
        next();
    }
}
app.get("/sum/:num1/:num2",middlware, (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1 + num2;
    res.json({ result: result });
});
app.listen(3000);
