
// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
    const n = matrix.length, m = matrix[0].length;
    let count = 0, up = 0, left = 0, right = m-1, down = n-1;
    const res = [];
    while(count < m*n){        
        for(i = left; i<= right && count++ < n*m; i++) res.push(matrix[up][i]);
        up++;
        for(i = up; i<= down && count++ < n*m; i++) res.push(matrix[i][right]);
        right--;
        for(i = right; i>= left && count++ < n*m; i--) res.push(matrix[down][i]);
        down--;
        for(i = down; i>= up && count++ < n*m; i--) res.push(matrix[i][left]);
        left++;
    }
    return res;
};

// const mat = [[1,2,3],[4,5,6],[7,8,9]];
//[1,2,3,6,9,8,7,4,5]
const mat =[[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]];
//[1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder(mat));
