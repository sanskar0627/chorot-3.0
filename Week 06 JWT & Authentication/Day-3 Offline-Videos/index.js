const express = require("express");
const { title } = require("framer-motion/client");
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
        password: password,
        todos: []
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
app.get("/todos", auth, (req, res) => {
    const username = req.username;
    const user = users.find(function (u) {
        return u.username == username;
    });
    if (user) {
        res.json({ todos: user.todos });
    }
    else {
        res.status(403).json({ message: "User NotFound!!!" })
    }
});
app.post("/todos", auth, (req, res) => {
    const title = req.body.title;
    const username = req.username;
    const user = users.find(function (u) {
        return u.username == username;
    });
    if (user) {
        user.todos.push({
            title: title,
            done: false
        });
        res.json({ message: "Todo added successfully" });
    }
    else {
        res.status(403).json({ message: "User not found" });
    }
});
app.put("/todos/:index", auth, (req, res) => {
    const index = parseInt(req.params.index); // index from URL
    const username = req.username; // from JWT
    const user = users.find(u => u.username === username); // find user

    if (!user) {
        return res.status(403).json({ message: "User not found" });
    }

    if (index < 0 || index >= user.todos.length) {
        return res.status(400).json({ message: "Invalid todo index" });
    }

    user.todos[index].done = true; // mark todo as done
    res.json({ message: "Todo marked as done", todo: user.todos[index] });
});

app.delete("/todos/:index", auth, (req, res) => {
    const index = parseInt(req.params.index);
    const username = req.username;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(403).json({ message: "User not found" });
    }

    if (index < 0 || index >= user.todos.length) {
        return res.status(400).json({ message: "Invalid todo index" });
    }

    user.todos.splice(index, 1); // remove the todo at that index
    res.json({ message: "Todo deleted successfully" });
});


app.listen(3000);