
// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack,
//  return the index of the first occurrence of needle
//   in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

let haystack= "leetcode";
let needle = "leeto";
console.log(strStr(haystack, needle));
