/*
	给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
	解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

	示例 1：
	输入：nums = [1,2,3]
	输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
var subsets = function (nums) {
  var ans = [];
  var dfs = (arr, index) => {
    if (index > nums.length) return;
    var arr = [...arr];
    ans.push(arr);
    for (var i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(arr, i+1);
      arr.pop();
    }
  };
  dfs([], 0);
  console.log(ans);
};
subsets([1, 2, 3]);
