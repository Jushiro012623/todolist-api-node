const jwt = require("jsonwebtoken");
require("dotenv").config();

const internals = {}
internals.isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }
};
internals.isGuest = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
  // try {
  //   const user = jwt.verify(token, process.env.TOKEN_SECRET);
  //   req.user = user;
  //   next();
  // } catch (error) {
  //   return res.status(403).json({ success: false, message: "Unauthorized" });
  // }
};
module.exports = internals;
