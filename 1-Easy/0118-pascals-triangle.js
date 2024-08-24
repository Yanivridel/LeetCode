
// 118. Pascal's Triangle
// Given an integer numRows,
//  return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum 
// of the two numbers directly above it as shown:

// Dynamic Programming
var generate = function(numRows) {
    const res = [[1]];
    for(let i=1; i < numRows; i++){
        const curr = [1];
        for(let j=0; j < res[i-1].length - 1; j++){
            curr.push(res[i-1][j] + res[i-1][j+1]);
        }
        curr.push(1);
        res.push(curr);
    }
    return res;
};


// [[1],[1,1], [1,2,1], [1,3,3,1]]

console.log(generate(5));
