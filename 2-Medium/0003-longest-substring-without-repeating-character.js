
// 3. Longest Substring Without Repeating Characters
// Given a string s, find the
// length of the longest substring
// without repeating characters.

// Sliding Window O(N)
var longestSub = function(s) {
    let max = 0, curr = 0, start = 0, end = 0;
    const hashMap = new Map();
    
    while (end < s.length) {
        if (hashMap.has(s[end])) {
            start = Math.max(hashMap.get(s[end]) + 1, start); //Slide Window
        }
        curr = end - start + 1;
        max = Math.max(max, curr);
        hashMap.set(s[end], end);
        end++;
    }
    return max;
};

// let s = "abcabcbb";
// let s = "bbbbbb";
// let s = "dvdf";
// let s = "asjrgapa";
let s = '';

console.log(longestSub(s));

// Bad runtime N^2 none sliding window
function longestSubV2(str){
    let max= 0, curr, i, j;
    const hashMap = new Map();
    for(i=0; i < s.length; i++){
        hashMap.clear();
        curr = 0;
        for(j=i; j < s.length; j++){
            if(hashMap.has(s[j])){
                max = Math.max(curr,max);
                break;
            }
            curr += 1;
            hashMap.set(s[j]);
        }
        if(j === s.length) return Math.max(curr,max);
    }
    return max;
}