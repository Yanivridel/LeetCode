
// 2405. Optimal Partition of String
// Given a string s, partition the string into one or 
//  substrings such that the characters in each substring 
//  are unique. That is, no letter appears in a 
//  single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.

var partitionString = function(s) {
    let sum= 0;
    const hashMap = new Map();
    for(let i=0; i < s.length; i++){
        if(hashMap.has(s[i])){
            hashMap.clear();
            sum += 1;
        }
        hashMap.set(s[i]);
    }
    if(hashMap.size !== 0) sum+=1;
    return sum;
};

const s = "abacaba";
console.log(partitionString(s));


// Extra: Get the actual strings:
var getPartitionString = function(s) {
    const res=[];
    const hashMap = new Map();
    let curr = '';
    for(let i=0; i < s.length; i++){
        if(hashMap.has(s[i])){
            hashMap.clear();
            res.push(curr);
            curr = '';
        }
        curr += s[i];
        hashMap.set(s[i]);
    }
    if(curr) res.push(curr);
    return res;
};