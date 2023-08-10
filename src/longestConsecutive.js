/**
 * @param {number[]} nums
 * @return {number}
 */

// #128

const nums = [100, 4, 200, 1, 3, 2];
// O的n次方
var longestConsecutive = function (nums) {
  // 设置最大长度
  let maxLength = 0;
  // 遍历nums
  for (let num of nums) {
    // 设置list用于存放连续的数组 [1,2,3]
    let list = [];
    // 当前数字的下一个数字，当前数字是1的话 index=1的情况下 nextNum=2
    let nextNum;
    // 设置index用于++
    let index = 1; // 初始1
    // 先把当前的num推进去 [1]
    list.push(num);
    // 递归查找整个数组 是否有1+1的存在 如果有的话进入
    // 如果当前不存在的话 直接跳过
    // 因为index++ 所以 1+1 1+2 1+3相当于是找整个数组的连续数字然后推进list中
    while (nums.indexOf(num + index) !== -1) {
      // 获取1+1 2
      nextNum = num + index;
      // 这个时候index+1
      index++;
      // list推进去当前num+1的数组 [1,2]
      list.push(nextNum);
    }
    //这里只需要判断list是否是最大的 是的话直接赋值就行
    if (list.length > maxLength) {
      maxLength = list.length;
    }
  }

  return maxLength;
};

var longestConsecutive2 = function (nums) {
  // 创建map存储
  let map = new Map();
  // 声明max
  let max = 0;
  // 遍历nums
  for (let num of nums) {
    // 重复的num不做操作
    if (!map.has(num)) {
      // 拿到数字左边的值 比如2就是拿到1的长度 没有的话赋值0
      let preLen = map.get(num - 1) || 0;
      // 拿到数字左边的值 比如2就是拿到3的长度 没有的话赋值0
      let nextLen = map.get(num + 1) || 0;
      // 获取当前num的长度，左右都没有的话 表示这个数字的连续长度是1
      let curLength = preLen + 1 + nextLen;

      // 设置当前的2=>1 数字以及它目前的连续长度
      map.set(num, curLength);
      // 是否是最大的 是的话赋值给max
      max = Math.max(max, curLength);
      // 看不懂
      map.set(num - preLen, curLength);
      map.set(num + nextLen, curLength);
    }
  }

  return max;
};

// 其实这里思路跟第一次的思路一样的，但是需要的是
// 在遍历的时候其实不需要考虑如果有num-1的情况
// 因为如果有num-1的存在 那么它肯定之前已经判断过最长连续长度过的
// 这样的话 就只是O(n)了，只需要遍历n次即可
function longestConsecutive(nums: number[]): number {
  // 创建set，来去除重复num
  let nums_set = new Set<number>();
  // 定义最长长度
  let longsetStreak= 0

  for(let num of nums){
      nums_set.add(num)
  }

  for(const num of nums_set){
      // 如果存在-1的话 表示之前已经计算过了
      // 这里不做全量的遍历 计算过的值不做额外的计算
      if(!nums_set.has(num-1)){
          let currentNum = num
          let currentStreak = 1;

          // 如果当前set中存在num+1的话 进入递归
          // currentNum+1 长度+1 然后连续判断+2 +3的情况，如果多次命中
          // 长度连续加即可
          while(nums_set.has(currentNum + 1)){
              currentNum++
              currentStreak++
          }

          // 判断最长
          longsetStreak = Math.max(longsetStreak,currentStreak)
      }
  }

  return longsetStreak
}

console.log(longestConsecutive2(nums));
