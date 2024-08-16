// 9. Palindrome Number
//Given an integer x, return true if x is a 
//palindrome, and false otherwise.

var isPalindrome = function(x) {
    if(x<0) return false;
    x = x.toString();
    let i = 0, j=x.length-1;
    while(i<j){
        if(x[i++] !== x[j--]) return false
    }
   return true;
};

console.log(isPalindrome(12421));

