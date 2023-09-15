/*
 * @lc app=leetcode.cn id=1760 lang=javascript
 *
 * [1760] 袋子里最少数目的球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
/**
 * 这里很难想啊，看了解答后 知道一个公式 就是元素需要拆分成最大值是y的次数是x/y向上取整后-1就是需要拆几次
 * 首先我们需要肯定是需要从最大值开始拆的，这里逆向思维 把拆的次数跟opa做对比
 */
var minimumSize = function (nums, maxOperations) {
  let left = -1;
  let right = Math.max(...nums) + 1;

  while (left + 1 < right) {
    //假设我们需要拆完后最大值是mid
    let mid = Math.floor((left + right) / 2);
    //那么我们全部需要拆的次数是sumOpa
    let sumOpa = 0;
    //这里统计全部数组中大于mid的元素进行拆分 拆成最大值是mid的次数总和
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] > mid) {
        sumOpa += Math.ceil(nums[i] / mid) - 1;
      }
    }

    // 如果拆的次数小于要求的次数，那么可以粒度再细一点的往下踩，那么mid往小走
    // 否则往大的走
    if (sumOpa <= maxOperations) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right
};

minimumSize([7, 17], 2);
// @lc code=end
