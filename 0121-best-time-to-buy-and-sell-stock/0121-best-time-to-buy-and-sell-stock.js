/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // Use two pointers to loop through array
    // since pointer b must remain in front of or equal to pointer a,
    // if profit becomes 0, assign pointer a to become b.
    
    
    let a = 0;
    let b = 1;
    let max = 0;
    let n = prices.length;
    
    for (let i = 0; i<prices.length; i++) {
        
        if (a === n || b === n)
        break;
        
        let profit = prices[b] - prices[a];
        
        max = Math.max(max, profit);
        
        if (profit < 0) {
            profit = 0;
            a = b;
        }
        
        b++;
    }
    
    return max;
};