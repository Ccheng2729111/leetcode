// 前缀和
// 可以快速获取数组某个区间之和
const nums = [1, 4, 5, 2, 1, 4, 2, 1];

function prefixAcc(nums, start, end) {
  let preList = new Array(nums.length + 1).fill(0);

  for (let i = 1; i <= nums.length; i++) {
    preList[i] = nums[i - 1] + preList[i - 1];
  }

  console.log('range of start and end', start, end);
  const rangeAcc = preList[end + 1] - preList[start];
  console.log(rangeAcc);
  return rangeAcc;
}

// 差分法
// 在数组的某个区间内 进行同时+ -操作 得到操作完的数据
function descAcount(nums, start, end, count) {
  let descList = new Array(nums.length).fill(0);
  descList[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    descList[i] = nums[i] - nums[i - 1];
  }

  descList[start] += count;
  descList[end + 1] -= count;

  let originList = [];
  originList[0] = descList[0];

  for (let i = 1; i < descList.length; i++) {
    originList[i] = originList[i - 1] + descList[i];
  }

  console.log(originList);
}

descAcount(nums, 4, 5, 1);
