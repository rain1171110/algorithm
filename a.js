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

// 基礎問題① A 君の 1 年前の体重は 10 kg でしたが、現在は N kg です。 A 君の体重は何 kg 増えましたか？
// 入力例 1 の場合
// 30
// 30 kg は 10 kg より 20 kg 増えているので
// 20
// と出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = Number(input[0])

// const wt = 10
// let rwt = n-10
// console.log(rwt)

// あなたはカレンダーのプログラムを作成しています。そこで N 週間後が何日後かを表示する機能を作ることにしました。
// N 週間後は何日後かを計算してください。

// 例えば

// 6
// と入力された 1 週間は 7 日間なので 6 × 7
// 42
// と出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split("\n");

// const n = Number(input[0]);

// const week = 7;
// const nWeek= n*week;

// console.log(nWeek);

// 問題
// X 円の商品を購入しようとしています。あなたは、手持ちの小銭で X 円ちょうどを支払おうとしています。
// ここで言う小銭とは、500円硬貨、100円硬貨、50円硬貨、10円硬貨、5円硬貨、1円硬貨、のことを指し、すべての硬貨が十分な枚数あります。
// 支払いで使う小銭の合計枚数を最も少なくしたとき、何枚の硬貨が必要になるかを出力してください。
// 入力例 1 の場合、733 円の商品に対して、500円硬貨 1 枚、100円硬貨 2 枚、10円硬貨 3 枚、1 円硬貨 3 枚で支払うことができます。これが最少の小銭の合計枚数なので、9 と出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// let x = Number(input[0]);

// let count = 0;

// const coins = [500, 100, 50, 10, 5, 1];

// for (let coin of coins) {
//   count += Math.floor(x / coin);
//   x = x % coin;
// }

// console.log(count);

// const fs = require("false");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// let x = Number(input[0]);

// let count = 0;

// const coins = [10000, 5000, 1000, 500, 100, 50, 10,5, 1];

// for (let coin of coins) {
//   count = count + Math.floor(x / coin);
//   x = x % coin;
// }
// console.log(count);

//  問題
//  以下の形式で標準入力によって与えられます。
// 文字列 s が 1 行で与えられます。

// s

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 入力された文字列をそのまま出力してください。また、出力の末尾には改行を入れてください。

// s
// 条件
// すべてのテストケースにおいて、以下の条件をみたします。

// ・s は数字または大文字・小文字のアルファベットからなる長さ 1 以上 10 以下の文字列

// 入力例1
// paiza

// 出力例1
// paiza

// 入力例2
// Paiza21

// 出力例2
// Paiza21

// 入力例3
// paiza813

// 出力例3
// paiza813

// const fs = require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split("\n");

// let s = input[0]
// console.log(s)

// 問題　以下の形式で標準入力によって与えられます。
// 文字列 s と t が 2 行で与えられます。
// s
// t

// const fs = require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split("\n");
// let s = input[0];
// let t = input[1];
// console.log(s)
// console.log(t)

//問題　 以下の形式で標準入力によって与えられます。
// 半角スペースで区切られた文字列 s_1, s_2 が 1 行で与えられます。
// s_1 s_2
// 入力された文字列 s_1, s_2 をそれぞれ改行区切りで出力してください。
// また、末尾に改行を入れ、余計な文字、空行を含んではいけません。
// s_1
// s_2

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// let s_1 = input[0];
// let s_2 = input[1];
// console.log(s_1);
// console.log(s_2);

問題;
// S
// T
// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 答えの文字列を 2 行で出力してください。
// S
// T
// 末尾に改行を入れ、余計な文字、空行を含んではいけません。

// const fs = require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split("\n");

// let s = input[0];
// let t = input[1];
// console.log(s)
// console.log(t)

// 問題
// 整数 A, B が与えられます。A と B の差 D と積 P を半角スペース区切りで出力してください。
// 入力される値
// A B
// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 期待する結果 D と P を半角スペース区切り一行で出力してください。末尾に改行を入れ、余計な文字、空行を含んではいけません。
// D P
// 条件
// すべてのテストケースにおいて、以下の条件をみたします。
// ・ A, B は整数
// ・ A, B は 0 以上 1,000 未満

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// let a = input[0];
// let b = input[1];
// const d = a - b;
// const p = a * b;
// console.log(d, p);

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = input[0];
// const b = input[1];

// const d = a - b;
// const p = a * b;
// console.log(d, p);

