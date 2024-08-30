
// 222. Count Complete Tree Nodes
// Given the root of a complete binary tree, 
// return the number of the nodes in the tree.

// According to Wikipedia, every level, 
// except possibly the last, is completely 
// filled in a complete binary tree, and all 
// nodes in the last level are as far left as 
// possible. It can have between 1 and 2h nodes
//  inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

import { tree } from '../0-Collections/js-collections.js';

var countNodes = function(root) {
    if(!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};


const root = new tree.TreeNode(1, new tree.TreeNode(2), new tree.TreeNode(3));
console.log(countNodes(root));