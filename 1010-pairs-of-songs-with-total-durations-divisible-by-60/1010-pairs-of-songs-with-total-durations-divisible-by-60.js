/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    time.sort((a,b) => a-b);
    
    const p = new Program(time, 0);
    
    return p.numPairs();
};



class Program {
    
    constructor(time, count) {
        
        this.time = time;
        this.count = count;
    }
    
    numPairs() {
        
        for (let i = 0; i<this.time.length; i++) {
            
            const number = this.time[i];
            let left = i + 1; // left is i+1 keep left in front of times[i], avoiding same element
            let right = this.time.length-1;
            
            while (left <= right) {
                
                let sum = 0;
                const mid = Math.floor((left + right) / 2);
                
                sum = number + this.time[mid];
                
                if (sum < 60) {
                    left = mid + 1; // narrow search to numbers greater than 60!
                } else {
                    right = mid - 1; // narrow search to numbers less than or equal to 60!
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