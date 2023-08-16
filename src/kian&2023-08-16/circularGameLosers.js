/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

const n = 5;
const k = 2;

// #2682
var circularGameLosers = function (n, k) {
  // 创建长度为n的数组 填充false 第一个表示1号 n个表示n号
  // 表示初始的时候大家都没有接过球
  let arr = new Array(n).fill(false);

  // 从第一个同学开始 i为需要传的数量 判断当前数组里的同学已经赋值true的情况下 不再遍历
  for (let i = k, j = 0; !arr[j]; i = k + i) {
    // 这里第j个同学 需要设置成true 因为已经传过来了
    arr[j] = true;
    // 这里赋值当前同学+次数 和长度的余数 表示下一次传递给的同学
    j = (j + i) % n;
  }

  let res = [];
  // 这里没啥好说的拿到false的下标返回就行
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      res.push(i+1);
    }
  }

  return res;
};

circularGameLosers(n, k);
