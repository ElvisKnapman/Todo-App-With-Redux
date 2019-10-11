const db = require("../data/db-config");

function register(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  register,
  findById
};
