const express = require("express");
const router = express.Router();
const { authenticateAdmin } = require("./middlewares/auth");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your key";



router.post("/signup", (req, res) => {
    const { username, password } = req.body;

    // Fake check for now
    if (username === "admin" && password === "pass") {
        const token = jwt.sign({ username, role: "admin" }, JWT_SECRET);
        res.json({ token });
    } else {
        res.status(403).json({ message: "Invalid credentials" });
    }
});

router.post("/login", (req, res) => {
    res.send("Admin logIn")
});

router.post("/courses", (req, res) => {
    res.send("Admin Created a course")
});

router.put("/courses/:courseId", (req, res) => {
    res.send(`Admin updated the course ${req.params.courseId}`);
});

router.delete("/courses/:courseId", (req, res) => {
    res.send(`Admin deleted the course ${req.params.courseId}`);
});

router.post("/courses", authenticateAdmin, (req, res) => {
    res.send("Course created");
});
module.exports = router;