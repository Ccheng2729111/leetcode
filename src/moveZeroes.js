/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// #283

const nums = [0, 1, 0, 3, 12];
// const nums = [0, 0, 1];

var moveZeroes = function (nums) {
  // 统计zero的数量
  let zeroNum = 0;
  // 统计到zero的时候flag设置为true
  // 为了在删除对应的0的时候 i不进行++ 只重制为上次的数字，避免删除后遍历跳过，因为此时长度已经-1了
  let flag = false;

  // 遍历nums 有0的话删除原数组的0的位置并且zero++
  for (let i = 0; i < nums.length; flag ? i : i++) {
    if (nums[i] === 0) {
      zeroNum++;
      nums.splice(i, 1);
      flag = true;
    } else {
      flag = false;
    }
  }

  // 原数组补0操作
  while (zeroNum !== 0) {
    nums.push(0);
    zeroNum--;
  }
};

moveZeroes(nums);
console.log(nums);
