const express = require('express');
const router = express.Router();
const { User, Account } = require("../db");
const authMiddleware = require("../middleware");
const zod = require("zod");
const mongoose = require('mongoose');


router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    });
});


//transfer route
const transferSchema = zod.object({
    amount: zod.number().positive(),
    to: zod.string()
});
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const parsed = transferSchema.safeParse(req.body);
        if (!parsed.success) {
            throw new Error("Invalid transfer data");
        }

        const { amount, to } = parsed.data;

        if (req.userId === to) {
            throw new Error("Cannot transfer to your own account");
        }

        const sender = await Account.findOne({ userId: req.userId }).session(session);
        if (!sender || sender.balance < amount) {
            throw new Error("Insufficient balance");
        }

        const receiver = await Account.findOne({ userId: to }).session(session);
        if (!receiver) {
            throw new Error("Invalid account");
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        res.status(400).json({ message: error.message || "Transfer failed" });
    } finally {
        session.endSession();
    }
});


module.exports = router;