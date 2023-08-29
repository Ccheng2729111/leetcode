// 单调队列
// 找出当前数组元素的下一个最大值的下标
let arr = [2, 1, 2, 4, 3];
var nextGreaterMax = function (nums) {
  let res = Array.from(nums.length).fill(0);

  // 栈信息
  let s = [];

  // 从后往前遍历数组，方便进行进栈，出栈操作
  for (let i = nums.length - 1; i >= 0; i--) {
    // 如果当前的nums[i]元素比s的数组中的最后一个元素大的话 把最后一个元素给推出去，然后再查看s的下一个数据
    // 避免s的数据中有比nums[i]的数据小的 这样保证在nums[i]的元素下，s中只有比nums[i]大的
    while (s.length && s[s.length - 1] <= nums[i]) {
      s.pop();
    }

    // 这里因为是倒叙推进去的 前面的值比后面的大 所以只需要取最后一个 就是比当前元素最近的最大的值就是
    res[i] = s.length ? s[s.length - 1] : -1;

    s.push(nums[i]);
  }

  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  // 用来存储当前nums2的元素->当前nums2的元素下一个最大值
  let map = new Map();
  // 这里可以用下标来获取当前元素的下一个最大值
  let nextMaxList = nextGreaterMax(nums2);
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], nextMaxList[i]);
  }

  // 通过key找到存储在map中的对应的nums2的元素下标往后最大值
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]));
  }

  return res;
};

var nextGreaterElement2 = function (nums1, nums2) {
  let res = [];
  // 用来存储当前nums2的元素->当前nums2的元素下一个最大值
  let map = new Map();
  let strack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (strack.length && strack[strack.length - 1] <= nums2[i]) {
      strack.pop();
    }

    map.set(nums2[i], strack.length ? strack[strack.length - 1] : -1);
    strack.push(nums2[i]);
  }
  // 通过key找到存储在map中的对应的nums2的元素下标往后最大值
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]));
  }

  return res;
};

nextGreaterElement2(nums1, nums2);