// 問題　整数 A, B, C が与えられます。以下のアルゴリズムを実行してください。
// 変数 N を 0 で初期化する
// N に A を足した値を N へ代入する
// N に B をかけた値を N へ代入する
// N を C で割ったあまりを N へ代入する
// N を出力する

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// let n = 0;
// n = n + a;
// n = n * b;
// n = n % c;

// console.log(n);

// ある電車に a 人が乗っています。駅に到着した時に b 人が降りて新たに c 人が乗車する時、電車に乗っている乗客人数を求めてください。

//問題　 入力される値
// a b c

// ・ 1 行目に 整数 a,b,c がそれぞれ半角スペース区切りで与えられます。

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 電車に乗っている乗客人数を出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// let n = 0;
// n = n + a;
// n = n - b;
// n = n + c;

// console.log(n);

// 文字列Sが与えられます。Sがpaizaと一致する場合はYESを、一致しない場合はNOを出力してください。

// ▼　下記解答欄にコードを記入してみよう

// 入力される値
// S

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// YESまたはNOを出力してください。末尾に改行を入れ、余計な文字、空行を含んではいけません。
// YES

// または
// NO

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const s = input[0];

// if (s === "paiza") {

// let a = input[0];
// let b = input[1];
// const d = a - b;
// const p = a * b;
// console.log(d, p);

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = input[0];
// const b = input[1];

// const d = a - b;
// const p = a * b;
// console.log(d, p);

// 問題　整数 A, B, C が与えられます。以下のアルゴリズムを実行してください。
// 変数 N を 0 で初期化する
// N に A を足した値を N へ代入する
// N に B をかけた値を N へ代入する
// N を C で割ったあまりを N へ代入する
// N を出力する

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// let n = 0;
// n = n + a;
// n = n * b;
// n = n % c;

// console.log(n);

// ある電車に a 人が乗っています。駅に到着した時に b 人が降りて新たに c 人が乗車する時、電車に乗っている乗客人数を求めてください。

//問題　 入力される値
// a b c

// ・ 1 行目に 整数 a,b,c がそれぞれ半角スペース区切りで与えられます。

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 電車に乗っている乗客人数を出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// let n = 0;
// n = n + a;
// n = n - b;
// n = n + c;

// console.log(n);

// 文字列Sが与えられます。Sがpaizaと一致する場合はYESを、一致しない場合はNOを出力してください。

// ▼　下記解答欄にコードを記入してみよう

// 入力される値
// S

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// YESまたはNOを出力してください。末尾に改行を入れ、余計な文字、空行を含んではいけません。
// YES

// または
// NO

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const s = input[0];

// if (s === "paiza") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 問題
// 整数Nが与えられます。Nが 100 以下の場合はYESを、そうではない場合はNOを出力してください。

// ▼　下記解答欄にコードを記入してみよう

// 入力される値
// N

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// YESまたはNOを出力してください。末尾に改行を入れ、余計な文字、空行を含んではいけません。

// YES

// または
// NO

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// const n = input[0];

// if (n <= 100) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 　問題
// 整数 A, B, C が与えられます。式 A × B ≦ C が成立している場合はYESを、そうではない場合はNOを出力してください。

// ▼　下記解答欄にコードを記入してみよう

// 入力される値
// A B C

// 入力値最終行の末尾に改行が１つ入ります。
// 文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// YESまたはNOを出力してください。末尾に改行を入れ、余計な文字、空行を含んではいけません。

// YES

// または
// NO

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");

// const a = Number(input[0]);
// const b = Number(input[1]);
// const c = Number(input[2]);

// if (a * b <= c) {

//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 問題　ある占いでは、箱の中に 1~9 までのいずれかの数字が書かれている玉を取り出し、
// その玉に書かれている数字から運勢を占います。玉に書かれている数字が 7 の時は大吉となります。
// 占いで取り出した玉に書かれている数字が 1 つ与えられます。大吉かどうかを判定してください。;
//入力される値 n
// 1行目に取り出した玉に書かれている数字 n が入力されます。
// 期待する出力
// 大吉の場合は「Yes」、そうでない場合は「No」と 1 行に出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
// const n = Number(input[0]);
// if (n === 7) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 問題　正の整数 N が与えられます。
// 1 ~ N の整数を 1 から順に改行区切りで出力してください。
// 入力される値 N
//  正の整数 N が 1 行で与えられます。

// const fs = require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split("/n");

// const N = Number(input[0]);
// for (let i = 1; i<=n; i++){
// console.log(i);
// }

//問題　 1 ~ 100 の整数に対して、3 と 5 の両方で割り切れるなら FizzBuzz を、 3 でのみ割り切れるなら
// Fizz 、5 でのみ割り切れるなら Buzz を改行区切りで出力してください。
// また、どちらでも割り切れない場合は、その数字を改行区切りで出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// for (let i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 　1 行で整数 813 を出力してください。
// console.log(813);

