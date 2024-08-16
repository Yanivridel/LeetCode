
// 1492. The kth Factor of n
// You are given two positive integers n and k.
//  A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, 
// return the kth factor in this list or return -1 if n has less than k factors.

var kthFactor = function(n, k) {
    let factors = [];
    let sqrt = Math.floor(Math.sqrt(n));
    for(let i=sqrt; i > 0; i--){
        if(n % i === 0) {
            factors.unshift(i);
            if(i*i !== n) factors.push(n/i);
        }
    }
    return factors[k-1] ? factors[k-1]: -1;
};

// [1, 2, 3, 4, 6, 12]

let n=12;
let k=3;
console.log(kthFactor(n,k));
