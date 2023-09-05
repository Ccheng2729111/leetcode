/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let strMap = new Map();
  for (let char of s) {
    strMap.set(char, strMap.get(char) ? strMap.get(char) + 1 : 1);
  }

  for (let char of t) {
    strMap.set(char, strMap.get(char) ? strMap.get(char) + 1 : 1);
  }

  for (const [key, value] of strMap) {
    if (value % 2 !== 0) {
      return key;
    }
  }
};

// findTheDifference("abcd","abcde")
// findTheDifference("","t")
// @lc code=end
