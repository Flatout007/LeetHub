public class Solution 
{
    public int[] TwoSum(int[] nums, int target) 
    {
        Dictionary<int, int> table = new Dictionary<int, int>();
        int[] results = new int[2];
        
        for (int i = 0; i<nums.Length; i++)
        {
            int difference = target - nums[i];
            
            if (table.ContainsKey(difference))
            {
                results[0] = (int)table[difference];
                results[1] = i;
                
                return results;
            }
            
            if (table.ContainsKey(nums[i]))
                continue;
            
            table.Add(nums[i], i);
        }
        
        return results;
    }
}