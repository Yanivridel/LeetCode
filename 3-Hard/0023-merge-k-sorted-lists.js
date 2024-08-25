
// 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, 
// each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list 
// and return it

// Definition for singly-linked list:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// HEAP OF LIST-NODES !!
class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    // Helper Methods
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // Functions to create Min Heap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        this.size--;
        return item;
    }

    insert(item) {
        if(!item) return;
        this.heap.push(item);
        this.heapifyUp();
        this.size++;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).val > this.heap[index].val) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).val < this.leftChild(index).val) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].val < this.heap[smallerChildIndex].val) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    printHeap() {
        var heap =` ${this.heap[0]} `
        for(var i = 1; i<this.heap.length;i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
    }
}

var mergeKLists = function(lists) {
    const heap = new MinHeap();
    const res = [];
    lists.forEach(element => { heap.insert(element) });

    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (heap.size !== 0) {
        const curr = heap.extractMin();
        const temp = new ListNode(curr.val);
        current.next = temp;
        current = current.next;
        if(curr.next) heap.insert(curr.next);
    }

    return dummyHead.next;
};

const lists =   [new ListNode(1, new ListNode(4, new ListNode(5))),
                new ListNode(1, new ListNode(3, new ListNode(4))),
                new ListNode(2, new ListNode(6))];
console.log(mergeKLists(lists));


