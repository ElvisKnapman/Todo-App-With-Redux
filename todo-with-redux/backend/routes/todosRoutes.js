const router = require("express").Router();

// import helpers
const Todos = require("../helpers/todoHelpers");

router.post("/create", async (req, res) => {
  const { body } = req;

  try {
    const todo = await Todos.createTodo(body);
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error trying to create todo" });
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todos = await Todos.findByUser(id);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server error getting todos for specified user" });
  }
});

module.exports = router;
