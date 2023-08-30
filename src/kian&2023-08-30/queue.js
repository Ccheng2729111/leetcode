function MonotionicQuque() {
  this.maxq = [];
  // push操作的时候判断当前最后一个元素是否小于当前要推入的元素，如果小于的话把前面的小的都去除掉
  // 留下比推入元素大的以及当前推入的元素
  // 这样能保证当前数组中留下的最大的元素一定在第一
  this.push = function (n) {
    while (this.maxq.length > 0 && this.maxq[this.maxq.length - 1] < n) {
      this.maxq.pop();
    }
    this.maxq.push(n);
  };

  // 最大值一定是第一个
  this.max = function () {
    return this.maxq[0];
  };

  // 推出得时候需要判断当前推出的值是否是最大值如果是的话再推出 如果不是的话 不做操作
  this.pop = function (n) {
    if (n === this.maxq[0]) {
      this.maxq.shift();
    }
  };
}
