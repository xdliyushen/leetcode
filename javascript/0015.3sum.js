// Created by Bob at 2023/06/12 11:29
// https://leetcode.com/problems/3sum/


/*
15. 3Sum (Medium)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i !=
j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
Notice that the solution set must not contain duplicate triplets.
**Example 1:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```
**Example 2:**
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```
**Example 3:**
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```
**Constraints:**
- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`
*/


// @lc code=begin

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const ans = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; ) {
        let left = i + 1;
        let right = nums.length - 1;
        const value = nums[i];

        while (left < right) {
            const leftValue = nums[left];
            const rightValue = nums[right];
            const sum = leftValue + rightValue + value;

            if (sum === 0) {
                ans.push([value, leftValue, rightValue]);
                while (leftValue === nums[left] && left < right) { left++; }
                while (rightValue === nums[right] && left < right) { right--; }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }

        while(value === nums[i]) {
            i++;
        }
    }

    return ans;
};

// @lc code=end
