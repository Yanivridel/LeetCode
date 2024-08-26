
// 141. Linked List Cycle
// Given head, the head of a linked list,
//  determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some 
// node in the list that can be reached again by continuously
//  following the next pointer. Internally, pos is used to denote
//   the index of the node that tail's next pointer is connected to.
//    Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise,
//  return false.

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var hasCycle = function(head) {
    if(!head) return false;
    let curr1 = head, curr2 = head.next;

    while(curr1 && curr2){
        if(curr1 === curr2)
            return true;
        curr1 = curr1.next;
        curr2 = curr2?.next?.next;
    }
    return false;
};

const node1 = new ListNode(1), node2 = new ListNode(2),
            node3 = new ListNode(3), node4 = new ListNode(4);;

node1.next = node2; node2.next = node3; node3.next = node4;
node4.next = node2;
console.log(hasCycle(node1));


//Print List
function printList(head, ...arr){
    let res = '';
    while(head){
        res += head.val + ' ';
        head = head.next;
    }
    console.log(...arr ,res);
}
