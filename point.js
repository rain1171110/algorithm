// PAIZAさんの家の近所のスーパーで今日から一週間、ポイント還元セールが実施されます。
// ポイント還元セールはポイントを使用して買い物をすると翌日に X % だけポイントが戻ってくるというものです。

// PAIZA さんはポイントを N ポイント持っていたため、毎日ポイントを全て使って何円分買い物ができるか計算してみることにしました。

// 一週間毎日ポイントを全て使って買い物をしたとき、ポイントだけで何円分買い物ができるか出力してください。
// ただし、戻ってくるポイントは小数点以下切り捨てとなります。

// 図1
// 入力例 1 では最初 1024 ポイント持っていて、ポイント還元率は 50% です。
// 最初にあったポイントと還元されたポイントを使うと 7 日間で累計 2032 ポイントとなるので、2032 と出力してください。

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

const n = Number(input[0]);
let x = Number(input[1]);

let currentPoint = n;
let usagePoint = 0;

for (let i = 0; i < 7; i++) {
  usagePoint = usagePoint + currentPoint;
  currentPoint = Math.floor(Number((currentPoint * x) / 100));
}
console.log(usagePoint);
