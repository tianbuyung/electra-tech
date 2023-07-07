const express = require("express");
const router = express.Router();
const OrderController = require("../../../controllers/orders");
const authN = require("../../../middlewares/authN");

router.post("/", authN, OrderController.createOrder);
router.get("/", authN, OrderController.readOrders);
router.get("/:id", authN, OrderController.readOrderDetail);

module.exports = router;
