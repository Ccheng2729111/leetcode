/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const nums1 = [1,2];
const nums2 = [3,4];
var findMedianSortedArrays = function (nums1, nums2) {
  let newNums = [...nums1, ...nums2];
  let sortNums = newNums.sort((a, b) => a - b);
  let len = sortNums.length;

  let res = 0;
  let l = 0;
  let r = 0;

  if (len % 2 === 0) {
    l = len / 2;
    r = len / 2 + 1;
  }

  if (len % 2 !== 0) {
    l = r = len / 2 + 0.5;
  }

  res = l === r ? sortNums[l - 1] : (sortNums[l - 1] + sortNums[r - 1]) / 2;

  return res;
};

const map = new Map()

let value = [1,2,3]

if(map.has(value)){
  return
}else{
  map.set(value,1)
}

findMedianSortedArrays(nums1, nums2);
