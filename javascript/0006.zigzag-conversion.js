// Created by Bob at 2023/05/06 16:08
// https://leetcode.com/problems/zigzag-conversion/


/*
6. Zigzag Conversion (Medium)

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this:
(you may want to display this pattern in a fixed font for better legibility)
```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: `"PAHNAPLSIIGYIR"`
Write the code that will take a string and make this conversion given a number of rows:
```
string convert(string s, int numRows);
```
**Example 1:**
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```
**Example 2:**
```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```
**Example 3:**
```
Input: s = "A", numRows = 1
Output: "A"
```
**Constraints:**
- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`
*/


// @lc code=begin

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }

    let ans = '';

    for(let row = 0; row < numRows; row++) {
        let step1 = 2 * numRows - 2 - row * 2;
        let step2 = row * 2;
        // 避免出现 step 是 0 的情况
        let nextStep = step1 || step2;
        let point = row;

        while(point < s.length) {
            ans += s[point];
            point += nextStep;
            // 避免出现 step 是 0 的情况
            nextStep = nextStep === step1 ? (step2 || step1) : (step1 || step2);
        }
    }

    return ans;
};

// @lc code=end

