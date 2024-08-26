
// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. 
// The list should be made by splicing together the nodes of
//  the first two lists.

// Return the head of the merged linked list.

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    const merged = new ListNode(0);
    let curr = merged;

    while(list1 && list2){
        if(list1.val <= list2.val){
            curr.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else {
            curr.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        curr = curr.next;
    }

    while(list1) { 
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
        curr = curr.next;
    }
    while(list2) { 
        curr.next = new ListNode(list2.val);
        list2 = list2.next;
        curr = curr.next;
    }
    return merged.next;
};

// const list1 = new ListNode( 1, new ListNode(2 , new ListNode(4)));
// const list2 = new ListNode( 1, new ListNode(3 , new ListNode(4)));

const list1 = new ListNode( -9, new ListNode(3));
const list2 = new ListNode( 5, new ListNode(7));
printList(mergeTwoLists(list1,list2));


//Print List
function printList(head, ...arr){
    let res = '';
    while(head){
        res += head.val + ' ';
        head = head.next;
    }
    console.log(...arr ,res);
}

