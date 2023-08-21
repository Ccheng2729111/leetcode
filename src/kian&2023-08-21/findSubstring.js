/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// #30

const s = 'wordgoodgoodgoodbestword';
const words = ["word","good","best","word"];
var findSubstring = function (s, words) {
  let wwMap = new Map();
  let wordsString = '';
  let maxLen = words[0].length * words.length;
  words.forEach((i) => {
    wordsString += i;
    wwMap.set(i, wwMap.get(i) ? wwMap.get(i) + 1 : 1);
  });

  let wMap = new Map();
  let window = new Map();

  for (let i = 0; i < wordsString.length; i++) {
    wMap.set(
      wordsString[i],
      wMap.has(wordsString[i]) ? wMap.get(wordsString[i]) + 1 : 1
    );
  }

  let L = 0;
  let R = 0;
  let vaild = 0;
  let res = [];

  while (R < s.length) {
    let rc = s[R];
    R++;
    if (wMap.has(rc)) {
      window.set(rc, window.get(rc) ? window.get(rc) + 1 : 1);
      if (wMap.get(rc) === window.get(rc)) vaild++;
    }

    if (R - L === maxLen) {
      let lc = s[L];
      if (wMap.size === vaild) {
        // let flag = false;
        // let replaceStr = s.substring(L, R);
        // for (let j = 0; j < words.length; j++) {
        //   if (replaceStr.indexOf(words[j]) !== -1) {
        //     replaceStr = replaceStr.replace(words[j], '');
        //     continue;
        //   }
        //   flag = true;
        // }
        // if (!flag) {
        //   res.push(L);
        // }
        // ababab
        // ['ab','ba','ba']
      }

      if (wMap.has(lc)) {
        if (wMap.get(lc) === window.get(lc)) {
          vaild--;
        }

        window.set(lc, window.get(lc) - 1);
      }
      L++;
    }
  }
  return res;
};

function findSubstring2(s, words) {
  let wordsMap = new Map();
  // 先创建词的map ab=>1 ba=>2这种 key是词 value是出现的次数
  words.forEach((i) => wordsMap.set(i, (wordsMap.get(i) || 0) + 1));

  let wordsLength = words.length;
  let singleLength = words[0].length;

  let res = [];

  // 这里可以注意双指针，就是index是慢指针
  for (let index = 0; index + singleLength <= s.length; index++) {
    // point是快指针
    let point = index;
    // 创建index->point的子串的统计 这里可以注意的是 word的长度是固定的
    // 所以每次拿的话word就是s.substring(point,point+word的长度)
    // 然后这里重复循环就行，有几种情况需要直接跳出
    // 1，如果words的map中没有这个word，那么说明当前这一个词不符合直接跳出
    // 2. 如果当前轮的word在wordmap的出现次数和当前已经又的countWords次数一样说明已经统计过一次了 直接跳出
    // 3. 如果当前快慢指针的间隔正好是我们要的长度 那么这种情况下只有可能是中间的子串是符合要求的
    // 这里需要注意快指针每次往后遍历的时候是按照一个词为跨度来进行的
    let countMap = new Map();
    while (true) {
      let word = s.substring(point, point + singleLength);
      if (!wordsMap.has(word)) {
        break;
      }

      let count = wordsMap.get(word)

      if(countMap.get(word) === count){
        break
      }

      countMap.set(word, (countMap.get(word) || 0) + 1);

      point += singleLength;

      if (point - index === wordsLength * singleLength) {
        res.push(index);
        break;
      }
    }
  }

  return res
}

findSubstring2(s, words);
