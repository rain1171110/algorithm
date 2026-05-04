//問題１  整数 n と、数列 a_1, ... , a_n と、整数 k が与えられます。

// a_1, ... , a_n のうち k は何個あるかを求めてください。;

// 入力例：

// 5
// 1 2 3 2 2
// 2

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const a = input[1].split(" ").map((x) => Number(x));
// const k = Number(input[2]);

// let num = 0;

// for (let value of a) {
//   if (value == k) {
//     num++;
//   }
// }

// console.log(num)

// 問題2  サイズnの数列Aに含まれる整数kのうち、最も先頭に近いものは数列の何番目にあるか？
// 数列は配列で管理
// 答えを0で初期化
// ループ処理を用いて配列の要素を先頭から調べる
// 最初に見つかったkのインデックスを+1を答えに保存してループを抜ける

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const A = input[1].split(" ").map((x) => Number(x));
// const k = Number(input[2]);

// let num = 0;
// for (let i = 0; i < n; i++) {
//   if (A[i] === k) {
//     num = i + 1;
//     break;
//   }
// }

// console.log(num);

// 問題3 サイズnの数列Aに含まれる偶数のうち、最も先頭に近いものは数列の何番目にあるか？
// 線形探索使用
// 数列は配列で管理
// 答えの初期値はなんもでもよい
// ループ処理をも一いて配列の要素を先頭から調べる
// 最初に見つかった偶数のインデックス+1を答えに保存してループを抜ける

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const A = input[1].split(" ").map((x) => Number(x));

// let num = 0;
// for (let i = 0; i < n; i++) {
//   if (A[i] % 2 === 0) {
//     num = i + 1;
//     break;
//   }
// }

// console.log(num);
