/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    // loop over nums and 
    // use a set to track if an element is seen before
    
    const set = new Set();
    
    for (let i = 0; i<nums.length; i++) {
        
        const number = nums[i];
        
        if (set.has(number))  
        return true;
            
        set.add(number);
    }
    
    return false;
};