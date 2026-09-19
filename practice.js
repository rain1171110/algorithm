const fs = require("fs");
const lines = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(lines[0]);

let variable1 = 0;
let variable2 = 0;

for (let i = 1; i <= n; i++) {
  const command = lines[i].split(" ");
  if (command[0] === "SET") {
    variable1 = Number(command[2]);
  } else {
    variable2 = Number(command[2]);
  }
}
