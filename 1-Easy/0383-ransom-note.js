
// 383. Ransom Note
// Given two strings ransomNote and magazine,
//  return true if ransomNote can be constructed by 
//  using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote

var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    
    for(let i=0; i < magazine.length; i++){
        if(map.has(magazine[i]))
            map.set(magazine[i], map.get(magazine[i]) + 1);
        else
            map.set(magazine[i],1);
    }

    for(let i=0; i < ransomNote.length; i++){
        if(!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0)
            return false;
        else
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }

    return true;
};


const ransomNote = "aa";
const magazine = "aab";
console.log(canConstruct(ransomNote,magazine));
