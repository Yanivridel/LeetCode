
// 100. Same Tree
// Given the roots of two binary trees p and q,
//  write a function to check if they are the same or not.

// Two binary trees are considered the same if 
// they are structurally identical, and the nodes have the same value.


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined  ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
    let pTree = [], qTree = [];
    inOrder(p,pTree);
    inOrder(q,qTree);
    
    if(pTree.length !== qTree.length) return false;
    for(let i=0; i < pTree.length; i++){
        if(pTree[i] !== qTree[i]) return false;
    }
    return true;
};

function inOrder(head,arr){
    if (!head) {
        arr.push(null);
        return;
    }
    inOrder(head.left, arr);
    arr.push(head.val);
    inOrder(head.right, arr);
}


// let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

let p = new TreeNode(1, null, new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p,q));
