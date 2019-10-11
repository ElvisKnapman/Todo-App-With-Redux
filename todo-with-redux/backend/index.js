const server = require("./api/server.js");

const port = process.env.PORT || 9100;

server.listen(port, () => {
  console.log(`\n** SERVER RUNNING ON PORT ${port} **\n`);
});
