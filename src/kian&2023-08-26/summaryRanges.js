/**
 * @param {number[]} nums
 * @return {string[]}
 */

//#228

//这里只需要遍历一次 然后有连续的直接写到结果数组里面
//只需要注意的是单个不成连续的数字需要单独直接push就行
var summaryRanges = function (nums) {
  let result = [];
  let list = [];

  let R = 0;
  while (R <= nums.length) {
    let rc = nums[R];
    if (result.length >= 1) {
      if (result[result.length - 1] + 1 === rc) {
        result.push(rc);
      } else {
        list.push(
          result.length > 1
            ? `${result[0]}->${result[result.length - 1]}`
            : `${result[0]}`
        );
        result = [rc];
      }
    } else {
      result.push(rc);
    }
    R++;
  }

  return list;
};

const nums = [0, 1, 2, 4, 5, 7];
summaryRanges(nums);
