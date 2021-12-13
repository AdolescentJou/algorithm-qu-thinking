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
var removeElements = function (head, val) {
  var currentNode = head;
  var pre = null;
  while (currentNode) {
    if ((currentNode.val = val)) {
      if (pre) {
        pre.next = currentNode.next;
        pre = currentNode.next;
      }
      currentNode = currentNode.next;
    } else {
      pre = currentNode;
      currentNode = currentNode.next;
    }
  }
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var head = creatList([1, 2, 3]);
console.log(removeElements(head, 2));
