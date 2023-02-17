/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
 nums.sort((a,b) => a-b);   
     
 const arr = [];
 // use set to track duplicates   
 const set = new Set(); 
    
 for (let i = 0; i<nums.length; i++) {
    
     let left = i+1;
     let right = nums.length-1;
     
     while (left < right) {
         
         const sum = nums[i] + nums[left] + nums[right];
         const validNumbers = [nums[i], nums[left], nums[right]];
         // turn valid numbers into a lookup string for a set to avoid duplicates
         const key = `${nums[i]}${nums[left]}${nums[right]}`;
        
         if (sum === 0) {
             
             if (set.has(key)) {
                 // do nothing
             }
             else {
                 arr.push(validNumbers);
             }
             
             left++; right--;
             set.add(key);
             
         } else if (sum < 0) {
             left++;
         } else {
             right--;
         }
     }  
 }
    
 return arr;   
}
    
  
  /**@Reference */  
 //     // sort nums
//     // use three pointers at i + 0, i + 1, n-1
//     // for nums[i] 
//     // if numbers sum to target update all three pointers
//     // else update only l and m pointers
//     // until r < m 
    
//     nums.sort((a,b) => a-b);
    
//     let l = 0, m = 1, r = nums.length-1;
//     let string = "";
//     const arr = [];
//     const set = new Set();
    
//     while (r > m) {
        
//         const sum = nums[l] + nums[m] + nums[r];
    
//             if (sum === 0) {
                
//                 // convert to string to check if array is a duplicate
//                 string += nums[l], string += nums[m]; string += nums[r];

//                 if (!set.has(string)) {
//                     arr.push([nums[l], nums[m], nums[r]]);
//                 }
                
//                 set.add(string);
//                 string = "";
//                 l++; m++; r--;
//             } else {
//                 if (sum < 0) {
//                     l++; m++

//                 } else if (sum > 0) {
//                     r--;

//                 }
//             }
//      }
    
//     return arr;   
