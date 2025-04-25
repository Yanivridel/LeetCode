// Given an integer k, return the minimum number of Fibonacci 
// numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.

// The Fibonacci numbers are defined as:

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 for n > 2.
// It is guaranteed that for the given constraints we can always find 
// such Fibonacci numbers that sum up to k.

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const fibs = [1,1];
    let len = fibs.length;
    let res = 0;

    while(fibs[len-1] + fibs[len-2] <= k){
        fibs.push(fibs[len-1] + fibs[len-2]);
        len = fibs.length;
    }
    console.log(fibs)

    let idx = fibs.length - 1;
    while(k > 0 && idx > 1) {
        if(fibs[idx] <= k) {
            k -= fibs[idx];
            res++;
        }
        idx--;
    }

    return res  + k;
};

let k=5;
console.log(findMinFibonacciNumbers(k));