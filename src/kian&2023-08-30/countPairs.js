/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// #2824
const nums = [-6,2,5,-2,-7,-1,3]
const target = -2;
var countPairs = function (nums, target) {
  let list = nums
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (i > 0) {
      findNums(i - 1, i + 1);
    }
    findNums(i, i + 1);
    function findNums(left, right) {
      while (left >= 0 && right < list.length) {
        if (list[left] + list[right] < target) {
          count++;
        }
        left--;
        right++;
      }
    }
  }
  return count;
}; 

countPairs(nums, target);
