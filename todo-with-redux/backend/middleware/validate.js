const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      console.log("DECODED TOKEN", decodedToken);

      if (err) {
        // token is expired or invalid
        res.status(401).json({ message: "You are not authorized" });
      } else {
        // token is good
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};

module.exports = {
  verifyToken
};
