/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const p = new Program(nums1, nums2, [], {});
    
    return p.findIntersection();
};

class Program {
    
    constructor(nums1, nums2, intersectionArray, hashtable) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.intersectionArray = intersectionArray;
        this.hashtable = hashtable;
    }

    getFrequencies(arr) {
        for (let i = 0; i<arr.length; i++) {
            
            const num = arr[i];
            
            if (this.hashtable[num] != null) {
                this.hashtable[num] += 1;
            } else {
                this.hashtable[num] = 1;
            }
        }
    }
    
    findIntersection() {
        
        this.getFrequencies(this.nums2);
        
        for (let i = 0; i<this.nums1.length; i++) {
            
            const num = this.nums1[i];
            const frequency = this.hashtable[num];
            
            if (frequency != null) {
                
                this.intersectionArray.push(num);
                
                this.hashtable[num] -= 1;
                
                if (this.hashtable[num] === 0)
                delete this.hashtable[num];
                    
            }
        }
        
        return this.intersectionArray;
    }
}