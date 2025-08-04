const express = require("express");
const router = express.Router();
const routes = require("./user");
const accountRoute = require("./account");
router.use("/user", routes);
router.use("/account", accountRoute);

module.exports = router;
