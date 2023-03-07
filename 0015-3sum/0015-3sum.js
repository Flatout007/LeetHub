/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const output = [];
    
    // sort nums by non-decreasing order
    nums.sort((a,b) => a-b);
    
    // use a for loop to do a linear search through nums
    for (let i = 0; i<nums.length && nums[i] <= 0; i++) {
        
        // if the current index is 0 OR
        // the current element is not the same as the one before it
        if (i === 0 || nums[i] !== nums[i-1]) {
            // since array is sorted, use a while loop to do an intelligent search to find zero sum.
            findSum(nums, i, output);
        }
    }
    
    return output;
};

var findSum = function(nums, i, output) {
    
    let lo = i+1;
    let hi = nums.length-1;
    
    // while lo pointer is less than hi
    while (lo < hi) {
        
        const sum = nums[i] + nums[lo] + nums[hi];
        
        // else, if sum is less than 0, increment lo to find a greater value
        if (sum < 0) {
            lo++;
        }
        // else, the sum is greater than 0, so decrement the hi pointer to find a smaller value
        else if (sum > 0) {
            hi--
        }
        // if sum equals zero, add to output array, increment lo, decrement hi
        else if (sum === 0) {
            
            output.push([nums[i], nums[lo], nums[hi]]);
            
            lo++;
            hi--;
            
            // while lo is less than hi AND element at index lo is 
            // the same as the previous element at index lo
            while (lo < hi && nums[lo] === nums[lo-1]) {
                lo++;
            }
        } 
    
    }
}

