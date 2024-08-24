
// 101. Symmetric Tree
// Given the root of a binary tree, check whether 
// it is a mirror of itself (i.e., symmetric around its center).


 //Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var isSymmetric = function(root) {
    if (!root) return true;
    return isMirror(root.left,root.right);
};

function isMirror(left,right){
    if(!left && !right) return true;
    if(!left || !right) return false;
    return  left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
}


const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)));

console.log(isSymmetric(root));


// Pre Orders
/*
var isSymmetric = function(root) {
    let leftTree = [], rightTree = [];
    preOrderLeft(root.left,leftTree);
    preOrderRight(root.right,rightTree);
    
    console.log(leftTree,rightTree);
    

    if(leftTree.length !== rightTree.length) return false;
    for(let i=0; i < leftTree.length; i++){
        if(leftTree[i] !== rightTree[i]) return false;
    }
    return true;
};
function preOrderLeft(head, arr) {
    if (!head) {
        arr.push(null);
        return;
    }
    arr.push(head.val);
    preOrderLeft(head.left, arr);
    preOrderLeft(head.right, arr);
}
function preOrderRight(head, arr) {
    if (!head) {
        arr.push(null);
        return;
    }
    arr.push(head.val);
    preOrderRight(head.right, arr);
    preOrderRight(head.left, arr);
}
*/
