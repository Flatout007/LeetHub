/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const hashtable = {}
    const program = new Program(nums, target, hashtable);
    const result = program.twoSum();
    
    return result;
};

class Program {
    
    constructor(nums, target, hashtable) {
        this.nums = nums;
        this.target = target;
        this.hashtable = hashtable;
    }
    
    inHashtable(num) {
        return this.hashtable[num] != null;
    }
    
    storeInverseAndIndexInHashtable(key, value) {
        this.hashtable[key] = value;
    }
    
    twoSum() {
        
        for (let i = 0; i<this.nums.length; i++) {
            
            const inverse = this.target - this.nums[i];
            
            // check if nums[i] was an inverse stored in hashtable and return answer,
            // else store inverse in hashtable.
            if (this.inHashtable(this.nums[i])) {
                return [this.hashtable[this.nums[i]], i];
            } else {
                this.storeInverseAndIndexInHashtable(inverse, i);
            }
        }
    }
    
}

