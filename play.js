const net = require("net");

const connect = (() => {
  const conn = net.createConnection({
    host: '10.0.0.57',
    port: 50541,
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("You are connected");
  });
  conn.on("data", (data) => {
    console.log(`${data}`);
  });

  return conn;

});

console.log("Connecting...");
connect();