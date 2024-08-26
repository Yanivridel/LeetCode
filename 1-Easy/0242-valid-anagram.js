
// 242. Valid Anagram
// Given two strings s and t, return true if t is 
// an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging 
// the letters of a different word or phrase, typically 
// using all the original letters exactly once.

var isAnagram = function(s, t) {
    const map = new Map();
    
    for(let i=0; i < s.length; i++){
        if(map.has(s[i]))
            map.set(s[i], map.get(s[i]) + 1);
        else
            map.set(s[i],1);
    }

    for(let i=0; i < t.length; i++){
        if(!map.has(t[i]) || map.get(t[i]) === 0)
            return false;
        else
            map.set(t[i], map.get(t[i]) - 1);
    }

    return Array.from(map.values()).every(item => item === 0);
};

const s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));
