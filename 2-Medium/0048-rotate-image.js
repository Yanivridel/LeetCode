
// 48. Rotate Image
// You are given an n x n 2D matrix representing an image,
// rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have
// to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    const n = matrix.length;
    transpose(matrix, n);
    
    for(let col=0; col<n/2; col++){
        for(let row=0; row<n; row++){
            swap(matrix, row, col, row, n-1-col);
        }
    }
};

function transpose(matrix, n) {
    for(let i=1; i < n; i++){
        for(let j=0; j < i; j++){
            swap(matrix, i, j, j, i);
        }
    }
}

function swap(matrix, row1, col1, row2, col2){
    const temp = matrix[row1][col1];
    matrix[row1][col1] = matrix[row2][col2];
    matrix[row2][col2] = temp;
}

// const mat = [[1,2,3],[4,5,6],[7,8,9]];
const mat = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(mat)
console.log(mat);
