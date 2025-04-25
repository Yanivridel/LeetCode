// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs)) //


// Working But Bad Run Time
/*
var groupAnagrams = function(strs) {
    const anagrams = [[strs[0]]];

    for(let i=1; i<strs.length; i++) {
        let isFound = false;
        for(let j=0; j<anagrams.length && !isFound; j++) {
            if(isTwoAnagrams(strs[i],anagrams[j][0])){
                anagrams[j].push(strs[i]);
                isFound = true;
            }
        }
        if(!isFound){
            anagrams.push([strs[i]]);
        }
    }

    return anagrams;
};

function isTwoAnagrams(str1,str2) {
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    return str1 === str2;
}
*/