// Created by Bob at 2023/02/20 19:18
// https://leetcode.com/problems/median-of-two-sorted-arrays/


/*
4. Median of Two Sorted Arrays (Hard)

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median**
of the two sorted arrays.
The overall run time complexity should be `O(log (m+n))`.
**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```
**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```
**Constraints:**
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10⁶ <= nums1[i], nums2[i] <= 10⁶`
*/


// @lc code=begin

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    let prevNum = currNum = 0;

    for (let i = j = k = 0; i <= totalLen / 2; i++) {
        const num1 = nums1[j] ?? Number.POSITIVE_INFINITY;
        const num2 = nums2[k] ?? Number.POSITIVE_INFINITY;

        prevNum = currNum;
        currNum = Math.min(num1, num2);

        if (num1 < num2 || (nums1 === nums2 && k === nums1.length)) {
            j++;
        } else {
            k++;
        }
    }

    return totalLen % 2 === 0 ? (prevNum + currNum) / 2 : currNum;
};

// @lc code=end
