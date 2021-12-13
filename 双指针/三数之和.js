/* 
	给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
	使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

	注意：答案中不可以包含重复的三元组。

	示例 1：
	输入：nums = [-1,0,1,2,-1,-4]
	输出：[[-1,-1,2],[-1,0,1]]

*/
// var threeSum = function (nums) {
//   var ans = [];
//   nums.sort((a, b) => a - b);
//   var dfs = (arr, index) => {
//     if (sum(arr) > 3) {
//       return;
//     }
//     if (arr.length == 3) {
//       if (sum(arr) == 0) {
//         ans.push(arr.slice());
//       }
//       return;
//     }
//     var temp = -Infinity;
//     for (var i = index; i < nums.length; i++) {
//       if (nums[i] == temp) {
//         continue;
//       }
//       dfs([...arr, nums[i]], i + 1);
//       temp = nums[i];
//     }
//   };
//   dfs([], 0);
//   return ans;
// };
// var sum = (arr) => {
//   return arr.reduce((pre, cur) => pre + cur, 0);
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var threeSum = function (nums) {
	var length = nums.length;
	var ans = [];
	nums.sort((a, b) => a - b);
	for (var i = 0; i < length; i++) {
	  if (i > 0 && nums[i] == nums[i - 1]) {
	    continue;
	  }
	  var k = length - 1;
	  var target = -nums[i];
	  for (var j = i + 1; j < length; j++) {
	    if (j > i + 1 && nums[j] == nums[j - 1]) {
	      continue;
	    }
	    while (j < k && nums[j] + nums[k] > target) {
	      --k;
	    }
	    if (j == k) {
	      break;
	    }
	    if (nums[j] + nums[k] == target) {
	      ans.push([nums[i], nums[j], nums[k]]);
	    }
	  }
	}
	return ans;
      };
      console.log(threeSum([-1, 0, 1, 2, -1, -4]));
      