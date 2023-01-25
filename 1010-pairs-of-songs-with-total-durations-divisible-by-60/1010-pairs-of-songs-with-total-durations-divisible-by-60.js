/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    
    // brute force:
    // sum every possible pair checking if its divisible by 60
    
    // binary search: 
    // for each time[i], binary search for the target.
    // The target being any number that sums with time[i] to become divisible by 60. 
    // after binary search, the number in left or right halves must add up to a multiple of 60 with time[i].
    // use a loop to search for that number between left and right, if found, increment the count.
    
    
    // two pointer:
    // sort array, use two pointers to check if their sum is divisible by 60 then
    // increment or decrement the correct pointer, continue this loop
    // until left is greater than right
    
    time.sort((a,b) => a-b);
    
    const p = new Program(time, 0);
    
    return p.numPairs();
};



class Program {
    
    constructor(time, count) {
        
        this.time = time;
        this.count = count;
    }
    
//     search(left, right, number) {
//         while (left <= right) {
                
//                 let sum = 0;
//                 const mid = Math.floor((left + right) / 2);
                
//                 sum = number + this.time[mid];
                
//                 if (sum % 60 === 0) {
//                     return mid;
//                 } else if (this.time[mid] < 60 || number < 60) {
//                     left = mid + 1;
//                 } else {
//                     right = mid - 1;
//                 }
//             }
            
//             return -1;
//     }
    
    numPairs() {
        
        for (let i = 0; i<this.time.length; i++) {
            
            const number = this.time[i];
            let left = i + 1; // left is i+1 to avoid using same element
            let right = this.time.length-1;
            
            while (left <= right) {
                
                let sum = 0;
                const mid = Math.floor((left + right) / 2);
                
                sum = number + this.time[mid];
                
                if (sum < 60) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
    
           //  The array is now divided in half.
           //  The number in left or right halves must add up to a multiple of 60 with time[i].
           //  A loop is used to search for that number between left and right, if found, increment the count.
        
            while (left < this.time.length) {

                const sum = this.time[left] + this.time[i];

                if (sum % 60 === 0) {
                    this.count += 1;
                } 

                left++;
            }
            
        }
        
        return this.count;
    }
}