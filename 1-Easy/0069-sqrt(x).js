
// 69. Sqrt(x)
// Given a non-negative integer x,
//  return the square root of x rounded down to the nearest integer.
//   The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

var mySqrt = function(x) {
    let i = 1;
    while(i*i < x){ i++ }
    return i*i === x ? i: i-1;
};

let x = 8;
console.log(mySqrt(x));
