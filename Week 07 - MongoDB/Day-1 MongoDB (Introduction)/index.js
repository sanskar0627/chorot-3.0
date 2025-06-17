const express = require("express");
const { UserModel, TodoModel } = require("./db");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "sanskar12345"
mongoose.connect("mongodb+srv://sanskar0627:9635771173%40Hp@cluster0.ntuj2ya.mongodb.net/Todo-Application");

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        message: "You are Logged In"
    });
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });
    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({ message: "Signed in successfully", token });
    } else {
        res.status(403).json({
            message: "Incorrect credinatials"
        })
    }
});
app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    await TodoModel.create({
        title, userId
    })
    res.json({
        userId: userId
    })

});
app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
});
function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData) {
        req.userId = decodedData.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incomplete credentials"
        });

    }
}
app.listen(3000);