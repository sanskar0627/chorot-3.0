const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

const userRoutes=require("./routes/user");
const adminRoutes=require("./routes/admin");

app.use("/users",userRoutes);
app.use("/admin",adminRoutes);

app.listen(3000);