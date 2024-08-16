
// 125. Valid Palindrome
// A phrase is a palindrome if,
// after converting all uppercase letters into lowercase letters and removing
// all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    s = removeNonAlpha(s);
    let i=0,j=s.length-1;
    while(i<j){
        if(s[i++] !== s[j--]) return false
    }
    return true;
};

let s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));
let s2 = "0P";
console.log(isPalindrome(s2));

function removeNonAlpha(s){
s = s.toLowerCase();
let res = "";
for(let i=0;i<=s.length;i++){
    const charCode = s.charCodeAt(i)
    if(97 <= charCode && charCode <= 122 ||
       47 <= charCode && charCode <= 57
     )
        res += s[i];
}
return res;
}