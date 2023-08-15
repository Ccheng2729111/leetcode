/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// #438
const s = 'cbaebabacd';
const p = 'abc';
var findAnagrams = function (s, p) {
  if (p.length > s.length) {
    return [];
  }
  let pMap = new Map();
  let sMap = new Map();
  let res = [];

  // 获取所有p的字符为key,出现次数为value的map
  for (let char of p) {
    pMap.set(char, pMap.get(char) ? pMap.get(char) + 1 : 1);
  }

  let L = 0;
  let R = 0;
  let vaild = 0;
  while (R < s.length) {
    let char = s[R];

    if (pMap.has(char)) {
      sMap.set(char, sMap.get(char) ? sMap.get(char) + 1 : 1);
      if (sMap.get(char) === pMap.get(char)) vaild++;
    }
    R++;

    // log 滑动窗口 [L,R) 需要注意的是什么时候右边开始移动 什么时候左边开始收拢
    // console.log('window: [' + L + ', ' + R + ')');

    // 一旦长度等于p的长度的话表示 当前窗口已经满了，需要L开始移动
    if (R - L === p.length) {
      // 这里如果想等次数vaild等于p的长度的话 表示当前想等的次数是没问题的
      // a=>1 b=>1 c=>1 和pmap的 a=>1 b=>1 c=>1相同，此时记录l的数值就是异位数起时的下标
      if (pMap.size === vaild) res.push(L);

      // 这里不管是否符合都需要开始移动l的坐标 因为长度已经满了
      let lc = s[L];
      L++;
      // 这里如果左指针对应的字符在pmap中已经有了，并且在smap也已经有了
      // 这种情况是我们需要的，但是因为是左指针开始移动了，所以相等次数要--
      if (pMap.has(lc)) {
        if (sMap.get(lc) === pMap.get(lc)) {
          vaild--;
        }
        // 这里很重要，如果pmap中有了的字符，在smap中需要-1 因为左指针移动了
        sMap.set(lc, sMap.get(lc) - 1);
      }
      console.log(sMap);
    }
  }

  return res;
};

console.log(findAnagrams(s, p));
