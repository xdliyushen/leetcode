// Created by Bob at 2023/04/30 22:41
// https://leetcode.com/problems/lru-cache/


/*
146. LRU Cache (Medium)

Design a data structure that follows the constraints of a **[Least Recently Used (LRU)
cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)**.
Implement the `LRUCache` class:
- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add
the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation,
**evict** the least recently used key.
The functions `get` and `put` must each run in `O(1)` average time complexity.
**Example 1:**
```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```
**Constraints:**
- `1 <= capacity <= 3000`
- `0 <= key <= 10⁴`
- `0 <= value <= 10⁵`
- At most `2 * 10⁵` calls will be made to `get` and `put`.
*/


// @lc code=begin

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // head 和 tail 不存储数据，只是为了方便操作
    // 最远访问的数据
    this.head = {};
    // 最近访问的数据
    this.tail = {};

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if(this.map.has(key)) {
        const node = this.map.get(key);

        // 将 node 从原来的位置删除
        node.prev.next = node.next;
        node.next.prev = node.prev;
        
        // 更新链表访问顺序
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev = node;

        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 这里是一个小 tip，已经存在的 key 需要更新 value，同时更改链表这个操作在 get 方法中已经做过了
    if(this.get(key) !== -1) {
        this.tail.prev.value = value;
    } else {
        // 删除最远访问的元素
        if(this.map.size === this.capacity) {
            const key = this.head.next.key;
            this.head.next = this.head.next.next;
            this.head.next.prev = this.head;
            this.map.delete(key);
        }

        // 插入新元素
        const node = { value, key };
        this.map.set(key, node);
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }
};

// @lc code=end

