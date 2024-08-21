
// 275. H-Index II
// Given an array of integers citations where citations[i]
//  is the number of citations a researcher received for their
//   ith paper and citations is sorted in ascending order,
//    return the researcher's h-index.

// According to the definition of h-index on Wikipedia:
//  The h-index is defined as the maximum value of h such that
//   the given researcher has published at least h papers that
//    have each been cited at least h times.

// You must write an algorithm that runs in logarithmic time.

var hIndex = function(citations) {
    let left = 0, right = citations.length - 1;
    const len = citations.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (citations[mid] >= len - mid) {
            right = mid - 1; // Move left
        } else {
            left = mid + 1; // Move right
        }
    }
    return len-left;
};

// let citations = [0,1,3,5,6];
// let citations = [1,1,3];
let citations = [0,1,1,2,2,3,4,4,4,6,7,7,8,10,23,31,55];
// let citations = [11,15];
// let citations = [0,0,4,4];
// let citations = [0];
// let citations = [0,1];
// let citations = [0,0,0];
// let citations = [2,4,7,7,7];

console.log(hIndex(citations));



/* FOR DESC ORDER:
while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(mid);
        
        if(mid === citations.length-1) return citations.length;
        if (citations[mid] >= mid && citations[mid+1] < mid+1) {
            return mid+1;
        } else if (citations[mid] <= mid) {
            right = mid - 1; // Move left
        } else {
            left = mid + 1; // Move right
        }
    }
*/