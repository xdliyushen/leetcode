// Created by Bob at 2023/04/24 11:05
// https://leetcode.com/problems/longest-palindromic-substring/


/*
5. Longest Palindromic Substring (Medium)

Given a string `s`, return the longestpalindromicsubstring in `s`.
**Example 1:**
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```
**Example 2:**
```
Input: s = "cbbd"
Output: "bb"
```
**Constraints:**
- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.
*/


// @lc code=begin

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let palindromeStr = '';

    const longestPalindromeCore = (s, prev, next) => {
        while(prev >= 0 && next < s.length && s[prev] === s[next]) {
            prev--;
            next++;
        }

        return s.slice(Math.max(prev + 1, 0), next);
    }

    for(let i = 0; i < s.length; i++) {
        let substr = '';

        if(s[i] === s[i + 1]) {
            let substr1 = longestPalindromeCore(s, i - 1, i + 1);
            let substr2 = longestPalindromeCore(s, i - 1, i + 2);
            substr = substr1.length > substr2.length ? substr1 : substr2;
        } else {
            substr = longestPalindromeCore(s, i - 1, i + 1);
        }

        palindromeStr = substr.length > palindromeStr.length ? substr : palindromeStr;

        if(palindromeStr === s.length) {
            return s;
        }
    };

    return palindromeStr;
};

// @lc code=end

