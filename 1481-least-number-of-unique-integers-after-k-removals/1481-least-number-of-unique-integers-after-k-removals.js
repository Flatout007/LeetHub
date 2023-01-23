/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  
    // get frequencies of arr. sort values of frequencies.
    // until k is 0, decrement k by value to accept next available 
    // value and accumulate a delete count. 
    // return (length of the frequency values - delete count) to reduce size of hashmap.
    
    const p = new Program(arr, k, {});

    return p.find();
};

// Method 2:
class Program {
    
    constructor(arr, k, hashmap) {
        
        this.arr = arr;
        this.k = k;
        this.hashmap = hashmap;
    }
    
    getFrequencies(arr) {
        
        for (let i = 0; i<arr.length; i++) {
            
            const num = arr[i];
            
            if (this.hashmap[num] != null) {
                this.hashmap[num] += 1;
            } else {
                this.hashmap[num] = 1;
            }
        }
    }

    find() {
        
        let deleteCount = 0;
        
        this.getFrequencies(this.arr);
        
        const values = Object.values(this.hashmap).sort((a,b) => a-b);
        
        let i = 0;
        
        while (this.k !== 0) {
            
            const value = values[i++];
            
            if (this.k >= value) 
                deleteCount++;
            else
                break;
            
            this.k -= value;
        }
  
        return values.length - deleteCount;
    }
}



// 36 / 43 test cases passed.

// get frequencies of arr
// sort arr by frequecny count 
// and delete the first k, count and return updated frequencies of arr
    
// class Program {
    
//     constructor(arr, k, hashmap) {
        
//         this.arr = arr;
//         this.k = k;
//         this.hashmap = hashmap;
//     }
    
//     getFrequencies(arr) {
        
//         for (let i = 0; i<arr.length; i++) {
            
//             const num = arr[i];
            
//             if (this.hashmap[num] != null) {
//                 this.hashmap[num] += 1;
//             } else {
//                 this.hashmap[num] = 1;
//             }
//         }
//     }
    
//     sort() {
      
//       this.getFrequencies(this.arr);  
        
//       return this.arr.sort((a, b) => this.hashmap[a] - this.hashmap[b]);
//     }
    
//     remove(count) {
        
//         const newArray = [];
//         let k = 0;
        
//         for (let i = 0; i<this.arr.length; i++, k++) {
            
//             const number = this.arr[i];
            
//             if (k < count)
//             continue;
            
//             newArray.push(number);
//         }
        
//         return newArray;
//     }
    
//     find() {
        
//         this.sort();
        
//         const array = this.remove(this.k);
        
//         // get updated frequencies
//         this.hashmap = {};
//         this.getFrequencies(array);
//         return Object.keys(this.hashmap).length
//         //return array;
//     }
// }