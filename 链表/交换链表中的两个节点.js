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
  var rightNode = null;
  var leftPre = null;
  var leftNext = null;
  var rightPre = null;
  var rightNext = null;
  var pre = null;
  var count = 0;
  while (currentNode) {
    count++;
    if (count == left) {
      leftNode = currentNode;
      leftPre = pre;
      leftNext = currentNode.next;
    }
    if (count == right) {
      rightNode = currentNode;
      rightPre = pre;
      rightNext = currentNode.next;
    }
    pre = currentNode;
    currentNode = currentNode.next;
  }
  if (right - left == 1) {
    if (leftPre) {
      leftPre.next = rightNode;
    } else {
      head = rightNode;
    }
    rightNode.next = leftNode;
    leftNode.next = rightNext;
  } else {
    if (leftPre) {
      leftPre.next = rightNode;
    } else {
      head = rightNode;
    }
    rightNode.next = leftNext;
    rightPre.next = leftNode;
    leftNode.next = rightNext;
  }
  return head;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var list = creatList([1, 2, 3, 4]);
console.log(reverseBetween(list, 1, 4));
