// 12. Integer to Roman
// Seven different symbols represent Roman numerals with the following values:
// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.
//  Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9,
//  select the symbol of the maximal value that can be subtracted from the input,
//  append that symbol to the result, subtract its value,
//   and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol,
//  for example, 4 is 1 (I) less than 5 (V): IV and 9 is  1(I) less than 10 (X): IX.
// Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10.
// You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// 1900 - 1000 = 900 "M", 900 - 900 = 0 "MCM"
// 1443 - 1000 = 443 "M", 443 - 400 = 43 "MCD", 43 - 40 = 3 "MCDXL", 3 - 3 = 0 "MCDXLIII"



var intToRoman = function(num) {
    let res = "";
    const roman = {M:1000,CM:900,D:500,CD:400,
    C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    for (const [key, value] of Object.entries(roman)) {
        while(num>= value){
            res+= key;
            num-=value;
        }
    }
    return res;
};

console.log(intToRoman(1994)); //"MCMXCIV"
console.log(intToRoman(58)); //"LVIII"

/*
var intToRoman = function(num) {
    let res = "";
    const I=1,V=5,X=10,L=50,C=100,D=500,M=1000;
    const IV=4,IX=9,XL=40,XC=90,CD=400,CM=900;
    while(num>=M) { num-=M; res+="M"};
    if(num>=CM) { num-=CM; res+="CM"}
    else if(num>=D) { num-=D; res+="D"}
    else if(num>=CD) { num-=CD; res+="CD"};
    while(num>=C) { num-=C; res+="C"};
    if(num>=XC) { num-=XC; res+="XC"}
    else if(num>=L) { num-=L; res+="L"}
    else if(num>=XL) { num-=XL; res+="XL"};
    while(num>=X) { num-=X; res+="X"};
    if(num>=IX) { num-=IX; res+="IX"}
    else if(num>=V) { num-=V; res+="V"}
    else if(num>=IV) { num-=IV; res+="IV"};
    while(num>=I) { num-=I; res+="I"};
    return res;
};
*/