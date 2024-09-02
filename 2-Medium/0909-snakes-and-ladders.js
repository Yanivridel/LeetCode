
// 909. Snakes and Ladders
// You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.

// You start on square 1 of the board. In each move, starting from square curr, do the following:

// Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
// This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
// If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
// The game ends when you reach the square n2.
// A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any snake or ladder.

// Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

// For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
// Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1.

import { graph } from './../0-Collections/js-collections.js'

var snakesAndLadders = function(board) {
    const adjacencyList = {};
    let count = 1, N = board.length;
    for (let i = 1; i <= N*N ; i++){
        for(let j=i+1; j <= Math.min(i+6,N*N); j++){
            const [r,c] = getPos(j,N);            
            const next = (board[r][c] === -1) ? j : board[r][c];
            graph.addEdge(i, next, adjacencyList);
            }
    }
    const { distances } = graph.BFS(1,adjacencyList);
    return distances[N*N] ? distances[N*N] : -1;
}

function getPos(pos, N){
    let row = Math.floor((pos - 1) / N);
    let col = (pos - 1) % N;
    col = (row % 2) === 1 ? N - col - 1 : col;
    row = N - row - 1;
    return [row,col];
}


// const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],
//               [-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]; // 4

// const board = [ [-1,-1],
//                 [-1,3]];

// const board = [[-1,-1,-1],
//                [-1,9,8],
//                [-1,8,9]]; //1

const board = [ [-1,7,-1],
                [-1,6,9],
                [-1,-1,2]];

// const board = [ [-1,4,-1],
//                 [6,2,6],
//                 [-1,3,-1]];
console.log(snakesAndLadders(board));
