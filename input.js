const { stdin } = require("process");
const { connect } = require("./client");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "s") {
    connection.write("Move: down");
  };

  if (key === "h") {
    connection.write("Say: Hello");
  } else if (key === "g") {
    connection.write("Say: Good game!");
  } else if (key === "b") {
    connection.write("Say: Goodbye");
  } else if (key === "p") {
    connection.write("Say: POW!");
  };
};

module.exports = { setupInput };