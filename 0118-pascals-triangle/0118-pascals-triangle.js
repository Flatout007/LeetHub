/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
       // The first two terms are [[1], [1,1]]
       // the next term of the sequence is dertermined by
       // surrounding all summed adjacent elements of the preveious term by 1's
    
    const pascalTriangle = [[1], [1,1]];
    
    const p = new Program(numRows, pascalTriangle);
    
    return p.createTriangle();
};

class Program {
    
    constructor(numRows, pascalTriangle) {
        
        this.numRows = numRows;
        this.pascalTriangle = pascalTriangle;
    }
    
    getNextTerm(arr) {
        
        let sums = [1];
        
        for (let i = 0; i<arr.length; i++) {
            
            if (arr[i+1] == null)
            break;
            
            sums.push(arr[i] + arr[i+1]);
        }
        
        sums.push(1);
        
        return sums;
    }
    
    createTriangle() {
        
        let i = 0;
        let k = 1;
        const firstTerm = this.pascalTriangle[0];
        const secondTerm = this.pascalTriangle[1];
        
        if (this.numRows === 1)
        return [firstTerm];
        
        if (this.numRows === 2)
        return [firstTerm, secondTerm];
        
        while (i < this.numRows-2) {
            
            const nextTerm = this.getNextTerm(this.pascalTriangle[k++]);
            
            this.pascalTriangle.push(nextTerm);
            
            i++;
        }
        
        return this.pascalTriangle;
    }
}