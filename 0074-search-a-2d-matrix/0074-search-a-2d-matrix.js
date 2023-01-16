/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const p = new Program(matrix, target);
    
    return p.findTarget();
};

class Program {
    
    constructor(matrix, target) {
        
        // traverse matrix and binary search each row for target
        
        this.matrix = matrix;
        this.target = target;
    }
    
    search(nums) {
        
        let left = 0;
        let right = nums.length-1;
        
        while(left <= right) {
            
            const mid = Math.floor((left + right)/2);
            const num = nums[mid];
            
            if(num === this.target)
                return mid;
            else if(this.target < num) 
                right = mid - 1;
            else
                left = mid + 1;
        }
        
        return -1;
    }
    
    findTarget() {
        
        for (let i = 0; i<this.matrix.length; i++) {
                
            const row = this.matrix[i];
            const index = this.search(row);
             
            if (index !== -1)
            return true;
            
        }
        
        return false;
    }
}