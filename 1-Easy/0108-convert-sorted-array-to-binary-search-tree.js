
//108. Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are
//  sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

import { tree } from './../0-Collections/js-collections.js'

var sortedArrayToBST = function(nums) {
    return arrToBstRec(nums,0,nums.length-1);
};

function arrToBstRec(nums,left,right){
    if(left <= right){
        const mid =Math.floor((right-left)/2 + left);
        let temp = new tree.TreeNode(nums[mid]);
        temp.left = arrToBstRec(nums,left,mid-1)
        temp.right = arrToBstRec(nums,mid+1,right)
        return temp;
    }
    return null;
}

const nums = [-10,-3,0,5,9];
let arr = [];
const root = sortedArrayToBST(nums);
// console.log(root);

tree.preOrder(root, arr);
console.log(arr);
arr = [];
tree.inOrder(root, arr);
console.log(arr);
arr = [];
tree.postOrder(root, arr);
console.log(arr);

