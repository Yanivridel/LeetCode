
// 20. Valid Parentheses
// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(['(','[','{'].includes(s[i]))
            stack.push(s[i]);
        else {
            const temp = stack.pop();            
            if(!temp || (temp === '(' && s[i] !== ")") || (temp === '[' && s[i] !== "]")
                || (temp === '{' && s[i] !== "}"))
                return false;
        }
    }
    return stack.length === 0 ? true:false;
};


// const s = "()[]{}";
// const s = "({[)"
const s = "([]){";
console.log(isValid(s));
