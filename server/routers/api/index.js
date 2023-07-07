const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const orderRouter = require("./orders");

router.use("/", authRouter);
router.use("/orders", orderRouter);

module.exports = router;
