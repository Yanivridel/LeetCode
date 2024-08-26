
// 66. Plus One
// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least 
// significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    let carry = 1;
    for(let i= digits.length -1; i >= 0 && carry; i--){
        digits[i] += carry;
        if(digits[i] === 10)
            digits[i] = 0;
        else
            carry = 0;
    }
    if(carry) digits.unshift(1);
    return digits;
};

const digits = [1,2,3];
console.log(plusOne(digits).join(""));
