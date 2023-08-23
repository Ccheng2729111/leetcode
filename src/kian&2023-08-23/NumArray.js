/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.preAcc = [];
  this.preAcc = new Array(nums.length + 1);
  this.preAcc[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    this.preAcc[i] = nums[i - 1] + this.preAcc[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let acount = this.preAcc[right + 1] - this.preAcc[left];
  return acount;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2);
numArray.sumRange(2, 5);
numArray.sumRange(0, 5);
