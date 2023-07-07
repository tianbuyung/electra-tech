const { User } = require("../../models");

class Auth {
  static async register(req, res, next) {
    try {
      const { email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        throw { name: "Passwords do not match" };
      }

      const newUser = await User.create({ email, password });

      res.status(201).json({
        statusCode: 201,
        data: {
          id: newUser.id,
          email: newUser.email,
        },
      });
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
