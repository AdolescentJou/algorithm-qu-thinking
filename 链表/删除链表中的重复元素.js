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
  var nums = [];
  var currentNode = head;
  var preNode = null;
  while (currentNode) {
    if (nums.includes(currentNode.val)) {
      if (currentNode.next) {
        preNode.next = currentNode.next;
      } else {
        preNode.next = null;
      }
      currentNode = currentNode.next;
    } else {
      nums.push(currentNode.val);
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
var head = creatList([1, 1, 2, 3, 3]);
console.log(deleteDuplicates(head));
