const { User } = require("../../models");
const { comparePassword } = require("../../helpers/encryption");
const { signToken } = require("../../helpers/signature");

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
        message: "Registration successfully",
        data: {
          userId: newUser.id,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email.trim(" ") || !password.trim(" ")) {
        throw { name: "Username and password are required" };
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw {
          name: "InvalidCredentials",
        };
      }

      const isPasswordValid = comparePassword(password, user.password);

      if (!isPasswordValid) {
        throw {
          name: "InvalidCredentials",
        };
      }

      const accessToken = signToken({
        id: user.id,
      });

      res.status(200).json({
        statusCode: 200,
        message: "Login successfully",
        data: {
          userId: user.id,
          access_token: accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Auth;
