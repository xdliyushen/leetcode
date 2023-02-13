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
// 初始版本
var reverseKGroup = function (listhead, k) {
    let i = 0;
    let prev = listhead;
    let curr = listhead.next;
    let head = listhead;
    let tail = null;
    let reversedHead = null;
    while (curr && i < k) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;

        if (i === k - 2) {
            if (!reversedHead) {
                reversedHead = prev;
            }

            if (tail) {
                tail.next = prev;
            }

            head.next = curr;
            tail = head;
            prev = head = curr;
            curr = curr && curr.next;
            i = 0;
        } else {
            i++;
        }
    }

    // reverse
    if (i !== 0) {
        while (curr !== head) {
            let next = curr;
            let prev2 = prev.next;
            curr = prev;
            prev.next = next;
            prev = prev2;
        }
    }

    return reversedHead || listhead;
};

// 题解版本
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0, head);
    // 子链表的头部和尾部节点
    let currTail = head;
    let currHead = head;
    // 子链表头部的上一个节点
    let prevTail = dummy;
    // 子链表尾部的下一个节点
    let nextHead = head;

    while(currHead) {
        for(let i = 1; i < k; i++) {
            currTail = currTail.next;
            if(!currTail) {
                return dummy.next;
            }
        }
        nextHead = currTail.next;
        
        // 翻转子链表
        let prev = currHead;
        let curr = currHead.next;
        for(let i = 1; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // 子链表重新链接
        prevTail.next = currTail;
        currHead.next = nextHead;

        prevTail = currHead;
        currHead = nextHead;
        currTail = nextHead;
    }

    return dummy.next;
}

// @lc code=end

