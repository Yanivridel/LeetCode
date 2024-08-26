
// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k,
//  return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order,
//  not the kth distinct element.

// Can you solve it without sorting?


// Min heap solution O(n*log(k))
var findKthLargest = function(nums, k){
    let heap = new MinHeap();
    for (let i = 0; i < k; i++) 
        heap.add(nums[i]);

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap.peek()) {
            heap.remove();
            heap.add(nums[i]);
        }
    }
    return heap.peek();
}

// Min Heap for Numbers
class MinHeap {
    constructor() {
        this.heap = [];
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
     
    // Removing an element will remove the
    // top element with highest priority then
    // heapifyDown will be called 
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
 
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
 
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
 
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
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


// Recursive QuickSelect solution O(n), worst case O(n^2)
var findKthLargestQuickSelect = function(nums, k) {

    function swap(arr, left, right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    function partition(arr, left, right) {
        let randomIdx = randomPivot(left,right)
        swap(arr,right,randomIdx);
        let pivot = arr[right];
        let i = left;
    
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                swap(arr, i, j);
                i++;
            }
        }
        
        swap(arr, i, right);
        return i;
    }

    function quickSelect(arr, k, left = 0, right = arr.length - 1) {
        if (left === right)
            return arr[left];
    
        let pivotIndex = partition(arr, left, right);
    
        if (k === pivotIndex)
            return arr[k];
        else if (k < pivotIndex)
            return quickSelect(arr, k, left, pivotIndex - 1);
        else
            return quickSelect(arr, k, pivotIndex + 1, right);
    }

    function randomPivot(left, right) {
        return Math.floor(Math.random() * (right - left + 1)) + left;
    }

    return quickSelect(nums,nums.length - k)
};


const nums = [3,2,3,1,2,4,5,5,6]; // [1,2,2,3,3,4,5,5,6] len= 9
const k = 4;

console.log(findKthLargest(nums,k));
console.log(findKthLargestQuickSelect(nums,k));

