/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    /**@Summary:

    Two sets of time intervals A and B are "mergeable" if and only if there is any intersection 
    between the intervals in set A and the intervals in set B.
    */
    
    let left = 0;
    let right = 1;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    for (let i = 0; i<intervals.length; i++, left++, right++) {
        
        if (right >= intervals.length) {
            break;
        }
            
        const startA = intervals[left][0];
        const endA = intervals[left][1];
        const startB = intervals[right][0];
        const endB = intervals[right][1];
        
        // if sets of times interscect, merge sets of time.
        if (startB <= endA && startB >= startA) {
            
            const min = Math.min(startA, startB);
            const max = Math.max(endA, endB);
           
            intervals[i] = null;
            intervals[i+1] = [min, max]; 
        } 
    }
    
    return intervals.filter(ele => ele != null);
}