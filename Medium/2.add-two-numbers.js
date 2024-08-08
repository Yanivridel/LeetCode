
// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



 // Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// let l1 = new ListNode(2,new ListNode(4,new ListNode(3)));
// let l2 = new ListNode(5,new ListNode(6,new ListNode(4)));

let l1 = new ListNode(5,new ListNode(6));
let l2 = new ListNode(5,new ListNode(4,new ListNode(9)));

printList(l1);
printList(l2);
let res = addTwoNumbers(l1,l2);
printList(res)


function addTwoNumbers(l1, l2) {
  // let num1 = getNumFromReverseList(l1);
  // console.log(num1);  
  // let num2 = getNumFromReverseList(l2);
  // console.log(num2);
  // console.log(num1+num2);
  //return createReverseListFromNum(num1+num2);
  let num1 = BigInt("1000000000000000000000000000001");
  let num2 = BigInt("465");
  console.log(num1+num2);  
  return createReverseListFromNum(num1+num2)
};

function printList(list){
  console.log("LIST:");
  let current = list;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}
function getNumFromReverseList(list){
  let current = list;
  let num = 0, count=0;
  while (current) {
      num += current.val * Math.pow(10,count);
      count++;
      current = current.next;
    }
  return num;
}
function createReverseListFromNum(num){
  let res = new ListNode(num%BigInt("10"));  //1010
  num = bigIntFloorDivide(num,BigInt("10"));
  while(num!==0){
    let digit = num%BigInt("10");
    console.log(digit);
    insertLast(res,digit);
    num = bigIntFloorDivide(num,BigInt("10"));
  }
  return res;
}
function insertLast(list, val) {
  let current;
    current = list;
    while (current.next) {
      current = current.next;
    }
    
    current.next = new ListNode(val, null);
}
function bigIntFloorDivide(a, b) {
  let result = a / b;
  if (a % b !== BigInt(0) && (a < BigInt(0) !== b < BigInt(0))) {
      result -= BigInt(1);
  }
  return result;
}


/*
import { Node, LinkedList } from './../modules/singlyLinkedList.js';

  // Node Properties:
  // this.val
  // this.next

  // List Properties:
  // this.head
  // this.size

  // Methods:
  // insertFirst(val);
  // insertLast(val);
  // insertAt(val, index);
  // getAt(index);
  // removeAt(index);
  // clearList();
  // printListData();


let l1 = new LinkedList();
let l2 = new LinkedList(); 

// Test 1
// l1.insertLast(2);l1.insertLast(4);l1.insertLast(3);
// l2.insertLast(5);l2.insertLast(6);l2.insertLast(4);

// Test 2
// l1.insertLast(0);
// l2.insertLast(0);

// Test 3
// for(let i=0;i<7;i++) l1.insertLast(9);
// for(let i=0;i<4;i++) l2.insertLast(9);

console.log("First List:");
l1.printListData();
console.log("Second List:");
l2.printListData();


console.log("The numbers are:");
let num1 = getNumFromReverseList(l1);
let num2 = getNumFromReverseList(l2);
console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
console.log("Result = " + (num1+num2));
let res = createReverseListFromNum(num1+num2);
res.printListData()


function getNumFromReverseList(list){
    let current = list.head;
    let num = 0, count=0;
    while (current) {
        num += current.val * Math.pow(10,count);
        count++;
        current = current.next;
      }
    return num;
}
function createReverseListFromNum(num){
    let res = new LinkedList();
    while(num!==0){
        let digit = num%10;
        res.insertLast(digit);
        num = Math.floor(num/10);
    }
    return res;
}
*/