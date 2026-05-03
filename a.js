// const fs = require("fs");

// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const a = input[1].split(" ").map((x) => Number(x));
// const k = Number(input[2]);

// let num0fk = 0;

// for (let value of a) {
//   if (value == k) {
//     num0fk++;
//   }
// }

// console.log(num0fk);

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map((x) => Number(x));
const k = Number(input[2]);

let num = 0;

for (let value of a) {
  if (value == k) {
    num++;
  }
}

console.log(num);
