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
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  var currentNode = null;
  if (list1.val > list2.val) {
    currentNode = list2;
    list2 = list2.next;
  } else {
    currentNode = list1;
    list1 = list1.next;
  }
  var h = currentNode;
  while (list1 || list2) {
    if (!list1) {
      currentNode.next = list2;
      break;
    }
    if (!list2) {
      currentNode.next = list1;
      break;
    }
    if (list1.val > list2.val) {
      currentNode.next = list2;
      currentNode = currentNode.next;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      currentNode = currentNode.next;
      list1 = list1.next;
    }
  }
  return h;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var head1 = creatList([1, 2, 3]);
var head2 = creatList([1, 2, 4]);
mergeTwoLists(head1, head2);
