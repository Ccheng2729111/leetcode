/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
const total = 5;
const cost1 = 10;
const cost2 = 10;
// #2240
var waysToBuyPensPencils = function (total, cost1, cost2) {
  if (cost1 > total && cost2 > total) {
    return 1;
  }
  let count = 0;
  let n = Math.floor(total / cost1);
  for (let i = 0; i <= n; i++) {
    let left = total - i * cost1;
    if (left <= 0) {
      // 如果没有钱了，那cost1的花费这一次需要加上
      count++;
    } else {
      // 这里需要注意0这个也需要加上，所以余数需要加上额外的0这个数字
      count = count + Math.floor(left / cost2) + 1;
    }
  }
};

waysToBuyPensPencils(total, cost1, cost2);
