// Created by mettli at 2023/10/10 08:39
// leetgo: 1.3.8
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/*
102. Binary Tree Level Order Traversal (Medium)
Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e.,
from left to right, level by level).

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**Example 2:**

```
Input: root = [1]
Output: [[1]]
```

**Example 3:**

```
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

*/

// @lc code=begin

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }

    const nodes = [root];
    const values = [];

    while(nodes.length) {
        const len = nodes.length;
        const currentLevelValue = [];

        for(let i = 0; i < len; i++) {
            const node = nodes.shift();
            currentLevelValue.push(node.val);
            if(node.left) nodes.push(node.left);
            if(node.right) nodes.push(node.right);
        }

        if(currentLevelValue.length) {
            values.push(currentLevelValue);
        }
    }

    return values;
};

// @lc code=end
