const express = require("express");
const router = express.Router();
const OrderController = require("../../../controllers/orders");

router.post("/", OrderController.createOrder);
router.get("/", OrderController.readOrders);

module.exports = router;
