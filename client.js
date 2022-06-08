const { builtinModules } = require("module");
const net = require("net");

const connect = (() => {
  const conn = net.createConnection({
    host: '10.0.0.57',
    port: 50541,
  });
  const username = "MAM";
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log(`Welcome ${username}, you are now connected`);
  });
  conn.on('data', (data) => {
    console.log(`${data}`);

  });

  return conn;

});

console.log("Connecting...");

module.exports = { connect }
