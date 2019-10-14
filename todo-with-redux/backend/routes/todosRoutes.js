const router = require("express").Router();

// import helpers
const Todos = require("../helpers/todoHelpers");

// middleware
const mw = require("../middleware/validate");

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

// add verify token back in
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

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const result = await Todos.updateTodo(id, body);

    if (result) {
      res.status(200).json(result);
    } else {
      res
        .status(401)
        .json({ message: "Could not update todo. Please check your request." });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error trying to update todo item" });
  }
});

module.exports = router;
