/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const s1 = 'abcd';
const s2 = 'dacb';
var canBeEqual = function (s1, s2) {
  for (let i = 0, j = i + 2; j < s1.length; i++) {
    let resStr1 = s1[j] + s1[i + 1] + s1[i] + s1[j + 1];
    for (let k = 0, m = k + 2; m < s1.length; k++) {
      let resStr2 = s1[m] + s1[k + 1] + s1[k] + s1[m + 1];
      if (resStr1 === resStr2) {
        return true;
      }
    }
  }

  return false;
};
function canBeEqual1(s1, s2) {
   // 如果s1和s2已经相等，返回true
   if (s1 === s2) {
    return true;
}

// 初始化不匹配位置的数组
const mismatchedPositions = [];

// 遍历s1和s2的字符
for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
        mismatchedPositions.push(i);
    }
}

// 如果不匹配位置数量为2，并且这两个位置上的字符可以交换后使s1和s2相等，返回true
if (mismatchedPositions.length === 2) {
    const [i, j] = mismatchedPositions;
    if (s1[i] === s2[j] && s1[j] === s2[i]) {
        return true;
    }
}

// 否则返回false
return false;
}

function maxBeauty(s, k) {
  const MOD = 1000000007;
  const n = s.length;

  // 统计字符串s中每个字符的出现次数
  const charCount = new Map();
  for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // 初始化动态规划数组dp
  const dp = new Array(k + 1).fill(null).map(() => new Array(26).fill(0));

  // 初始化dp数组的第一行
  for (const [char, count] of charCount) {
      dp[1][char.charCodeAt(0) - 'a'.charCodeAt(0)] = count;
  }

  // 计算dp数组
  for (let i = 2; i <= k; i++) {
      for (const [char, count] of charCount) {
          dp[i][char.charCodeAt(0) - 'a'.charCodeAt(0)] =
              (dp[i - 1][char.charCodeAt(0) - 'a'.charCodeAt(0)] +
              dp[i - 1].reduce((sum, val, idx) => idx !== char.charCodeAt(0) - 'a'.charCodeAt(0) ? sum + val : sum, 0) +
              1) % MOD;
      }
  }

  // 统计所有长度为k的子序列中美丽值最大的值
  let maxBeauty = 0;
  for (let i = 0; i < 26; i++) {
      maxBeauty = Math.max(maxBeauty, dp[k][i]);
  }

  // 统计最大美丽值的子序列数目
  let count = 0;
  for (let i = 0; i < 26; i++) {
      if (dp[k][i] === maxBeauty) {
          count++;
      }
  }

  return count % MOD;
}



console.log(maxBeauty('bcca', 2))
