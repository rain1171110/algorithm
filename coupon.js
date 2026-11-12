// あなたはスーパーで N 個の商品を購入しました。それぞれの商品の価格は u_i 円です。

// あなたは 1 枚の半額クーポンを持っています。
// 半額クーポンは L 円以上の商品があれば、その中でもっとも高額な 1 つの商品に自動的に適用されます。
// お会計の合計金額を出力してください。

const fs = require("fs");
const input = fs.readSync(0, "utf-8").trim().split(/\s+/);

const n = Number(input[0]);
const l = Number(input[1]);
let price = 0;
let totalPrice = 0;

for (let i = 0; i < n; i++) {
  if (l <= price) {
    hightPrice = Math.max(Number(price));
    halfPrice = Math.floor(Number(hightPrice / 2));
    totalPrice = Number(price + halfPrice - hightPrice);
  }
}
