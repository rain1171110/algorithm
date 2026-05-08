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

// 問題4 サイズｎの数列Ａの最大値/最小値はそれぞれいくつか？
// 1≦n≦10000
// ―1000000000≦A[i]≦1000000000
// 線形探索
// 数列は配列で管理
// 暫定低最大値の初期値は入力の最小値以下
// 暫定最初地の初期値は入力の最大値以上
// ループ処理を用いて配列の要素を先頭から調べる
// 要素を見ながら暫定最大値/最小値を更新

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const A = input[1].split(" ").map((x) => Number(x));

// let maxNum = -1000000000;
// let minNum = 1000000000;

// // for (let i = 0; i<n ; i++) {
// //   if (A[i] > maxNum) {
// //     maxNum = A[i];
// //   }
// //   if (A[i] < minNum) {
// //     minNum = A[i];
// //   }
// // }
// // console.log(maxNum,minNum);

// for (let value of A) {
//   if (value > maxNum) {
//     maxNum = value;
//   }

//   if (value < minNum) {
//     minNum = value;
//   }
// }

// console.log(maxNum, minNum);

// サイズnの数列Aのk番目に大きい値はいくつか?
// 1≦n≦10000
// ―1000000000≦A[i]≦1000000000
// A[i] ≠ A[j]
// 線形探索使用する
// 答え（ｋ番目に大きい値）を保存する変数ｘを用意して、入力の最大値より大きな値で初期化
// 数列からｘ未満であるような値の最大値ｙを求め、ｘをｙで更新することをｋ回くりかえす。
// 入力値
// 5
// -9 10 6 0 -3
// 4

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const a = input[1].split(" ").map((x) => Number(x));
// const k = Number(input[2]);

// let maxNum = 1000000001;

// for (let count = 0; count < k; count++) {
//   let nextMaxNum = -1000000000;

//   for (let value of a) {
//     if (value < maxNum && value > nextMaxNum) {
//       nextMaxNum = value;
//     }
//   }
//   maxNum = nextMaxNum;
// }
// console.log(maxNum);

// // 重複判定の追加
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0]);
// const a = input[1].split(" ").map((x) => Number(x));
// const k = Number(input[2]);

// const used = Array(n).fill(false);

// let answer = null;

// for (let count = 0; count < k; count++) {
//   let maxIndex = -1;

//   for (let i = 0; count < k; count++) {
//     if (used[i]) {
//       continue;
//     }

//     if (maxIndex === -1 || a[i] > a[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   used[maxIndex] = true;
//   answer = a[maxIndex];
// }
// console.log(answer);

// 問題4 サイズｎの数列Ａの最大値/最小値はそれぞれいくつか？
// 1≦n≦10000
// ―1000000000≦A[i]≦1000000000
// 線形探索
// 数列は配列で管理
// 暫定低最大値の初期値は入力の最小値以下
// 暫定最初地の初期値は入力の最大値以上
// ループ処理を用いて配列の要素を先頭から調べる
// 要素を見ながら暫定最大値/最小値を更新




