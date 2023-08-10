/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// #1

// 双循环 O(n2) 相当于遍历o的2次方
// i=0 j=1 i=0 j=2 ...
// i=1 j=2 i=1 j=3 ...
// ...
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return i === j ? [i] : [i, j];
      }
    }
  }
};

// 只需要循环一次 O(n)
// 这里需要用一个map进行存储 key是遍历的值，value是遍历的值的下标
// 每次只需要去map里面找差值就行
// i=0 map={3:0}
// ...
var twoSum2 = function (nums, target) {
  let map = {};
  let dis = 0;
  for (let i = 0; i < nums.length; i++) {
    dis = target - nums[i];
    if (map[dis] !== undefined) {
      return map[dis] === i ? [i] : [map[dis], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum2([3, 3], 6));
