/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
/**
 * 找到绝对值最近的就行
 * 这里可以看出来需要找到arr1中元素的最接近的元素然后计算
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let sortArr2 = arr2.sort((a, b) => a - b);
  let resCount = 0;
  for (let i = 0; i < arr1.length; ++i) {
    let target = arr1[i];
    let left = -1;
    let right = sortArr2.length;
    let isMatch = true;
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
      if (arr2[mid] <= target) {
        left = mid;
        if (Math.abs(target - arr2[mid]) <= d) {
          isMatch = false;
        }
      } else {
        right = mid;
        if (Math.abs(target - arr2[mid]) <= d) {
          isMatch = false;
        }
      }
    }
    if (isMatch) resCount++;
  }
  return resCount;
};

findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2);
// @lc code=end
