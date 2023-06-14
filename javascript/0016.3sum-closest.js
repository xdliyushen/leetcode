// Created by Bob at 2023/06/14 14:33
// https://leetcode.com/problems/3sum-closest/


/*
16. 3Sum Closest (Medium)

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums`
such that the sum is closest to `target`.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.
**Example 1:**
```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```
**Example 2:**
```
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
```
**Constraints:**
- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10⁴ <= target <= 10⁴`
*/


// @lc code=begin

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closestSum = Number.POSITIVE_INFINITY;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        while (nums[i] === nums[i + 1]) { i++; }
    }

    return closestSum;
};

// let input = [
//     [[-1, 2, 1, -4], 1],
//     [[0, 0, 0], 0],
//     [[4, 0, 5, -5, 3, 3, 0, -4, -5], -2],
//     [[-1000, -5, -5, -5, -5, -5, -5, -1, -1, -1], -14],
// ];

// input.map(v => {
//     const output = threeSumClosest(...v);
//     console.log(`input: `, v)
//     console.log(`output: `, output)
// })

// @lc code=end

