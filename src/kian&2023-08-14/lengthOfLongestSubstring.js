/**
 * @param {string} s
 * @return {number}
 */

// #3

const s = 'abcabcbb';
// 滑动窗口解决
// 同样两个指针开始移动
// 需要注意的是左指针需要在有重复的情况下，从重复的字符下标+1开始重新走
// 意思是abca这个情况已经不符合，开始从b->
// 只要字符串里有重复的 就把左指针从重复的index+1开始计算最长子串
// 因为这里需要找到重复的字符的下标 所以这里用map来存储每一个字符=>字符的下标
// a=>0 b=>1 c=>2
var lengthOfLongestSubstring = function (s) {
  const map = new Map();

  const len = s.length;

  let ans = 0;
  let L = 0;

  // 定义右指针开始滑动
  for (let R = 0; R < len; R++) {
    // 如果字符的map中有这个字符，说明窗口已经有重复的了
    // 并且需要判断当前重复的字符下标需要小于左指针
    // 在这种情况下 左边指针从重复的字符下标+1开始
    if (map.has(s[R]) && map.get(s[R]) >= L) {
      L = map.get(s[R]) + 1;
    }
    // 拿到右指针-左指针+1 代表重复的最长字符
    ans = Math.max(ans, R - L + 1);
    // 右指针遍历的时候 需要每次都set到map中
    map.set(s[R], R);
  }
};

lengthOfLongestSubstring(s);
