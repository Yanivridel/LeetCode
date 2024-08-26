"use strict"
// 92. Reverse Linked List II
// Given the head of a singly linked list and two integer
//  left and right where left <= right, reverse the nodes of
//   the list from position left to position right,
//  and return the reversed list.

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseBetween = function(head, left, right) {
    let curr = head;
    let count = 1;
    while(curr && (count++) < left) { curr = curr.next; }
    console.log(count);
    
    let temp = count === 2 ? curr : curr?.next;
    printList(curr, "curr:");
    printList(temp, "temp:");
    if(temp) [curr.next, temp.next] = reverseKNodes(temp, right-left + 1);
    return head;
};

var reverseKNodes = function(head, k) {
    let prev = null, curr = head, target= head?.next;
    let count = 0;
    while(curr && count++ < k) {
        curr.next = prev;
        prev = curr;
        curr = target;
        target = target?.next;
    }

    console.log(curr);
    
    return [prev,curr];
};



const head = new ListNode( 1, new ListNode(2 , new ListNode(3 , new ListNode( 4,new ListNode(5)))));
// const head = new ListNode(5);
// printList(reverseBetween(head,1,5), "Result:");
printList(reverseKNodes(head,5)[0]);
printList(reverseKNodes(head.next,1)[1]);


//Print List
function printList(head, ...arr){
    let res = '';
    while(head){
        res += head.val + ' ';
        head = head.next;
    }
    console.log(...arr ,res);
}
