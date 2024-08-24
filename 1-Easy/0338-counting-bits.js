
// 338. Counting Bits
// Given an integer n, return an array ans of
//  length n + 1 such that for each i (0 <= i <= n), 
//  ans[i] is the number of 1's in the binary representation of i.

var countBits = function(n) {
    if(n === 0) return [0];
    const res = [0,1];
    let count = 2, k=1;
    while(count <= n){
        const curr = res[k++];
        res.push(curr)
        if(++count <= n){
            res.push(curr+1);
            count++;
        }
    }
    return res;
};

console.log(countBits(16));



/*
Input: n = 16
Output: [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
6 --> 110
7 --> 111
8 --> 1000
9 --> 1001
10 --> 1010
11 --> 1011
12 --> 1100
13 --> 1101
14 --> 1110
15 --> 1111
16 --> 10000
*/