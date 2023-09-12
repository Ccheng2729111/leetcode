/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

/**
 * 第一个想法就是遍历arr找到1-arr.length-1的范围内 缺失的整数
 * 然后拼接arr.length-1的数值到后面的1000的数组。最后直接取下标就行
 */
var findKthPositive1 = function (arr, k) {
  let list = [];
  for (let i = 0; i < arr.length; ++i) {
    let prevNum = arr[i - 1] || 0;
    let curNum = arr[i];

    if (curNum - prevNum !== 1) {
      let addCount = curNum - prevNum - 1;
      while (addCount !== 0) {
        prevNum++;
        list.push(prevNum);
        addCount--;
      }
    }
  }

  if (k <= list.length) {
    return list[k - 1];
  } else {
    return arr[arr.length - 1] + k;
  }
};

var findKthPositive = function (arr, k) {
  if (arr[0] > k) return k;
  let left = -1;
  let right = arr.length;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] - mid - 1 < k) {
      left = mid;
    } else {
      right = mid;
    }
  }

  // 如果left===arr.length-1 表示当前所有都是不缺的
  // if (left === arr.length - 1) return arr[left] + k;
  // 这个时候还缺
  // sumCount
  let sumCount = 0;
  let missCount = arr[left] - left - 1;
  if (k >= missCount) {
    sumCount = k - missCount;
  } else {
    sumCount = k;
  }
  return arr[left] + sumCount;
};

// findKthPositive([2, 3, 4, 7, 11], 5);
findKthPositive([5,6,7,8,9], 9);
// @lc code=end
