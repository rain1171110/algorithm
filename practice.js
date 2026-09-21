const fs = require("fs");
const lines = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(lines[0]);

let variable1 = 0;
let variable2 = 0;

for (let i = 1; i <= n; i++) {
  const command = lines[i].split(" ");
  if (command[0] === "SET") {
    if (command[1] === "1") {
      variable1 = Number(command[2]);
    } else {
      variable2 = Number(command[2]);
    }
  } else if (command[0] === "ADD") {
    variable2 = variable1 + Number(command[1]);
  } else if (command[0] === "SET") {
    variable2 = variable1 - Number(command[1]);
  }
}
console.log(variable1, variable2);
