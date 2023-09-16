/*
 * @lc app=leetcode.cn id=1870 lang=javascript
 *
 * [1870] 准时到达的列车最小时速
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  let left = 0;
  // 构建临界点
  let right = Math.pow(10, 7) + 1;

  while (left + 1 < right) {
    // 假如我们速度v
    let v = Math.floor((right + left) / 2);
    // 那么我们需要计算出来依赖这个v到达的总时间是多少
    let costhours = 0;
    for (let i = 0; i < dist.length; ++i) {
      // 先不考虑最后一个时间
      if (i < dist.length - 1) {
        costhours += Math.ceil(dist[i] / v);
      } else {
        costhours += dist[i] / v;
      }
    }

    // 如果条件满足的话 把速度变小，试着满足最小正整数
    if (costhours <= hour) {
      right = v;
    } else {
      left = v;
    }
  }

  // 因为答案不能超过Math.pow(2, 7) 所以判断一下 如果最后还是不满足 返回-1
  if(right> Math.pow(10, 7)) return -1
  return right
};

minSpeedOnTime([1, 3, 2], 1.9);
// @lc code=end
