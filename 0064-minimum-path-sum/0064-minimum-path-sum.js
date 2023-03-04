/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    /**@brief
        this problem involves finding the path of the minimized sum
        in a given matrix, meaning the valid path of elements taken must sum to the smallest
        sum possible.
    */
    
    const p = new Program(grid);
    
    return p.minPath();
};

class Program {
    
    constructor(grid) {
        this.grid = grid;
    }
    
    
    minPath() {
    
        // traverse grid backwards starting from last row and last column
        for (let i = this.grid.length-1; i>=0; i--) {

            for (let j = this.grid[0].length-1; j>=0; j--) {
                
                // if the current row index is the last row AND 
                // the current column index is not the last element of a row
                if (i === this.grid.length-1 && j !== this.grid[0].length-1) {
                    
                    // accumulate the element at current row and column
                    // with the element to the right of it, overwriting the current element
                    this.grid[i][j] += this.grid[i][j+1];
                 } 
                
                // else if the index of the current column equals last element of a row AND
                // index of current row is not index of last row
                else if (j === this.grid[0].length-1 && i != this.grid.length-1) {
                    
                    // accumlate the sum of the element of the current row and column with 
                    // the element directly below the current row and column, overwriting the current element
                    this.grid[i][j] += this.grid[i+1][j];
            }
                // else if the index of the current column is not the last index of a coulmn AND
                // the current row index is not equal to the last index of a row
             else if (j !== this.grid[0].length-1 && i !== this.grid.length-1) {
                    
                    // accumulate the element at the current row and column With
                    // the miniumum of the element direcly below vs the element to it's right, overwriting the current element
                       this.grid[i][j] += Math.min(this.grid[i][j+1], this.grid[i+1][j]);
                }
            }
        }
        
//         // the first element of the grid will have the mininum sum possible
         return this.grid[0][0];
    }
}