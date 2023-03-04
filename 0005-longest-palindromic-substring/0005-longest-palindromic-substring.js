/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const p = new Program(s);
    
    return p.longest();
};


class Program {
    
    constructor(s) {
        this.s = s;
        this.start = 0;
        this.end = 0;
    }
    
    expand(left, right) {
        
        let L = left;
        let R = right;
        
        // unitl L is less than 0 AND R is equal to length of string AND
        // the character at index L equals the character at index R,
        // Decrement L and Increment R 
        while (L !== -1 && R !== this.s.length && this.s[L] === this.s[R]) {
            L--;
            R++;
        }
        
        // compute and return the size of palindrome
        return R - L - 1;
        
    }
    
    longest() {
        
        // if string is null OR string has less than one character,
        // return empty string
        if (this.s == null || this.s.length < 1) {
            return "";
        }
        
        // traverse string by doing a linaer search 
        for (let i = 0; i<this.s.length; i++) {
            
            // call expand with (current index, current index) as left and right to get palindrome size
            const len1 = this.expand(i, i);  
            
            // call expand with (current index, next index) as left and right to get palindrome size;
            const len2 = this.expand(i, i+1);
            
            // get the max length between the two lengths
            const len = Math.max(len1, len2);
            
            // if the max length is greater than the current subarray window
            if (len > this.end - this.start) {
                
                // update start index so that it represents the middle of the current subarray string.
                this.start = i - Math.floor((len - 1) / 2);
 
                // upadate end index to represent the end index of the current subarray string.
                this.end = i + Math.floor(len / 2);
            }
        }
        
        // return the substring of s relative to the updated start to end indices
        return this.s.substring(this.start, this.end + 1);
    }
}