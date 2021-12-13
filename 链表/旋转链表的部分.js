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
var reverseBetween = function (head, left, right) {
  if (!head || !head.next) {
    return head;
  }
  if (left == right) {
    return head;
  }
  var currentNode = head;
  var leftNode = null;
  var leftPre = null;
  var rightNext = null;
  var pre = null;
  var count = 0;
  while (currentNode) {
    count++;
    if (count == left) {
      leftNode = currentNode;
      leftPre = pre;
    }
    if (count == right) {
      rightNode = currentNode;
      rightNext = currentNode.next;
    }
    pre = currentNode;
    currentNode = currentNode.next;
  }
  currentNode = leftNode;
  var preNode = null;
  var nextNode = null;
  count = 0;
  while (count < right - left) {
    count++;
    nextNode = currentNode.next;
    if (!preNode) {
      currentNode.next = rightNext;
    } else {
      currentNode.next = preNode;
    }
    preNode = currentNode;
    currentNode = nextNode;
  }
  currentNode.next = preNode;
  if (leftPre) {
    leftPre.next = currentNode;
  } else {
    head = currentNode;
  }
  return head;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var list = creatList([1, 2, 3, 4, 5]);
console.log(reverseBetween(list, 1, 3));
