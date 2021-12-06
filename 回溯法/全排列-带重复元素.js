/*
 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

	示例 1：
	输入：nums = [1,1,2]
	输出：
	[[1,1,2],
	[1,2,1],
	[2,1,1]]
*/
var permuteUnique = function (nums) {
  var ans = [];
  nums = nums.sort((a, b) => a - b);
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
      pre = nums[i];
      while (nums[i+1] === pre) {
        i++;
      }
    }
  };
  dfs([], []);
  return ans;
};
console.log(
  permuteUnique([1,1,2])
);
