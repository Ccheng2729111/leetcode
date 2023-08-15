/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const s = 'ADOBECODEBANC';
const t = 'ABC';
var minWindow = function (s, t) {
  // 定义窗口map
  const window = new Map();
  // 定义结果map
  const tMap = new Map();

  // 左指针
  let left = 0;
  // 右指针
  let right = 0;

  // 合法的符合次数
  let vaild = 0;

  // 符合答案的子串的长度
  let len = 0;
  // 符合答案的子串初始下标
  let start = 0;

  // 这里生成结果map key是字符value是出现次数
  for (let char of t) {
    tMap.set(char, tMap.get(char) ? tMap.get(char) + 1 : 1);
  }

  // 这个时候开始滑动窗口
  while (right < s.length) {
    let rc = s[right];
    // 如果结果map中有该字符
    if (tMap.has(rc)) {
      // 在window中记录该字符出现的次数
      window.set(rc, window.get(rc) ? window.get(rc) + 1 : 1);
      // 如果恰好出现的次数和我们需要的结果的map中某个字符出现的次数相同 记录vaild++
      if (tMap.get(rc) === window.get(rc)) vaild++;
    }

    // 右边指针开始移动 开始扩张窗口
    right++;

    console.log('(' + left + ',' + right + ']');

    // 如果窗口的数据符合我们的预期
    while (vaild === tMap.size) {
      // 这个时候开始判断是否是比上次小 是的话重新赋值起始下标和长度
      if (right - left < len || len===0) {
        start = left;
        len = right - left;
      }

      // 拿到左边字符
      let lc = s[left];
      left++;
      // 如果结果map中含有左边字符
      if (tMap.has(lc)) {
        // 并且左边字符和右边字符相同，因为我们需要左移字符，所以次数应该是-1的
        if (window.get(lc) === tMap.get(lc)) {
          vaild--;
        }
        // 往左移动left一次
        window.set(lc, window.get(lc) - 1);
      }
    }
  }
  console.log(s.substr(start, len));
};

minWindow(s, t);
