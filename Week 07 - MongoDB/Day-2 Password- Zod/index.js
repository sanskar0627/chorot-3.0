const express = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, TodoModel } = require("./db");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "sanskar12345"
mongoose.connect("mongodb+srv://sanskar0627:9635771173%40Hp@cluster0.ntuj2ya.mongodb.net/Todo-Application");

const validid = z.object({
    email: z.string().email(),
    password: z.string().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/),
    name: z.string().min(1)
});

app.post("/signup", async function (req, res) {

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        validid.parse(req.body);
    } catch (e) {
        return res.status(400).json({
            message: "Validation failed",
            error: e.errors
        });
    }
    let errorthrown = false;
    try {
        const hashedpassword = await bcrypt.hash(password, 5);
        await UserModel.create({
            email: email,
            password: hashedpassword,
            name: name

        });
    }
    catch (e) {
        res.json({
            message: "USer A:reday existed"
        });
        errorthrown = true;
    }
    if (!errorthrown) {
        res.json({
            message: "You are signed in "
        });
    }
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });
    if (!response) {
        res.status(403).json({
            message: "user does not exist in our db"
        });
    }
    const passwordmatch = await bcrypt.compare(password, response.password);

    if (passwordmatch) {
        const token = jwt.sign({
            id: response._id.toString()
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
    const { title, deadline } = req.body;
    await TodoModel.create({
        title, userId,
        deadline: deadline ? new Date(deadline) : null 
    })
    res.json({
        message:"Todo Created Sucessfully",
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

app.put("/todo/:id/done", auth, async function (req, res) {
    const id = req.params.id;
    await TodoModel.findByIdAndUpdate(id, { done: true });
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
