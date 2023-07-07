class Orders {
  static async createOrder(req, res, next) {
    try {
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  }

  static async readOrders(req, res, next) {
    try {
      console.log(req.params);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Orders;
