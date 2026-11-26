// PAIZAさんの家の近所のスーパーで今日から一週間、ポイント還元セールが実施されます。
// ポイント還元セールはポイントを使用して買い物をすると翌日に X % だけポイントが戻ってくるというものです。

// PAIZA さんはポイントを N ポイント持っていたため、毎日ポイントを全て使って何円分買い物ができるか計算してみることにしました。

// 一週間毎日ポイントを全て使って買い物をしたとき、ポイントだけで何円分買い物ができるか出力してください。
// ただし、戻ってくるポイントは小数点以下切り捨てとなります。

// 図1
// 入力例 1 では最初 1024 ポイント持っていて、ポイント還元率は 50% です。
// 最初にあったポイントと還元されたポイントを使うと 7 日間で累計 2032 ポイントとなるので、2032 と出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// let currentPoint = Number(input[0]);
// const rate = Number(input[1]);
// const num = Number(input[2]);
// let total = 0;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//   if (currentPoint === 0) {
//     break;
//   }
//   total = total + currentPoint;
//   count++;
//   currentPoint = Math.floor((currentPoint * rate) / 100);
// }
// console.log(total,count);

// ### 偶数の個数を数える

// 1行目に数字の個数 n、2行目に n 個の整数が与えられるよ。偶数がいくつあるか出力してね。

// 入力例

// 5
// 3 8 0 7 12

// 出力例

// 3

// 8、0、12 が偶数だよ。

// ヒントは、今までと同じ split(/\s+/) で改行も空白も区切れること。input[0] が n で、数える対象は input[1] から始まるよ。偶数かどうかは、2 で割った余りが 0 かを % で調べてみて。

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

const n = Number(input[0]);
let count = 0;

for (let i = 0; i < n; i++) {
  let num = Number(input[i + 1]);

  if (num % 2 === 0) {
    count++;
  }
}
console.log(count);
