/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
/**
 * 这一题只需要注意在js中字符Unicode编码值决定的，单字符就是按照a,b,c这样的排序来的
 * 其他的就很简单了直接找第一个大于target的元素就行
 */
var nextGreatestLetter = function (letters, target) {
  let left = -1;
  let right = letters.length;
  while (left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    if (letters[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (left >= 0 && left < letters.length - 1) {
    return letters[left + 1];
  } else {
    return letters[0];
  }
};
nextGreatestLetter(["x","x","y","y"], 'z');
// @lc code=end
