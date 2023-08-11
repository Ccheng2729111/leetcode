/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// #15
// 没有什么是遍历不能解决的，如果有，那就再遍历一次
// 。。。
// 满足两个条件
// 1.三个数字相加为0
// 2.三个数字不能是同一个下标

// 解法1
// 其实也是双指针，剩下一个直接在数组里面找即可 (这里有问题思路错误 会找到重复的数字)
// 先排序，从小打大
// 然后左指针0 右指针lengt-1
// 然后判断两个数字相加 的值与0的差值在数组里找得到吗
// 其次需要判断相加值是大于0 还是小于0
// 双指针需要找的点就是什么时候 指针开始移动，什么时候是左指针移动 什么时候是右指针移动
const nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let map = new Map();
  let resultArr = [];

  let sortNums = nums.sort((a, b) => a - b);
  while (left < right) {
    const lostNum = 0 - (sortNums[left] + sortNums[right]);
    if (sortNums.indexOf(lostNum) !== -1) {
      const arrayString = new Array(lostNum, sortNums[left], sortNums[right]);
      const key = arrayString.toString();
      if (!map.has(key)) {
        map.set(key, arrayString);
      }
    }

    if (sortNums[left] < sortNums[right]) {
      left++;
    } else {
      right--;
    }
  }

  for (const value of map.values()) {
    resultArr.push(value);
  }

  return resultArr;
};

// 正确解法
// 也是双指针，这里如果正常思考的话可能需要三个指针或者三个循环暴力去解
// 但是如果我们固定一个for循环，然后两个指针去移动，这样就没问题
// 所有的前提是已经sort排序过了
// 但是需要注意几个点
// 1 当前固定for循环的角标对应的数字已经大于0的时候表示 固定的数字后面都比这个数字大 所以不可能相加为0 直接跳出循环
// 2 如果当前固定循环的角标大于0 并且当前角标对应的数字和前一个数字是相同的，需要跳过当前循环，比如 -2 -2 -1 0 1 2 前面两个其实结果都是一样的-2 0 2 所以直接跳过这次循环就行
// 3 在固定的数字和双指针对应的数字相加等于0的情况下需要注意，如果left和left+1的数字相同，同样需要去重，left++ 同理right和right-1相同right--
// 4 sum===0的情况下 并且left和right与相邻都不相同的话，left-- right++

var threeSum2 = function (nums) {
  let size = nums.length;
  let resultArr = [];
  if (size < 3) {
    return [];
  }

  const sortNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < size; i++) {
    if (sortNums[i] > 0) break;
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue;
    let left = i + 1;
    let right = size - 1;
    while (left < right) {
      const sum = sortNums[i] + sortNums[left] + sortNums[right];
      if (sum === 0) {
        resultArr.push([sortNums[i], sortNums[left], sortNums[right]]);

        while (sortNums[left] === sortNums[left + 1]) left++;
        while (sortNums[right] === sortNums[right - 1]) right--;
        left++;
        right--;
      }

      if (sum < 0) {
        left++;
      }
      if (sum > 0) {
        right--;
      }
    }
  }

  return resultArr;
};

console.log(threeSum2(nums));
