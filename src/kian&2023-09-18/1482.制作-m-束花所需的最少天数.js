/*
 * @lc app=leetcode.cn id=1482 lang=javascript
 *
 * [1482] 制作 m 束花所需的最少天数
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var checkZero = function (nums, day, m, k) {
  let list = nums.map((i) => i - day);
  let flag = false;
  let count = 0;
  let num = 0;
  for (let i = 0; i < list.length; ++i) {
    if (list[i] <= 0) {
      flag = true;
      count++;
    } else {
      count = 0;
      flag = false;
    }
    if (count === k && flag) {
      count = 0;
      num++;
    }
  }

  if (num < m) {
    return false;
  } else {
    return true;
  }
};

var minDays = function (bloomDay, m, k) {
  let left = 0;
  let right = Math.max(...bloomDay) + 1;
  while (left + 1 < right) {
    let midDay = Math.floor((left + right) / 2);
    if (checkZero(bloomDay, midDay, m, k)) {
      right = midDay;
    } else {
      left = midDay;
    }
  }

  if (right > Math.max(...bloomDay)) {
    return -1;
  }
  return right;
};

// minDays([1, 10, 3, 10, 2], 3, 1);
// minDays([7, 7, 7, 7, 12, 7, 7], 2, 3);
// minDays([1000000000,1000000000], 1, 1);
minDays([1, 10, 3, 10, 2], 3, 2);

// @lc code=end
