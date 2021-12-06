/* 
	给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

	示例 1：

	输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
	输出： True
	说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和

*/
var canPartitionKSubsets = function (nums, k) {
  // 排除一些基本情况
  if (k > nums.length) return false;
  let sum = nums.reduce((pre, cur) => pre + cur);
  if (sum % k != 0) return false;
  const backtrack = (nums, index, bucket, target) => {
    // 检查所有桶的数字之和是否都是 target
    if (index == nums.length) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] != target) {
          return false;
        }
      }
      return true;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] + nums[index] > target) {
        continue;
      }
      bucket[i] += nums[index];
      if (backtrack(nums, index + 1, bucket, target)) {
        return true;
      }
      bucket[i] -= nums[index];
    }
    return false;
  };
  let bucket = new Array(k).fill(0);
  let target = sum / k;
  nums.sort((a, b) => b - a);
  return backtrack(nums, 0, bucket, target);
};
