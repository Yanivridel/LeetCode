
// 112. Path Sum
// Given the root of a binary tree and an integer targetSum, 
// return true if the tree has a root-to-leaf path 
// such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.
import { tree } from './../0-Collections/js-collections.js';

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left,targetSum - root.val) || hasPathSum(root.right,targetSum - root.val);
};


const root = new tree.TreeNode(1, new tree.TreeNode(2), new tree.TreeNode(3));
const targetSum = 3;

console.log(hasPathSum(root,targetSum));
