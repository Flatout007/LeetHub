function searchMatrix(matrix: number[][], target: number): boolean {

    
    for (let i = 0; i<matrix.length; i++) {
    
        if (matrix[i][matrix[i].length-1] >= target) {
            
            const index = search(matrix[i], target);
            
            if (index >= 0)
            return true;
        }
    }
    
    return false;
};

function search(arr, target) {
    
    let left = 0;
    let right = arr.length-1;
    
    while (left <= right) {
        
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target)
            return mid
        else if (target < arr[mid])
            right = mid - 1;
        else 
            left = mid + 1;
    }
    
    return -1;
}