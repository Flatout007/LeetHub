/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    
    // problem: find the minimum starting number that will sum through nums without ever reaching 0
    
    // brute force:
    // pick a start value to continuously sum each nums[i] with it,
    // if value is never 0, record the minimum
    // decrement start value and loop until start value is 0
    
    let startValue = 10000;
    let min = Infinity;
    let prev = null;
    
    while (startValue > 0) {
    
        let sum = startValue;
        
        for (let i = 0; i<nums.length; i++) {
            
            const number = nums[i];
            
            sum += number;
            
            if (sum <= 0) {
                min = prev;
                break;
            }
            
            min = Math.min(min, startValue);
        }
        
        prev = min;
        startValue--;
    }
    
    return min;
};