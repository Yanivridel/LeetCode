
// 202. Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the 
// sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {
    const map = new Map();
    let sum = 0;
    n = n.toString().split("");
    
    do {
        sum = n.reduce((total, item) => {
            return total += Math.pow(parseInt(item),2);
        }, 0);
        // console.log(map);
        
        if(map.has(sum)) return false;
        map.set(sum);
        n = sum.toString().split("");
    } while (sum !== 1);

    return true;
};

let n = 19;
console.log(isHappy(n));
