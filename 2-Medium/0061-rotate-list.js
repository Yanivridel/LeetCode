
// 61. Rotate List
// Given the head of a linked list,
//  rotate the list to the right by k places.

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var rotateRight = function(head, k) {
    if(!head) return null
    let len = 1, curr = head, prev;
    //Get length
    while(curr.next) { len++; curr = curr.next;}
    k = len - k%len;
    if(k === len) return head;
    curr.next = head;
    len = 0, curr = head;
    while(curr && k-- !== 0){
        prev = curr;
        curr = curr.next;
    }
    prev.next = null;
    return curr;
};


const head = new ListNode( 1, new ListNode(2 , new ListNode(3 , new ListNode( 4,new ListNode(5)))));
const k = 3;
printList(rotateRight(head,k));


//Print List
function printList(head, ...arr){
    let res = '';
    while(head){
        res += head.val + ' ';
        head = head.next;
    }
    console.log(...arr ,res);
}


