/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    const p = new Program(nums1, m, nums2, n, []);
    const newArray = p.merge();

    for (let i = 0; i<nums1.length; i++) {
        nums1[i] = newArray[i];
    }
};

class Program {

    constructor(nums1, m, nums2, n, newArray) {

        // use two pointers to compare both elements from each array.
        // The one that's less gets added to the new array and has it's pointer
        // incremented. After merging, check which pointer has not finished
        // looping, add its elements to the end of the new array.

        this.nums1 = nums1;
        this.m = m;
        this.nums2 = nums2;
        this.n = n;
        this.newArray = newArray;
    }

    merge() {

        let pointerOne = 0;
        let pointerTwo = 0;
        let k = 0;

        while (pointerOne < this.m && pointerTwo < this.n) {

            const a = this.nums1[pointerOne];
            const b = this.nums2[pointerTwo];

            if (a < b) {
                this.newArray[k++] = a
                pointerOne += 1;
            } else {
                this.newArray[k++] = b
                pointerTwo += 1;
            }
        }

        for (let i = pointerOne; i < this.m; i++) {

            const num = this.nums1[i];
            
            this.newArray[k++] = num;
        }

        for (let i = pointerTwo; i < this.n; i++) {

            const num = this.nums2[i];
            
            this.newArray[k++] = num;
        }

        return this.newArray;
    }
}