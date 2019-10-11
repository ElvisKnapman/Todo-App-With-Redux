exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("firstName", 60).notNullable();
      tbl.string("lastName", 60).notNullable();
      tbl
        .string("email", 100)
        .notNullable()
        .unique();
      tbl
        .string("username", 40)
        .notNullable()
        .unique();
      tbl.string("password").notNullable();

      tbl.timestamps(true, true);
    })
    .createTable("todos", tbl => {
      tbl.increments();
      tbl.string("todo", 255).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos").dropTableIfExists("users");
};
