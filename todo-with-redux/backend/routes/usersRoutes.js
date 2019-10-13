const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// import helpers
const Users = require("../helpers/usersHelpers");

router.post("/register", async (req, res) => {
  const { body } = req;

  try {
    body.password = bcrypt.hashSync(body.password, 14);
    const user = await Users.register(body);

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error trying to register user" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome, ${user.firstName}`, token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error trying to login user" });
  }
});

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    firstName: user.firstName
  };

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
