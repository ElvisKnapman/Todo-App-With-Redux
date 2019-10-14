const db = require("../data/db-config");

function createTodo(todo) {
  return db("todos")
    .insert(todo, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("todos")
    .where({ id })
    .first();
}

function findByUser(id) {
  return db("todos")
    .join("users", "users.id", "todos.user_id")
    .where({ "users.id": id })
    .select(
      "todos.id",
      "todos.title",
      "todos.completed",
      "todos.created_at",
      "todos.updated_at"
    );
}

function updateTodo(id, updates) {
  return findById(id).then(todo => {
    if (todo) {
      return db("todos")
        .update(updates, "id")
        .where({ id })
        .then(([id]) => findById(id));
    } else {
      return todo;
    }
  });
}

module.exports = {
  createTodo,
  findById,
  findByUser,
  updateTodo
};
