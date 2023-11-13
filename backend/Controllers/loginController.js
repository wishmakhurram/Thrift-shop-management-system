const User = require("../Models/userModel");
const generteLoginToken = require("./userController");

async function loginUser(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (password != user.password) return res.status(401).json({ error: "Invalid credentials" });
    var token = generteLoginToken.GenerateToken(user);
    return res.status(200).json({
      message: "Logged in successfully",
      email: email,
      fullname: user.fullname,
      userid: user.id,
      token: token,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
module.exports = {
	loginUser,
};
