/*
2048 is a tiny video game that was super hype some years ago. 
You had to fuse two equal numbers to create its double. 
So 1 and 1 became 2, 2 and 2 became 4, and so on.

Fibonacci was a famous mathematician who made the super-hype 
Fibonacci sequence you may have heard about: U(n+1) = U(n) + U(n-1). 
The first number of the sequence are 1, 1, 2, 3, 5, 8, 13, …

Let’s combine these two hype things to create a super-super-hype game!

2048-bonacci plays on a 4x4 square. Each square is either empty or 
contains a number of the Fibonacci sequence.

You are given an initial board situation (a 2D array of integers) and a 
pushing direction (up, left, down, or right). Then, you must compute the 
board contents after the push and return an updated 2D array of integers.

The value of integers in the array is guaranteed to be less than 2^16 and 
are all Fibonacci numbers. The value 0 means the square is empty.

Rule 1
Numbers move as far as possible in the pushing direction.

-------------                       -------------
| 2|  |  |  |                       |  |  |  |  |
-------------                       -------------
|  |  |13|  |                       |  |  |  |  |
-------------  => push downward =>  -------------
|  |  |  |  |                       | 2|  |  |  |
-------------                       -------------
| 5|  |  |  |                       | 5|  |13|  |
-------------                       -------------
Rule 2
When two consecutive numbers in the Fibonacci sequence are pushed one on another, they fuse into the next number.

-------------                       -------------
|  |  | 1| 2|                       |  |  |  | 3|
-------------                       -------------
| 1|  | 1|  |                       |  |  |  | 2|
-------------  => push rightward => -------------
|  | 8| 5|  |                       |  |  |  |13|
-------------                       -------------
|  | 5| 8|  |                       |  |  |  |13|
-------------                       -------------
Rule 3
Fusing orders are resolved in the backward direction of the push.

A fused number can not be fused once again in the same turn.

-------------                 -------------                 -------------
|  | 1| 2| 3|                 |  |  | 1| 5|                 |  |  | 1| 5|
-------------                 -------------                 -------------
|  | 3| 2| 1|                 |  |  | 3| 3|                 |  |  | 3| 3|
------------- => rightward => ------------- => rightward => -------------
|  |  |  |  |                 |  |  |  |  |                 |  |  |  |  |
-------------                 -------------                 -------------
|  | 5| 3| 5|                 |  |  | 5| 8|                 |  |  |  |13|
-------------                 -------------                 -------------
Rule 4
Numbers can move to a square that a fusing has just emptied.

-------------                     -------------
| 1|  |  |  |                     | 2|  |  |  |
-------------                     -------------
| 1|  |  |  |                     | 2|  |  |  |
-------------  => push upward =>  -------------
| 1|  |  |  |                     |  |  |  |  |
-------------                     -------------
| 1|  |  |  |                     |  |  |  |  |
-------------                     -------------
Let’s hype!
*/

// Solution:

const Direction = Object.freeze({ UP: Symbol('UP'), DOWN: Symbol('DOWN'), LEFT: Symbol('LEFT'), RIGHT: Symbol('RIGHT') });

class The2048Bonacci {
  constructor(gameArea) {
    this.gameArea = gameArea;
    this.width = gameArea[0].length;
    this.height = gameArea.length;
    
    const fibs = [1,1];
    while(fibs[fibs.length-1] < Math.pow(2,16)) {
      fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    }
    this.fibs = fibs.slice(0, fibs.length-1)
  }

  getDescription() {
    return this.gameArea.map(line => line.map(fibVal => `${fibVal.toString().padStart(2, ' ')}`).join(' ')).join('\n');
  }

  applyMove(direction) {
    if(!Object.values(Direction).includes(direction)){
      console.error("Invalid move: ", direction);
      return;
    }

    for (let i = 0; i < (direction === Direction.LEFT || direction === Direction.RIGHT ? this.height : this.width); i++) {
    
      let line = this.getLine(i, direction);
  
      let newLine = this.processLine(line);
  
      this.setLine(i, direction, newLine);
    }
  
  }

  getLine(index, direction) {
    const line = [];

    if (direction === Direction.LEFT || direction === Direction.RIGHT) {
      for (let col = 0; col < this.width; col++) {
        line.push(this.gameArea[index][col]);
      }
      if (direction === Direction.RIGHT) line.reverse();
    }

    if (direction === Direction.UP || direction === Direction.DOWN) {
      for (let row = 0; row < this.height; row++) {
        line.push(this.gameArea[row][index]);
      }
      if (direction === Direction.DOWN) line.reverse();
    }

    return line;
  }

  setLine(index, direction, line) {
    if (direction === Direction.RIGHT || direction === Direction.DOWN) {
      line = [...line].reverse();
    }
  
    if (direction === Direction.LEFT || direction === Direction.RIGHT) {
      for (let col = 0; col < this.width; col++) {
        this.gameArea[index][col] = line[col];
      }
    }
  
    if (direction === Direction.UP || direction === Direction.DOWN) {
      for (let row = 0; row < this.height; row++) {
        this.gameArea[row][index] = line[row];
      }
    }
  }
  
  processLine(line) {
    let lastIdx = null;

    for(let i=0; i < line.length; i++) {
      if(line[i] !== 0) {
        if(lastIdx === null)
          lastIdx = i;
        else {
          const res = this.isMatch(line[lastIdx], line[i]);
          if(res !== -1) {
            line[lastIdx] = res;
            line[i] = 0;
            lastIdx = null;
          }
          else {
            lastIdx = i;
          }
        }
      }
    }

    // Clean Zeros
    const cleaned = line.filter(val => val !== 0);
    while (cleaned.length < line.length) {
      cleaned.push(0);
    }
    return cleaned;
  }
  
  binaryIndexSearch(fib) {
    let left=0, right=this.fibs.length-1;

    while(left <= right) {
      const mid = Math.floor((right + left) / 2)
      if(this.fibs[mid] === fib)
        return mid;
      if(this.fibs[mid] < fib)
        left = mid + 1;
      else
        right = mid - 1;
    }
    return -1;
  }

  isMatch(fib1,fib2) {
    if([0,1].includes(Math.abs(fib1-fib2)))
      return fib1 + fib2;
    const idx1 = this.binaryIndexSearch(fib1);
    const idx2 = this.binaryIndexSearch(fib2);

    if(idx1 !== -1 && idx2 !== -1 && Math.abs(idx1 -idx2) === 1)
      return fib1 + fib2;

    return -1;
  }
}

// TESTING
const sampleBoard = [
    [0, 1, 1, 2],
    [3, 5, 0, 0],
    [8, 13, 21, 0],
    [0, 0, 0, 0]
];

const game = new The2048Bonacci(sampleBoard);
console.log("Before:");
console.log(game.getDescription());

game.applyMove(Direction.LEFT);
console.log("\nAfter LEFT:");
console.log(game.getDescription());

game.applyMove(Direction.DOWN);
console.log("\nAfter DOWN:");
console.log(game.getDescription());