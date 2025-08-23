// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

import { tree } from "../0-Collections/js-collections.js";

function serialize(root) {
    const arr = [];
    preOrder(root, arr);
    return arr.join(',');
}

function deserialize(data) {
    if (!data) return null;
    const vals = data.split(',');
    let i = 0;

    function build() {
        if (i >= vals.length) return null;
        if (vals[i] === "null") {
            i++;
            return null;
        }
        const node = new tree.TreeNode(Number(vals[i++]));
        node.left = build();
        node.right = build();
        return node;
    }

    return build();
}

function preOrder(root,arr){
    if (!root) {
        arr.push("null");
        return;
    }
    arr.push(root.val);
    preOrder(root.left, arr);
    preOrder(root.right, arr);
}

const root = new tree.TreeNode(1, new tree.TreeNode(2), new tree.TreeNode(3,new tree.TreeNode(4) , new tree.TreeNode(5)))
console.log(serialize(deserialize(serialize(root)))) // Output: [1,2,3,null,null,4,5,null,null]
