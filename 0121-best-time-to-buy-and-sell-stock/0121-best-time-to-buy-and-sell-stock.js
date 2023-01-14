/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    const p = new Program(prices,0,1);
    
    return p.maxProfit();
};

class Program {
    
    constructor(nums, a, b) {
        
        this.nums = nums;
        this.a = a;
        this.b = b;
    }
    
    
    maxProfit() {
        
        let max = 0;
        
        while (this.b < this.nums.length) {
            
            let profit = this.nums[this.b] - this.nums[this.a];
            
            max = Math.max(max, profit);
            
            if (profit <= 0) {
                this.a = this.b;
                profit = 0;
            }
            
            this.b++;
        }
        
        return max;
    }
}