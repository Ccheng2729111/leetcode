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

  // 获取所有p的字符为key,出现次数为value的map
  for (let key in p) {
    pMap.set(key, pMap.get(key) ? pMap.get(key) + 1 : 1);
  }


};
