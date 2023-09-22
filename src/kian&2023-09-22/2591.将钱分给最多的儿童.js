/*
 * @lc app=leetcode.cn id=2591 lang=javascript
 *
 * [2591] 将钱分给最多的儿童
 */

// @lc code=start
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {

  if(money<children) return -1
  let left = money - children

  let count = 0
  while(left>=7){
      count++
      left-=7

      if(left===3 && count===children-1){
          count--
          break
      }
      if(count===children){
          if(left>0){
              count--
          }
          break
      }
  }

  return count
};

// distMoney(16, 2);
// distMoney(8, 2);
// distMoney(2, 10);
distMoney(16, 10);
// @lc code=end
