
// 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with 
// the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last 
// integer of the previous row.
// Given an integer target, return true if target is in 
//  or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

var searchMatrix = function(matrix, target) {
    if(!matrix) return false;
    let left = 0, right = matrix.length -1, mid;
    while(left <= right){
        mid = Math.floor((right-left)/2) + left;
        if(matrix[mid][0] === target) return true;
        else if(matrix[mid][0] < target) left = mid +1;
        else right = mid -1;
    }
    const row = matrix[mid][0] > target ? mid-1: mid; 
    if(row === -1) return false;       
    left = 0, right = matrix[0].length -1;
    while(left <= right){
        mid = Math.floor((right-left)/2) + left;
        if(matrix[row][mid] === target) return true;
        else if(matrix[row][mid] < target) left = mid +1;
        else right = mid -1;
    }
    return false;
};

// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 11;
const matrix = [[1]], target= 0;
console.log(searchMatrix(matrix,target));
