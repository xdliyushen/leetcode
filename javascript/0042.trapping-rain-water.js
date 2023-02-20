// Created by Bob at 2023/02/13 11:44
// https://leetcode.com/problems/trapping-rain-water/


/*
42. Trapping Rain Water (Hard)

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`,
compute how much water it can trap after raining.
**Example 1:**
![](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```
**Example 2:**
```
Input: height = [4,2,0,3,2,5]
Output: 9
```
**Constraints:**
- `n == height.length`
- `1 <= n <= 2 * 10⁴`
- `0 <= height[i] <= 10⁵`
*/


// @lc code=begin

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var stack = [height[0]];
    var amount = 0;

    for (let i = 1; i < height.length; i++) {
        let prevHeight = stack[i - 1];
        let currHeight = height[i];

        if (currHeight > prevHeight) {
            // find left boundary
            let leftBoundaryIndex = stack.length - 2;
            for(let j = leftBoundaryIndex; j >= 0; j--) {
                if(stack[j] >= stack[leftBoundaryIndex]) {
                    leftBoundaryIndex = j;
                }
                if(stack[j] >= currHeight) {
                    break;
                }
            }

            
            if (leftBoundaryIndex >= 0) {
                const seaLevel = Math.min(stack[leftBoundaryIndex], currHeight);

                for (let j = leftBoundaryIndex + 1; j < i; j++) {
                    if(seaLevel - stack[j] > 0) {
                        amount += seaLevel - stack[j];
                        stack[j] = seaLevel;
                    }
                }
            }
        }

        stack.push(currHeight);
    }

    return amount;
};

// @lc code=end

