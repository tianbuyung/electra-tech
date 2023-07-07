const { verifyToken } = require("../helpers/signature");
const { User } = require("../models");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw {
        name: "Unauthenticated",
      };
    }

    const payload = verifyToken(access_token);

    const user = await User.findOne({ where: { id: payload.id } });

    if (!user) {
      throw {
        name: "Unauthenticated",
      };
    }

    req.user = {
      userId: user.id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authN;
