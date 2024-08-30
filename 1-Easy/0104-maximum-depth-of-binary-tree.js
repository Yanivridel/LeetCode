
// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, 
// return its maximum depth.

// A binary tree's maximum depth is the 
// number of nodes along the longest path 
// from the root node down to the farthest leaf node.
import { tree } from './../0-Collections/js-collections.js'

var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const root = new tree.TreeNode(1,null, new tree.TreeNode(2));
console.log(maxDepth(root));
