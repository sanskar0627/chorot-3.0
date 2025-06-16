const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
let users = [];
const JWT_SECRET = "randomsaksarkapassword";

function auth(req, res, next) {
    const token = req.headers.token;
    const deccodeddata = jwt.verify(token, JWT_SECRET);
    if (deccodeddata.username) {
        req.username = deccodeddata.username;
        next();
    }
    else {
        res.send("You are Not Logged in!!!!")
    }
}
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

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
        res.send({ token });
    }
    else {
        res.status(403).send({
            message: "Invalid username or Password"
        })
    }
});
app.get("/me", auth, (req, res) => {

    const userFound = users.find(u => u.username === req.username);

    if (userFound) {
        res.json({
            username: userFound.username,
            password: userFound.password
        });
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(3000);