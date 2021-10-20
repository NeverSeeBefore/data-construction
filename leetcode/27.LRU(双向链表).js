/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start

var LinkNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.head = new LinkNode(null, null);
  this.tail = new LinkNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }
  var node = this.cache.get(key);
  this._removeNode(node);
  this._addToHead(node);
  return node.value;
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果页面已加载，更新值
  var node;
  if (this.cache.has(key)) {
    node = this.cache.get(key);
    this._removeNode(node);
    node.value = value;
  }
  // 如果到达上限，最后一个删除, 重新加载内容，增加到头部
  else if (this.cache.size === this.capacity) {
    node = this.tail.prev;
    this._removeNode(node);
    node.key = key;
    node.value = value;
    // 如果没有达到最大页面数，增加节点
  } else {
    node = new LinkNode(key, value);
  }

  this._addToHead(node);
};

/**
 * 将指定节点从链表中移除
 * @param {LinkNode} node
 * @returns 被移除的节点
 */
LRUCache.prototype._removeNode = function (node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.prev = null;
  node.next = null;
  this.cache.delete(node.key);
  return node;
};

/**
 * 将指定节点添加到首位
 * @param {LinkNode} node
 */
LRUCache.prototype._addToHead = function (node) {
  const temp = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = temp;
  temp.prev = node;
  this.cache.set(node.key, node);
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
