
// 290. Word Pattern
// Given a pattern and a string s,
//  find if s follows the same pattern.

// Here follow means a full match, 
// such that there is a bijection between a letter in 
// pattern and a non-empty word in s.

var wordPattern = function(pattern, s) {
    const map = new Map();
    let i = 0;
    s = s.split(" ");
    
    for(i=0; i < pattern.length; i++){
        if(!map.has(pattern[i])){
            if(Array.from(map.values()).includes(s[i]) || !s[i]) return false;
            map.set(pattern[i], s[i]);
        }
        else
            if(s[i] !== map.get(pattern[i])) return false
    }
    
    return s[i] === undefined ? true:false;
};


const pattern = "he", s = "unit";
// const pattern = "abba", s = "dog dog dog dog";
// const pattern = "abba", s = "dog dog dog dog";

console.log(wordPattern(pattern,s));
