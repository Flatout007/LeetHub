/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    
    // use a hashtable to get frequencies of a.
    // loop through b and subtract relative frequencies. 
    // if a's frequecnies are all 0 or less after looping,
    // return true, else false
    
    const p = new Program(ransomNote, magazine, {});
    
    return p.canConstruct();
};

class Program {
    
    constructor(ransomNote, magazine, hashtable) {
        
        this.a = ransomNote;
        this.b = magazine;
        this.hashtable = hashtable;
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
    
    areAllZeros(array) {
        
        for (let i = 0; i<array.length; i++) {
            
            const num = array[i];
            
            if (num > 0)
            return false;
        }
        
        return true;
    }
    
    canConstruct() {
        
        let k = 0;
        
        this.getFrequencies(this.a);
        
        for (let i = 0; i<this.b.length; i++) {
            
            const character = this.b[i];
            
            if (this.hashtable[character] != null) 
            this.hashtable[character] -= 1;
            
            if (k>=this.a.length)
            return true;
        }
        
        const values = Object.values(this.hashtable);
        
        return this.areAllZeros(values);
    }
}