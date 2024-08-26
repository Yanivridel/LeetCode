
// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in 
// s can be replaced to get t.

// All occurrences of a character must be replaced with another 
// character while preserving the order of characters. 
//  two characters may map to the same character, 
//  but a character may map to itself.

var isIsomorphic = function(s, t) {
    const map = new Map();
    for(let i=0; i < s.length; i++){
        if(!map.has(s[i])){
            if(Array.from(map.values()).includes(t[i])) return false;
            map.set(s[i], t[i]);
        }
        else
            if(t[i] !== map.get(s[i])) return false
    }
    return true;
};

// const s = "egg", t = "add";
const s = "badc", t = "baba";
console.log(isIsomorphic(s,t));
