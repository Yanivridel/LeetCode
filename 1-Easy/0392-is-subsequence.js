
// 392. Is Subsequence
// Given two strings s and t, return true if s is
// a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that
// is formed from the original string by deleting 
// some (can be none) of the characters without 
// disturbing the relative positions of the remaining
// characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


// Dynamic Programming
var isSubsequence = function(s, t) {
    let lastRow = [], currRow;
    const sLen = s.length, tLen = t.length;
    if(sLen === 0) return true;
    if(tLen === 0) return false;
    //Fill first row
    for(let i=0; i < tLen; i++){
        if((i !== 0 && lastRow[i-1]) || (s[0] === t[i]))
            lastRow.push(true);
        else lastRow.push(false);
    }
    currRow = lastRow; 
    //Fill rest
    for(let i=1; i < sLen; i++){
        currRow = [];
        for(let j=0; j < tLen; j++){
            if(i > j)
                currRow.push(false);
            else if(s[i] === t[j])
                currRow.push(lastRow[j-1]);
            else
                currRow.push(currRow[j-1]);
        }
        lastRow = currRow;
    }
    return currRow[tLen-1];
};

// Recursion
function isSubsequenceRec(s,t){
    const sLen = s.length-1, tLen = t.length-1;
    if(sLen === -1) return true;
    else if (tLen === -1) return false;
    if(s[sLen] === t[tLen])
        return isSubsequenceRec(s.slice(0,sLen),t.slice(0,tLen));
    else return isSubsequenceRec(s,t.slice(0,tLen));
}

//Two Pointers
var isSubsequenceTwoPointers = function(s, t) {
    let i=0, j=0;
    while(i<s.length && j<t.length){
        if(s[i]===t[j])
            i++;
        j++;
    }
    return i===s.length;
};

let s = "abgdc", t = "ahbgdc";
// let s = "b", t = "abc"
console.log(isSubsequenceTwoPointers(s,t));


/*
\ a h b g d c
a
b
g
d
c


*/
