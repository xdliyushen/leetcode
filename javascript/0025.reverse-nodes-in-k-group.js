// Created by Bob at 2023/02/09 15:10
// https://leetcode.com/problems/reverse-nodes-in-k-group/


/*
25. Reverse Nodes in k-Group (Hard)

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return the
modified list.
`k` is a positive integer and is less than or equal to the length of the linked list. If the number
of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.
**Example 1:**
![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)
```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```
**Example 2:**
![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)
```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```
**Constraints:**
- The number of nodes in the list is `n`.
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`
**Follow-up:** Can you solve the problem in `O(1)` extra memory space?
*/


// @lc code=begin

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head2, k) {
    let i = 0;
    let prev = null;
    let curr = head2;
    let head = null;
    let tail = null;
    let reversedHead = null;
    while(curr && i < k) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;

        if(i == k) {
            if(!reversedHead) {
                reversedHead = prev;
            }

            head.next = curr;
            prev = head = curr;
            curr = curr && curr.next;
            i = 0;
        }
    }

    // reverse
    if(i!==0) {
        while(curr !== head2) {
            let next = curr;
            curr = prev;
            prev.next = next;
            prev = prev.next;
        }
    }

    return reversedHead;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const createListNode = (vals) => {
    const head = new ListNode();
    let cursor = head;
    for(let v of vals) {
        cursor.next = new ListNode(v);
        cursor = cursor.next;
    }
    return head.next;
}

const printListNode = (header) => {
    const vals = [];
    let cursor = header;
    while(cursor.next) {
        vals.push(cursor.val);
        cursor = cursor.next;
    }
    console.log(vals);
    return vals;
}

printListNode(reverseKGroup(createListNode([1, 2, 3, 4, 5]), 3))

// @lc code=end

