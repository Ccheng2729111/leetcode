/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// #643
const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

// 这个题首先想到的就是拿到指定长度k的数字
// 然后比较拿到的数字的平均数大小
// 首先想到的就是滑动窗口
// 这里需要注意的是 如果拿到了k数字放在数组里话 时间复杂度和空间复杂度会增加k1
// 所以其实不需要额外的空间去存这个k个数 只需要加好后 用valid去管理即可
// 一旦加了k次，左窗口开始移动
// 少于k次 右窗口开始移动
var findMaxAverage = function (nums, k) {

  // 设置最大值
  let max = null;

  // 如果是0的话返回0
  if (nums.length === 0) {
    return 0;
  }

  // 定义左窗口
  let L = 0;
  // 定义右窗口
  let R = 0;
  // 统计加了此书
  let vaild = 0;
  // 统计相加值
  let sum = 0
  while (R < nums.length) {
    // 右边窗口开始➕
    sum = sum + nums[R];
    // 加一次 valid统计一次
    vaild++;
    R++;

    // 当valid等于k的时候 表示已经统计了k次了，开始收缩左边界
    while (vaild === k) {
      // 拿到最大值
      if (max) {
        max = Math.max(sum / k, max);
      } else {
        max = sum / k;
      }

      // 这里需要注意 sum减去左边界去掉的值
      sum = sum - nums[L]
      // 统计次数减1
      vaild--;
      L++;
    }
  }

  return max;
};

findMaxAverage(nums, k);
