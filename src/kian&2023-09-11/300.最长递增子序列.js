/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1
// 这里第一个想法就是首先轮训nums,然后每一个数字找到在整个数组中比当前元素大的元素
// 然后想办法找到这两个元素之间的元素的个数 找出最大的符合条件的子序列数组
// 不对 本身的数字不是有序数组 所以不能直接二分

// 2
// 这里其实最简单的就是双层循环，然后不断的对比当前元素跟后面元素的大小
// 如果如果符合，继续对比符合的元素和下一个元素的大小

// var lengthOfLIS = function (nums) {
//   let n = nums.length;
//   let maxLen = 0
//   for (let i = 0; i < n; ++i) {
//     let target = nums[i];
//     let res = [target];
//     for (let j = i + 1; j < n; ++j) {
//       if (nums[j] > target) {
//         target = nums[j];
//         res.push(nums[j]);
//       }
//     }
//     maxLen = Math.max(maxLen,res.length)
//     // console.log(`当前target是${target},对应的数组是${JSON.stringify(res)}`);
//   }
//   console.log(maxLen)
// };

/**
 * 看了解答的思路后 知道了构建一个dp数组用来存放我们需要操作的二分
 * 因为0到4和0到2肯定是0到2的未来可扩征的数组长度会较长，叫递增率
 * 所以这里我们需要轮训nums然后判断如果当前元素如果大于dp[len-1]的话 添加到dp中
 * 这样dp就是一个递增的，那么下一个元素如果不满足的话只需要找到最接近的一个比target小的元素，然后替换掉最后一个元素即可
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = [];
  dp[0] = -(Math.pow(10,4));
  for (let i = 0; i < n; ++i) {
    if (nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
    } else {
      let left = -1;
      let right = dp.length;
      let target = nums[i];
      while (left + 1 < right) {
        let mid = Math.floor((right + left) / 2);
        if (dp[mid] < target) {
          left = mid;
        } else {
          right = mid;
        }
      }
      if (left >= 0) {
        dp[left + 1] = target;
      }
    }
  }

  return dp.length - 1;
};

// lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// lengthOfLIS([0, 1, 0, 3, 2, 3]);
// lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
// @lc code=end
