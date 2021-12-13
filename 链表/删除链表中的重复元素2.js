/*
			存在一个按升序排列的链表，给你这个链表的头节点 head ，
			请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
		*/
var creatList = (head) => {
  var h = new ListNode();
  h.val = head[0];
  //构造链表
  for (var i = 1; i < head.length; i++) {
    var node = new ListNode();
    node.val = head[i];
    var currentNode = h;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  return h;
};
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  var currentNode = head;
  var preNode = null;
  while (currentNode) {
    if (currentNode.next && currentNode.val == currentNode.next.val) {
      while (currentNode.next && currentNode.val == currentNode.next.val) {
        currentNode = currentNode.next;
      }
      currentNode = currentNode.next;
      if (preNode) {
        preNode.next = currentNode;
      } else {
        head = currentNode;
      }
    } else {
      preNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var list = creatList([1, 1]);
