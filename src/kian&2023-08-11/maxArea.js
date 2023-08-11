/**
 * @param {number[]} height
 * @return {number}
 */

// #11

// max = 最长的刻度 * 最小的数字
// O(n)2次方 超时间限制了
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  // 存储最大雨水存储量
  let max = 0;
  // 两个数字的刻度 就是下标之差
  let scaleNum = 0;
  // 存储两个数字最小值，因为是按照最小值来判断临界值 max = 最长的刻度 * 最小的数字
  let minNum = 0;
  // 两层遍历
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // 两个数字刻度赋值
      scaleNum = j - i;
      // 找出最小值
      minNum = Math.min(height[i], height[j]);
      // 判断最大值 当前最大值max和minNum*scaleNum
      max = Math.max(max, minNum * scaleNum);
    }
  }

  return max;
};

// 是否可以左右连个指针开始循环
// 依然还是max = 最长的刻度 * 最小的数字
// 只不过现在是左右两个指针开始操作
// 如果连个指针马上要重合 表示递归结束
// 如果左边数字小于右边 左指针移动 否则右指针移动
// 依然计算最大值 然后赋值
var maxArea2 = function (height) {
  // 左指针
  let left = 0;
  // 右指针
  let right = height.length - 1;

  // 最大区域
  let maxArea = 0;

  while (left < right) {
    let scaleNum = right - left;
    let minNum = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, scaleNum * minNum);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea2(height));
