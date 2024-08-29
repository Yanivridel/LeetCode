
// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a 
// map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting 
// adjacent lands horizontally or vertically. You may assume all 
// four edges of the grid are all surrounded by water.

var numIslands = function(grid) {
    const n = grid.length, m = grid[0].length;
    let sum = 0;
    for(let i=0; i < n; i++){
        for(let j = 0; j < m; j++){            
            if(grid[i][j] === '1'){
                sum += 1;
                drownIsland(grid, i, j, n, m);
            }
        }
    }
    
    return sum;
};

function drownIsland(grid, i, j, n, m){
    if(i < 0 || i === n || j < 0 || j === m || grid[i][j] === '0') return;
    grid[i][j] = '0';
    drownIsland(grid, i-1, j, n, m);
    drownIsland(grid, i, j-1, n, m);
    drownIsland(grid, i+1, j, n, m);
    drownIsland(grid, i, j+1, n, m);
}


const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]];
const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]];

console.log(numIslands(grid));
