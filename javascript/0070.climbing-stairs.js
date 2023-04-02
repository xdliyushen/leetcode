// Created by Bob at 2023/04/02 00:26
// https://leetcode.com/problems/climbing-stairs/


/*
70. Climbing Stairs (Easy)

You are climbing a staircase. It takes `n` steps to reach the top.
Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?
**Example 1:**
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
**Example 2:**
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
**Constraints:**
- `1 <= n <= 45`
*/


// @lc code=begin

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1, 2];

    while(n > arr.length) {
        const len = arr.length;
        let prev = arr[len - 1] || 0;
        let prev2 = arr[len - 2] || 0;
        arr.push(prev + prev2);
    }

    return arr[n - 1];
};

// @lc code=end

