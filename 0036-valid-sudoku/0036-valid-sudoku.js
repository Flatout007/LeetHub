/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /*

    - use set to store each number and see if it repeats for each row of board
    - use set to store each number and see if it repeats for each column of board
    - to get each 3x3 subarrays, use 4 loops
    */

    let set = new Set();

    for (let i = 0; i<board.length; i++) {

        set = new Set();

        for(let j = 0; j<board[0].length; j++) {
            
            const num = board[i][j];
            
            if (num === ".")
            continue;
            
            if (set.has(num))
            return false;

            set.add(num);
        }
    }

    for (let i = 0; i<board[0].length; i++) {

        set = new Set();

        for (let j = 0; j<board.length; j++) {

            const num = board[j][i];
            
            if (num === ".")
            continue;
            
            if (set.has(num))
            return false;

            set.add(num);
        }
    }
    
   
    set = new Set();
    
    for (let i = 0; i<board.length; i+=3) {
    
        for (let j = 0; j<board[0].length; j+=3) {
            
            set = new Set();
               
            for (let x = i; x < 3 + i; x++) {
            
                for (let y = j; y < 3 + j; y++) {
                        
                    const num = board[x][y];
                    
                    if (num === ".")
                    continue;
                    
                    if (set.has(num))
                    return false;
                    
                    set.add(num);
                }
           }
        }
    }
        
    
    return true;
}
    
    
    