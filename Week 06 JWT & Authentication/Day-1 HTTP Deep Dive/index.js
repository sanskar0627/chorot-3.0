const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
let users = [];
const JWT_SECRET = "randomsaksarkapassword";

app.post("/signUp", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.send("You Are Signied in")

});
app.post("/signIn", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const usersfound = users.find(function (u) {
        if (u.username == username && u.password == password) {
            return true;
        }
        else {
            return false;
        }
    });

    if (usersfound) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.send(token)
    }
    else {
        res.status(403).send({
            message: "Invalid username or Password"
        })
    }
});
app.get("/me", (req, res) => {
    const token = req.headers['token'];
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    const usersfound = users.find(function (u) {
        return u.username == username

    });
    if (usersfound) {
        res.json({
            username: usersfound.username,
            password: usersfound.password
        });
    }
    else {
        res.status(403).send({
            message: "TOken invalid"
        })
    }

});
app.listen(3000);