//　整数 8 と 13 をこの順番で出力してください。
// また、整数 8 を出力した後と 13 を出力した後に改行をしてください。
// console.log(8);
// console.log(13);

// 整数 8, 1, 3 をこの順に改行区切りで出力してください。
// console.log(8);
// console.log(1);
// console.log(3);

// 以下の 10 個の整数を改行区切りで出力してください。

// const numbers = [813, 1, 2, 923874, 23648, 782356, 3256, 2342, 24324, 112];

// for (let i=0; i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// 1 以上 1,000 以下のすべての整数を昇順に改行区切りで出力してください。

// for (let i = 1; i < 1001; i++) {
//   console.log(i);
// }

// 2 つの 1 を半角スペース区切りで出力してください。
// console.log("1, 1");

// 3 つの数値 8, 1, 3 を半角スペース区切りで出力してください。
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");
// const numbers = [8, 1, 3];
//     console.log(numbers.join(" "));

// 1 から 10 までの数値をすべて、出力してください。
// ただし、数値の後には必ず半角スペースを出力してください。
// let result = "";
// for (let i = 1; i <= 10; i++) {
//   result += i + " ";
// }

// console.log(result);

// 1 から 10 までの数値をすべて、半角スペース区切りで出力してください。
//  ただし、末尾に半角スペースを出力してはいけません。

// let result = "";
// for (let i = 1; i <= 10; i++) {
//   if (i === 10) {
//     result += i;
//   } else {
//     result += i + " ";
//   }
// }
// console.log(result);

// 1 から 1,000 までの数値をすべて、半角スペース区切りで出力してください。
// ただし、末尾に半角スペースを出力してはいけません。
// let result = "";
// for (let i = 1; i <= 1000; i++) {
//   if (i === 1000) {
//     result += i;
//   } else {
//     result += i + " ";
//   }
// }
// console.log(result);

// 文字列 paiza を出力してください。
// console.log("paiza");

// 文字列 paiza と learning を半角スペース区切りで出力してください。
// console.log("paiza"+" "+"learning")

// 2 つの文字列 S, T が入力されます。S, T を改行区切りで出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// const s = input[0];
// const t = input[1];
// console.log(s);
// console.log(t);

// 10 個の文字列 S_1, S_2, S_3, ..., S_10 が改行区切りで与えられます。
// これらの文字列をすべて、半角スペース区切りで出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// let result = "";
// for (let i = 0; i < 10; i++) {
//   result += input[i];
//   if (i < 9) {
//     result += " ";
//   }
// }
// console.log(result);

// 10 個の文字列 S_1, S_2, S_3, ..., S_10 が半角スペース区切りで与えられます。
// これらの文字列をすべて、改行区切りで出力してください。

// const fs= require("fs");
// const input = fs.readFileSync(0,"utf-8").trim().split(/\s+/);

// let result= "";
// for (let i = 0; i<10; i++) {
//     result += input[i];
//     if(i < 9){
//         result += "\n";
//     }
// }
// console.log(result);

// 整数 N (N = 1 または 2) が入力されます。N = 1 の場合は 1 を、
// N = 2 の場合は 1 と 2 を改行区切りで出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// const n = Number(input[0]);

// let result = "";

// for (let i = 1; i <= n; i++) {
//   result += i;

//   if (i < n) {
//     result += "\n";
//   }
// }

// console.log(result);

// 整数 N が入力されます。1 から N までの数値をすべて、
// 改行区切りで出力してください。
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// const n = Number(input[0]);
// let result = "";

// for (let i = 1; i <= n; i++) {
//   result += i;
//   if (i < n) {
//     result += "\n";
//   }
// }

// console.log(result);

// 2 つの数値が半角スペース区切りで与えられます。
// これらの数値をカンマ区切りで出力してください。

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// const n = Number(input[0]);
// const m = Number(input[1]);

// console.log(n + "," + m);

//  3 つの文字列が改行区切りで与えられます。
// これらの文字列をバーティカルライン | 区切りで出力してください
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

// console.log(input.join("|"));

//　 10 個の数値が半角スペース区切りで与えられます。これらの数値すべて受け取り、
// そのまま出力してください。ただし、数値を出力した直後に必ずカンマを、
// 末尾にはさらに改行も出力してください
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

let result = "";

for (let i = 0; i < 10; i++) {
  const n = input[i];
  result += n + ",";
}

console.log(result);
