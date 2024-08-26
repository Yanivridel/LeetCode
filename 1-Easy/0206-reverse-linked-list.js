
// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var reverseList = function(head) {
    if(!head) return null;
    let prev = null, curr = head, target= head.next;
    while(curr) {
        curr.next = prev;
        prev = curr;
        curr=target;
        target = target?.next;
    }
    return prev;
};

const head = new ListNode( 1, new ListNode(2 , new ListNode(3 , new ListNode( 4,new ListNode(5) ))));
console.log(reverseList(head));
