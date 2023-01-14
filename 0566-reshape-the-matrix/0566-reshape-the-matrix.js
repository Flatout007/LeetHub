/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    // covert matrix into array, use two pointers to fill up a new matrix.
    // if old matrix runs out of elements for new matrix, or there are too many elements,
    // reshape not possible.
    
    const newMat = new Array(r); for (let i = 0; i<newMat.length; i++) newMat[i] = new Array(c);
    
    const p = new Program(mat, r, c, newMat);
    
    return p.reshape();
}

class Program {
    
    constructor(mat, r, c, newMat) {
        
        this.mat = mat;
        this.r = r;
        this.c = c;
        this.newMat = newMat;
    }
    
    convertToArray(matrix) {
        let arr = [];
        
        for (let i = 0; i<matrix.length; i++) {
            
            for (let j = 0; j<matrix[0].length; j++) {
                
                arr.push(matrix[i][j]);
            }
        }
        
        return arr;
    }
    
    reshape() {
        
        const arr = this.convertToArray(this.mat);
        let k = 0;
        
        if (arr.length < this.r * this.c || arr.length > this.r * this.c)
        return this.mat;
        
        for (let i = 0; i<this.r; i++) {
            
            for (let j = 0; j<this.c; j++) {
               
                this.newMat[i][j] = arr[k++];
            }
        }
        
        return this.newMat;
    }
}