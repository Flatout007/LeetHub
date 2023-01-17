/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    // get frequencies of a, traverse b.
    // if all frequecnies of a are not zero after tarversing or
    // character in b is not in frequency hashtable
    // return false, else return true.
    
    const p = new Program(s, t, {});
    
    return p.isAnagram();
};


class Program {
    
    constructor(s, t, hashtable) {
        this.a = s;
        this.b = t;
        this.hashtable = hashtable;
    }
    
    getFrequencies(str) {
        
        for (let i = 0; i<this.a.length; i++) {
            
            const character = this.a[i];
            
            if (this.hashtable[character] != null)
                this.hashtable[character] += 1;
            else 
                this.hashtable[character] = 1;
        }
    }
    
    areAllValuesZero(values) {
        
        for (let i = 0; i<values.length; i++) {
            
            const number = values[i];
            
            if (number !== 0)
            return false;
        }
        
        return true;
    }
    
    isAnagram() {
        
        this.getFrequencies(this.a);
        
        for (let i = 0; i<this.b.length; i++) {
            
            const character = this.b[i];
            
            if (this.hashtable[character] != null)
                this.hashtable[character] -= 1;
            else
                return false
        }
        
        if (this.areAllValuesZero(Object.values(this.hashtable)))
            return true;
        else
            return false;
    }
}