/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 这里首先想到的是sort原数组然后构造一个0->x x最大就是数组的长度
 * 然后遍历0->x 看原数组有多少个比当前遍历的大于等于，然后查看这个遍历的元素是否跟长度相等
 * 是的话直接返回 整个遍历结束后返回-1就行
 */
var specialArray = function (nums) {
  let n = nums.length;
  let sortList = nums.sort((a, b) => a - b);
  for (let i = 0; i <= n; ++i) {
    let left = -1;
    let right = sortList.length;
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
      if (sortList[mid] >= i) {
        right = mid;
      } else {
        left = mid;
      }
    }

    let matchCount = sortList.length - right;

    if (matchCount === i) {
      return i;
    }
  }

  return -1;
};

specialArray([3, 5]);
specialArray([0, 0]);
specialArray([0, 4, 3, 0, 4]);
// @lc code=end
