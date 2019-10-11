// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: "localhost",
      port: 8100,
      database: "mytodo",
      user: "postgres",
      password: process.env.DB_DEV_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
