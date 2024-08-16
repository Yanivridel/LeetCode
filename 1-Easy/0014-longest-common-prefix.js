
// 14. Longest Common Prefix
// Write a function to find the longest common
// prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let res = "", i, j;
    let len = strs[0]?.length;
    let flag = false;
    for(i=0;i< len; i++){
        for(j=0;j<strs.length - 1; j++){
            if(strs[j][i] !== strs[j+1][i]) {
                flag=true;
                break;                
            }
        }
        if(flag) break;
        res += strs[j][i];
    }
    return res;
};


let strs = ["flower","flow","flight"];
// let strs = ["a"];
// let strs = ["a","b"];
console.log(longestCommonPrefix(strs));
