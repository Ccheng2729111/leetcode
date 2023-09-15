/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 简单的暴力解法
 */
var triangleNumber1 = function (nums) {
  let resCount = 0
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let v = j + 1; v < nums.length; ++v) {
        let a = nums[i];
        let b = nums[j];
        let c = nums[v];
        if (a + b > c && a + c > b && b + c > a) {
          resCount++
        }
      }
    }
  }
  return resCount
};

/**
 * 这里考虑一下 如果固定两条边那么第三条边一定是在两条边大的还要右边。
 * 然后先排序再二分试一试
 */
var triangleNumber = function (nums) {
  let resCount = 0
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let v = j + 1; v < nums.length; ++v) {
        let a = nums[i];
        let b = nums[j];
        let c = nums[v];
        if (a + b > c && a + c > b && b + c > a) {
          resCount++
        }
      }
    }
  }
  return resCount
};
// @lc code=end
