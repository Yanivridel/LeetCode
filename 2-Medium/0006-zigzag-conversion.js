
// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a
//  zigzag pattern on a given number of rows like this:
//   (you may want to display this pattern in a fixed font
//      for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this
//  conversion given a number of rows

var convert = function(s, numRows) {
    const mat = Array(numRows).fill().map(() => Array(s.length).fill(0));
    let j = 0;
    let i = 0;
    let k = 0;
    while (k < s.length) {
        for(let i=0;i< numRows ; i++) mat[i][j] = s[k++];
        for(let i=numRows-2; i > 0; i--) mat[i][++j] = s[k++];
        j++
    }
    console.log(mat);
    
    let res = "";
    for(i=0;i<mat.length;i++)
        for(j=0;j<mat[i].length;j++)
            if(mat[i][j]) res += mat[i][j]
    return res;
};

// let s = "PAYPALISHIRING"; //PAHNAPLSIIGYIR
// let numRows = 3;

let s = "PAYPALISHIRING"; // PINALSIGYAHRPI
let numRows = 4;

console.log(convert(s,numRows));



/* HIGH MEMORY & RUNTIME USING MATRIX */
/*
var convert = function(s, numRows) {
    const mat = Array(numRows).fill().map(() => Array(s.length).fill(0));
    let j = 0;
    let i = 0;
    let k = 0;
    while (k < s.length) {
        for(let i=0;i< numRows ; i++) mat[i][j] = s[k++];
        for(let i=numRows-2; i > 0; i--) mat[i][++j] = s[k++];
        j++
    }
    console.log(mat);
    
    let res = "";
    for(i=0;i<mat.length;i++)
        for(j=0;j<mat[i].length;j++)
            if(mat[i][j]) res += mat[i][j]
    return res;
};
*/