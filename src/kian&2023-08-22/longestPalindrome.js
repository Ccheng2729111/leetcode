/**
 * @param {string} s
 * @return {string}
 */

// #5
const s = 'babad';
var longestPalindrome = function (s) {
  let window = '';
  let maxStr = null;
  for (let i = 0; i < s.length; i++) {
    if (window.indexOf(s[i]) !== -1) {
      window += s[i];

      if (isEqualString(window)) {
        maxStr = maxStr
          ? maxStr.length > window.length
            ? maxStr
            : window
          : window;
      }

      window = '';
    }

    window += s[i];
  }

  return maxStr;
};

function isEqualString(str) {
  let list = [];
  for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
  }

  if (list.toString() === list.reverse().toString()) {
    return true;
  }

  return false;
}

var longestPalindrome2 = function (s) {
  let maxStr = s[0];
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    let flag = false;
    let str = '';

    if ((i !== 0 && s[i] === s[i - 1]) || s[i] === s[i + 1]) {
      let commonStr =
        s[i] === s[i - 1] ? s.substring(i - 1, i + 1) : s.substring(i, i + 2);
      maxStr = commonStr.length > maxStr.length ? commonStr : maxStr;
    }

    while (count <= i && !flag) {
      if (s[i - count] === s[i + count]) {
        str = s.substring(i - count, i + count + 1);
        count++;
      } else {
        flag = true;
      }
    }

    maxStr = str.length > maxStr.length ? str : maxStr;
  }

  return maxStr;
};

var longestPalindrome3 = function (s) {
  // 如果小于2直接返回s
  if (s.length < 2) {
    return s;
  }
  //这里要获取最长子串的长度，只需要定义两个值，开始位置以及最长长度，这样起始和结束的index都知道了
  let start = 0;
  let maxLength = 1;

  //这里需要注意的是回文子串通用解决方法，中间扩散法，需要调两边
  // abba这种情况 需要考虑到i i+1这两个为左右的情况
  // aba这种就是 有中位，直接i-1和i+1就行
  // 所以每次遍历都需要调两次判断方法
  for (let i = 0; i < s.length; i++) {
    aroundMid(i, i + 1);
    if (i > 0) {
      aroundMid(i - 1, i + 1);
    }
  }

  // 这里需要注意 只要左边界和右边界存在 并且左右相同，则符合条件 判断最大值
  // 最后遍历就行
  function aroundMid(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  // 这里就直接slice后返回即可
  let res = s.slice(start, start + maxLength);
  return res;
};

longestPalindrome3(s);
