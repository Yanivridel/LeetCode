
// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix,
//  if an element is 0, set its entire row and column to 0's.

// You must do it in place.

var setZeroes = function(matrix) {
    const n = matrix.length, m = matrix[0].length;
    const column = [], rows = [];
    for(let i=0; i<n; i++)
        for(let j=0; j<m; j++)
            if(matrix[i][j] === 0){ 
                rows.push(i);
                column.push(j);
            }

    for(let i=0; i<n; i++)
        for(let j=0; j<m; j++)
            if(rows.includes(i) || column.includes(j)) 
                matrix[i][j] = 0;
};

// const mat = [[1,1,1],[1,0,1],[1,1,1]];
// const mat = matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
const mat =[[1, 2, 3, 4],
            [5, 0, 7, 8],
            [0,10,11,12],
            [13,14,15,0]];

setZeroes(mat);
console.log(mat);
