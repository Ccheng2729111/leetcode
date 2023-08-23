/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

// #560
const nums = [1, -1, 0];
const k = 0;
var subarraySum = function (nums, k) {
  let L = 0;
  let R = 0;
  let count = 0;
  let vaild = 0;

  while (R < nums.length) {
    let rc = nums[R];
    R++;
    vaild += rc;

    while (vaild >= k) {
      if (vaild === k) {
        count++;
      }
      let lc = nums[L];
      vaild = vaild - lc;
      L++;
    }
  }
  return count;
};

var subarraySum2 = function (nums, k) {
  // 创建map存储key是窗口相加值，value是加值出现的次数
  let map = new Map();

  // acc是窗口相加值
  let acc = 0;
  // 出现次数
  let count = 0;

  // 这里遍历所有连续的窗口
  // acc每次都相加相当于窗口每次往后挪动一个位置
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    // 如果加值正好等于k count+1
    if (acc === k) {
      count++;
    }

    //如果总共的相加值-k正好 在map中出现过，那么说明裁剪掉出现的值 就是K
    if (map.has(acc - k)) {
      // 判断出现的次数 count就加几 因为可能出现的次数不是1次
      count += map.get(acc - k);
    }

    // 每次的加值保存在map中
    map.set(acc, (map.get(acc) || 0) + 1);
  }
  return count
};

subarraySum2(nums, k);
