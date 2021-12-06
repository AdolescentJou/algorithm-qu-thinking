/*
	给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

	示例 1：

	输入：nums = [1,2,3]
	输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var permute = function (nums) {
  var ans = [];
  var dfs = (arr, indexArr) => {
    if (arr.length == nums.length) {
      ans.push(arr);
      return;
    }
    for (var i = 0; i < nums.length; i++) {
      if (indexArr.includes(i)) {
        continue;
      }
      dfs([...arr, nums[i]], [...indexArr, i]);
    }
  };
  dfs([], []);
  console.log(ans);
  return ans;
};
permute([1,2,3])