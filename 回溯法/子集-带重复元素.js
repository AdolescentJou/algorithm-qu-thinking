/*
	给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

	解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

	示例 1：

	输入：nums = [1,2,2]
	输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

	思路:有重复的元素，相比普通的求子集我们需要设置一个标志位来记录重复的元素，必须使用数组记录，不然会出现记录的被销毁的情况

*/
var subsetsWithDup = function (nums) {
  var ans = [];
  var backtrack = (arr, index, pre) => {
    if (index > nums.length) return;
    ans.push(arr.slice());
    var arr = [...arr];
    for (var i = index; i < nums.length; i++) {
      if (!pre.includes(nums[i])) {
        arr.push(nums[i]);
        backtrack(arr, i + 1, [...pre]);
        pre.push(arr.pop());
      }
    }
  };
  backtrack([], 0, []);
  return ans;
};
console.log(subsetsWithDup([4, 4, 1, 4]));
