/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// #49

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function(strs) {
  // 创建map存储数据
  let map = new Map()
  // 遍历O
  for(let str of strs){
    // 排序字符串 最终对比的是字符串sortStr
    const sortStr = Array.from(str).sort().toString()
    // 创建数组，最后需要返回[[xx],[aa]]的形式，所以这里需要提前把数据整理好
    // map的数据结构是按照key是排序后的数据 value是排序前的数据的数组
    // aet=>['eat']
    // 这里就可以判断是否可以用同样的key获取到数据，如果有的话表示排序后的字符串已经有了，只需要对list进行push新的原始数据即可
    // aet=>['eat','tea']
    const list = map.get(sortStr) ? map.get(sortStr):new Array()
    list.push(str)
    // 操作完后重新set回map
    map.set(sortStr,list)
  }
  
  // 最后返回[[]]的形式的数据结构
  return new Array(map.values())
};


console.log(groupAnagrams(strs))

