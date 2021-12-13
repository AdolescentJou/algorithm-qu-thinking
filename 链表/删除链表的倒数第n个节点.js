/*
			给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
			输入：head = [1,2,3,4,5], n = 2
			输出：[1,2,3,5]

			思路: 先逆序，然后删除，再反序
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
var removeNthFromEnd = function (head, n) {
  //链表逆序
  var currentNode = head;
  var preNode = null;
  while (currentNode.next) {
    var nextNode = currentNode.next;
    currentNode.next = preNode === null ? null : preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }
  currentNode.next = preNode;

  console.log(currentNode);

  var count = 0;
  var preNode = null;
  var h = currentNode;
  //删除元素
  while (currentNode) {
    count++;
    console.log(count, "---------", currentNode.val);
    if (count == n) {
      if (preNode) {
        preNode.next = currentNode.next;
      } else {
        h = currentNode.next;
      }
      break;
    }
    preNode = currentNode;
    currentNode = currentNode.next;
  }
  currentNode = h;
  preNode = null;
  // //链表逆序
  while (currentNode.next) {
    var nextNode = currentNode.next;
    currentNode.next = preNode === null ? null : preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }
  currentNode.next = preNode;
  return currentNode;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var head = creatList([1, 2]);
console.log(removeNthFromEnd(head, 2));
