const express = require('express');
const app = express();
// 4. Add route for sum
app.get('/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});

app.get('/sub/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    let sum;
    if (num1 > num2) {
        sum = num1 - num2;
    }
    else {
        sum = num2 - num1;
    }
    res.json({ result: sum });
});
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 * num2;
    res.json({ result: sum });
});
app.get('/div/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    let sum;
    if (num1 > num2) {
        sum = num1 / num2;
    }
    else {
        sum = num2 / num1;
    }
    res.json({ result: sum });
});

app.listen(3000);