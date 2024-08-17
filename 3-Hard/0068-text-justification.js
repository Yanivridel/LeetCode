
// 68. Text Justification
// Given an array of strings words and a width maxWidth,
//  format the text such that each line has exactly maxWidth characters and
//   is fully (left and right) justified.

// You should pack your words in a greedy approach; that is,
//  pack as many words as you can in each line. Pad extra spaces ' '
//   when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed
// as evenly as possible. If the number of spaces on a line does
//  not divide evenly between words, the empty slots on the left 
//  will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no
//  extra space is inserted between words.

// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

var fullJustify = function(words, maxWidth) {
    const res = [];
    let k = i = 0;
    while(i < words.length){
        let row = "";
        let size = 0, count = 0;
        while(k < words.length && (size + words[k].length) <= maxWidth){
            size+= words[k++].length + 1;
            count++;
        }
        size -= count;
        let overallPadding = maxWidth-size;
        if(k === words.length){ // Last row
            for(let j=i;j<count+i;j++){
                row+= words[j];
                if(j === count+i-1) 
                    row+= ' '.repeat(overallPadding);
                else {
                    row+= ' ';
                    overallPadding-=1;
                }
            }
        }
        else { // Common row
            for(let j=i;j<k;j++){
                let currPadding = overallPadding;
                if(count !== 1)
                    currPadding = Math.ceil(currPadding / (count-- -1));
                row+= words[j];
                if(overallPadding >= currPadding) {
                    row+= ' '.repeat(currPadding);
                    overallPadding -= currPadding;
                }
                else {
                    row+= ' '.repeat(overallPadding);
                    overallPadding = 0;
                }
            }
        }
        i = k;
        res.push(row);
    }
    return res;
};


// let words = ["This", "is", "an", "example", "of", "text", "justification."];
// let maxWidth = 16;

// let words =["What","must","be","acknowledgment","shall","be"];
// let maxWidth = 16;

// let words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
// let maxWidth = 20;

let words = ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"];
let maxWidth = 16;

let res = fullJustify(words,maxWidth)
console.log(res);

// let flag = true
// let exp = ["ask   not   what","your country can","do  for  you ask","what  you can do","for your country"];
// for(let i=0;i<exp.length;i++){
//     if(exp[i] !== res[i]) flag=false 
// }
// console.log(flag);




