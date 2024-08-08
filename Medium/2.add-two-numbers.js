
// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



 // Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// let l1 = new ListNode(2,new ListNode(4,new ListNode(3)));
// let l2 = new ListNode(5,new ListNode(6,new ListNode(4)));

let l1 = new ListNode(5,new ListNode(6));
let l2 = new ListNode(5,new ListNode(4,new ListNode(9)));

printList(l1);
printList(l2);
let res = addTwoNumbers(l1,l2);
printList(res)


function addTwoNumbers(l1, l2) {
  const head = new ListNode();
    let remainder = 0;
    let cur = head;
    while (l1 || l2 || remainder) {
        const s = (l1?.val || 0) + (l2?.val || 0) + remainder;
        remainder = Math.floor(s / 10);
        cur.next = new ListNode(s % 10);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return head.next;
};

function printList(list){
  console.log("LIST:");
  let current = list;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}