const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware");

const dotenv = require('dotenv');
dotenv.config();
//sigup routes
const signupbody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string().min(6).max(50),
})

router.post("/signup", async (req, res) => {
    const { success } = signupbody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email Already taken / Invalid Input"
        })
    }
    const exsitingUser = await User.findOne({
        username: req.body.username
    });
    if (exsitingUser) {
        return res.status(411).json({
            message: "Email Already taken / Invalid Input "
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })
    const userId = user._id;
    //CReate a new acc an giving random accunt balance
    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    res.json({
        message: "USer created sucessfully",
        token: token,
        userId: user._id
    })
})
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6).max(50),
});
//Sign in routes
router.post("/signin", async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input" });
    }
    const { username, password } = req.body;

    //check user exist's
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(411).json({
            message: "Invalid Creadintials",
        });
    }
    //compare the  password with hashed password in DB
    const ispasswordcorrect = await bcrypt.compare(password, user.password);
    if (!ispasswordcorrect) {
        return res.status(411).json({
            message: "Invalid Creadintials",
        });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
        message: "Login successful",
        token: token,
        userId: user._id,
    });
})
// update user info 
const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
    const parsed = updateBody.safeParse(req.body);

    if (!parsed.success) {
        return res.status(411).json({
            message: "Error while updating information",
        });
    }


    await User.updateOne({ _id: req.userId }, parsed.data);

    res.json({
        message: "Updated successfully",
    });
});

//Sending User info 
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: "i" } },
            { lastName: { $regex: filter, $options: "i" } }
        ],
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        })),
    });
});




module.exports = router;
