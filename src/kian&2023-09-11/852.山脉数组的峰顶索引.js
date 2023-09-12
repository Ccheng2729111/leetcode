/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * 首先想到的是蓝红二分，首先明确的是arr已经是一个山峰数组了，那么arr[0]一定是蓝色，arr[arr.length-1]一定是红色
 * 所以这里直接用二分找到mid然后对比mid和mid+1或者和mid-1即可或者
 */
var peakIndexInMountainArray = function (arr) {
  let left = -1; //这里因为已经确认了左边界不包含0
  let right = arr.length; //右边界同样缩一个

  while (left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  // 只要注意这里是返回left+1个的下标就可以
  return left + 1;
};
// peakIndexInMountainArray([
//   55, 59, 63, 99, 97, 94, 84, 81, 79, 66, 40, 38, 33, 23, 22, 21, 17, 9, 7
// ]);
// peakIndexInMountainArray([0,1,0])
// peakIndexInMountainArray([0,10,5,2])
// @lc code=end
