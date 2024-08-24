
// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according 
// to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain 
// the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) 
// could be valid but is not necessarily solvable.
// Only the filled cells need to be validated 
// according to the mentioned rules.

var isValidSudoku = function(board) {
    const hashMap = {};
    for(let i=0; i < 9; i++){
        for(let j=0; j < 9; j++){
            if(board[i][j] === ".") continue;
            if(!hashMap[board[i][j]])
                hashMap[board[i][j]] = [[i],[j],[get3x3(i,j)]];
            else {
                if( hashMap[board[i][j]][0].includes(i) ||
                    hashMap[board[i][j]][1].includes(j) ||
                    hashMap[board[i][j]][2].includes(get3x3(i,j))){
                        return false;
                    }
                else {
                    hashMap[board[i][j]][0].push(i);
                    hashMap[board[i][j]][1].push(j);
                    hashMap[board[i][j]][2].push(get3x3(i,j));
                }
            }
        }
    }
    return true;
};

function get3x3(i,j){
    if(i<3 && j<3) return 1;
    if(i<3 && j<6) return 2;
    if(i<3 && j<9) return 3;
    if(i<6 && j<3) return 4;
    if(i<6 && j<6) return 5;
    if(i<6 && j<9) return 6;
    if(i<9 && j<3) return 7;
    if(i<9 && j<6) return 8;
    if(i<9 && j<9) return 9;
}

const board=[["5","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]]


const board1 = [[".",".","4",".",".",".","6","3","."],
                [".",".",".",".",".",".",".",".","."],
                ["5",".",".",".",".",".",".","9","."],
                [".",".",".","5","6",".",".",".","."],
                ["4",".","3",".",".",".",".",".","1"],
                [".",".",".","7",".",".",".",".","."],
                [".",".",".","5",".",".",".",".","."],
                [".",".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".",".","."]]
console.log(isValidSudoku(board1));
