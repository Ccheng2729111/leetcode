function sortNums(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let sum = nums[j] + nums[j + 1];
        nums[j] = sum - nums[j];
        nums[j + 1] = sum - nums[j];
      }
    }
  }
  console.log(nums);
}

// on的做法，特殊情况还是会on^2
function sortNum1(nums) {
  let swapped = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (!swapped) break;
    swapped = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let sum = nums[j] + nums[j + 1];
        nums[j] = sum - nums[j];
        nums[j + 1] = sum - nums[j];
        swapped = true;
      }
    }
  }
  console.log(nums);
}
// 选择排序
function sort3(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }

    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }

  console.log(nums);
}

//二元选择排序
function sort4(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    let minIndex = i;
    let maxIndex = i;
    //  因为最后面的i个数字已经是排序过了的不需要操作
    for (let j = i + 1; j < nums.length - i; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
      if (nums[maxIndex] < nums[j]) {
        maxIndex = j;
      }
    }

    // 如果当前数组中当前循环的最大值等于最小值 那么已经排序完毕
    if (maxIndex === minIndex) break;
    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;

    // 如果当前最大值的位置还是首位的话，那么存在可能是最小值已经换过i位置了，这个时候需要最大值的index===最小值的index
    if (maxIndex === i) maxIndex = minIndex;
    // 这里需要注意-1-i 因为最后面的i个数字已经是排序过了的不需要操作
    let lastIndex = nums.length - 1 - i;
    temp = nums[maxIndex];
    nums[maxIndex] = nums[lastIndex];
    nums[lastIndex] = temp;
  }

  console.log(nums);
}

// 插入排序

function insertSort(nums) {
  for (let i = 1; i < nums.length; ++i) {
    let j = i;
    // 这里j从第二个数字开始跟前一个数字进行比较，如果小的话插到前面
    // 并且j--因为已经排过了，直到这一轮排完
    while (j >= 1 && nums[j] < nums[j - 1]) {
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;

      j--;
    }
  }

  console.log(nums);
}

function insertSort1(nums) {
  for (let i = 1; i < nums.length; ++i) {
    let currentNumber = nums[i];
    let j = i - 1;
    // 这里j从第二个数字开始跟前一个数字进行比较，如果小的话插到前面
    // 并且j--因为已经排过了，直到这一轮排完
    while (j >= 0 && currentNumber < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j+1] = currentNumber
  }

  console.log(nums);
}

insertSort1([2, 4, 2, 1, 6, 3, 1, 2, 3]);
