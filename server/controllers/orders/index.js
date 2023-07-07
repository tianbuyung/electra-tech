const { Order } = require("../../models");

class Orders {
  static async createOrder(req, res, next) {
    try {
      const { userId } = req.user;
      const { productName, productQuantity, productPrice } = req.body;

      const newOrder = await Order.create({
        userId,
        productName,
        productQuantity,
        productPrice,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Order created successfully",
        data: {
          order: newOrder,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async readOrders(req, res, next) {
    try {
      const { userId } = req.user;

      const orders = await Order.findAll({
        where: {
          userId,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Orders fetched successfully",
        data: {
          orders,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async readOrderDetail(req, res, next) {
    try {
      const { userId } = req.user;
      const { id } = req.params;

      const order = await Order.findOne({
        where: {
          userId,
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Order fetched successfully",
        data: {
          order,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Orders;
