/*
 * @lc app=leetcode.cn id=2594 lang=javascript
 *
 * [2594] 修车的最少时间
 */

// @lc code=start
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
// 时间越多，能修的车越多，符合单调性
// 我们需要按照话费的时间来进行二分
// 那么在花费的时间内，每个人能修的车就是t/r的开根号的整数
var repairCars = function (ranks, cars) {
  let left = 0;
  // 右边界是排名最高的人修好所有车需要的时间
  let right = Math.min(...ranks) * cars * cars;

  while (left + 1 < right) {
    let mid = Math.floor((right + left) / 2);

    // 修好的车辆
    let s = 0;

    // 这里表示在花费时间为mid的情况下 所有人修的车总和
    for (let r of ranks) {
      s += Math.floor(Math.sqrt(mid / r));
    }

    if (s >= cars) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};

// repairCars([4, 2, 3, 1], 10);
// @lc code=end
