/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    // store frequencies of s and its indices in hashtables.
    // narrow frequncies of only those with 1 
    // find the index thats that lowest and return it.
    
    const p = new Program(s, {}, {});
    
    return p.firstUnique();
};

class Program {
    
    constructor(s, hashtable, map) {
        this.s = s;
        this.hashtable = hashtable;
        this.map = map
    }
    
    getFrequencies(str) {
        
        for (let i = 0; i<str.length; i++) {
            
            const character = str[i];
            
            if (this.hashtable[character] != null)
                this.hashtable[character] += 1;
            else 
                this.hashtable[character] = 1;
        }
    }
    
    getIndices(str) {
        
        for (let i = 0; i<str.length; i++) {
            
            const index = i;
            const character = str[i];
            
            this.map[character] = index;
        }
    }
    
    firstUnique() {
        
        let min = Infinity;
        
        this.getFrequencies(this.s);
        this.getIndices(this.s);
        
        for (let i = 0; i<this.s.length; i++) {
            
            const character = this.s[i];
            
            if (this.hashtable[character] === 1) {
                
                 const index = this.map[character];
                
                 if (index < min) 
                 min = index;
            }
        }
        
        return min === Infinity ? -1 : min;
    }
    
    
}