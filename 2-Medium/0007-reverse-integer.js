
// 7. Reverse Integer
// Given a signed 32-bit integer x,
//  return x with its digits reversed.
//   If reversing x causes the value to go outside
//    the signed 32-bit integer range [-231, 231 - 1],
//     then return 0.

// Assume the environment does not allow you to store
//  64-bit integers (signed or unsigned).

var reverse = function(x) {
    const isNeg = x<0 ? true:false;
    if(isNeg) x = -x;
    x = x.toString();   
    let res = "";
    for(let i=0;i<x.length;i++){
        res = x[i] + res;
    }
    res = parseInt(res);
    if(res >= Math.pow(2,31)-1) return 0;
    return isNeg? -res:res;
};

console.log(reverse(1563847412)); // 0
console.log(reverse(-3847412)); // -2147483
console.log(reverse(7412)); // 2147

