import jwt from "jsonwebtoken";
import user from "../../models/user.js";

const { SECRET_KEY = "some-secret-key" } = process.env;

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const foundUser = await user.findUserByCredentials({ email, password });
    const token = jwt.sign({ _id: foundUser._id }, SECRET_KEY, {
      expiresIn: "7d",
    });
    res
      .cookie("JWT", token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
      .end();
  } catch (err) {
    next(err);
  }
};

export default loginUser;
