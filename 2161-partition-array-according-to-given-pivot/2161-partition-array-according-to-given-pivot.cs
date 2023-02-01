public class Solution
{
     
    public int[] PivotArray(int[] nums, int pivot) 
    {
        
        /*
            use two pointers to traverse nums while also using two pointers to
            store nums[i] in a new array by simultaneously comparing pointers to pivot and
            updating pointers respectfully.
        */
        
        var PartedNumbers = new int[nums.Length]; 
        var left = 0;
        var right = nums.Length-1;
        
        int i,j;
                                                                        
        for (i = 0, j = nums.Length-1; i<nums.Length; i++, j--)   
        {
            var numberLeft = nums[i];
            var numberRight = nums[j];
            
            if (numberLeft < pivot)
            {
                PartedNumbers[left] = numberLeft;
                left++;
            } 
            
            if (numberRight > pivot)
            {
                PartedNumbers[right] = numberRight;
                right--;
            }
        }
        
        while (left <= right)
        {
            PartedNumbers[left] = pivot;
            
            left++;
        }
        
        return PartedNumbers;
    }
}