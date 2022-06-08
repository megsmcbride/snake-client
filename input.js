const { stdin } = require("process");
const { connect } = require("./client")
connect;

const setupInput = (() => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume()
  stdin.on("data", handleUserInput)
  return stdin;
})

const handleUserInput = ((key) => {
  if (key === '\u0003') {
    process.exit();
  }
});
setupInput()