
// 151. Reverse Words in a String
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
//  The words in s will be separated by at least one space.

// Return a string of the words in reverse order
//  concatenated by a single space.

// Note that s may contain leading or trailing spaces 
// or multiple spaces between two words.
//  The returned string should only have a single space
//   separating the words. Do not include any extra spaces.

var reverseWords = function(s) {
    let temp = removespaces(s)
    let arr = temp.split(" ");
    arr.reverse()
    return arr.join(" ");
};

function removespaces(s){
    s = s.trim();
    let temp = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === " " && s[i+1] === " ")
            continue;
        temp+= s[i];
    }
    return temp;
}

let s = "  hello world  ";
console.log(reverseWords(s));