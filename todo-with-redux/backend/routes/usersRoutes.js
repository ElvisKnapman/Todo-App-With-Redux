const router = require("express").Router();
const bcrypt = require("bcryptjs");
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

module.exports = router;
