

// 58. Length of Last Word
// Given a string s consisting of words and spaces,
// return the length of the last word in the string.
// A word is a maximal substring
// consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    s= s.trimEnd();
    return s.length-1 - s.lastIndexOf(" ");
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
