
// 274. H-Index
// Given an array of integers citations where citations[i]
//  is the number of citations a researcher received for their ith paper,
//   return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is
//  defined as the maximum value of h such that the given researcher has published
//   at least h papers that have each been cited at least h times.

var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => b - a);
    let max = 0;
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] >= i+1) max = i+1;
        else break;
    }
    return max;
};

let citations = [3,0,6,1,5];
// let citations = [1,3,1];
// let citations = [1,4,8,0,7,4,2,1,4,6,7,10,2,3,55,31,23];
// let citations = [11,15];
// let citations = [4,4,0,0];


console.log(hIndex(citations));

// [6,5,3,1,0];
// [3,1,1]
// [55, 31, 23, 10, 8, 7, 7, 6, 4, 4, 4, 3, 2, 2, 1, 1, 0]
// [15,11]
