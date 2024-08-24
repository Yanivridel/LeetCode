
// 119. Pascal's Triangle II
// Given an integer rowIndex,
// return the rowIndexth (0-indexed)
// row of the Pascal's triangle.

// In Pascal's triangle, each number 
// is the sum of the two numbers directly

var getRow = function(rowIndex) {
    let res = [1];
    for(let i=0; i < rowIndex; i++){
        const curr = [1];
        for(let j=0; j < res.length - 1; j++){
            curr.push(res[j] + res[j+1]);
        }
        curr.push(1);
        res = curr;
    }
    return res;
};


// [[1],[1,1], [1,2,1], [1,3,3,1]]

console.log(getRow(3));