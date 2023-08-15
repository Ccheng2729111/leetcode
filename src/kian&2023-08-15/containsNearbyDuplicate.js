/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// #219
const nums = [1,2,3,1,2,3];
const k = 2;
var containsNearbyDuplicate = function (nums, k) {
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (Math.abs(j - i) <= k) {
          flag = true;
          break;
        }
      }
    }
  }
  return flag;
};

// 很简单没什么好说的
// 这里只需要找到两个相同的数字，然后拿下标对比即可
// 这里只要是涉及到数据，相等等相关，直接用map去存数字即可，有相同的直接更新map 
// key对应的是数字，value对应下标
var containsNearbyDuplicate2 = function(nums, k) {
  let map = new Map()

  for(let i=0;i<nums.length;i++){
    if(map.has(nums[i]) && i - map.get(nums[i]) <=k ){
      return true
    }
    map.set(nums[i],i)
  }
  return false
};

containsNearbyDuplicate2(nums,k)
