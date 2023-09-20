/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 这里主要是要找到单调性，这里假设一下如果target已知，那么
 * target左边的x和x+1相等的话，那么x一定是偶数
 * 同理右边如果y和y+1相等的话，那么y一定是奇数
 * 所以这里就可以拿到mid后判断出来target是在左边还是右边
 * 如果mid是奇数，那么如果mid和mid+1相等的话 这种情况target是在mid的左边 right = mid
 * 相反 left=mid
 * 如果mid是偶数，并且mid和mid+1相等的话 那么target是在右边 left=mid
 * 相反 right = mid
 * 
 */
var singleNonDuplicate = function (nums) {
  let left = -1;
  let right = nums.length;
  while (left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    let isEven = mid % 2 === 0;
    if (isEven) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid;
      } else {
        right = mid;
      }
    } else {
      if (nums[mid] === nums[mid + 1]) {
        right = mid;
      } else {
        left = mid;
      }
    }
  }

  return nums[right];
};
// singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
// singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
// @lc code=end
