class Auth {
  static async register(req, res, next) {
    try {
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Auth;
