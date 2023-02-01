
public class Solution
{
     
    public int[] PivotArray(int[] nums, int pivot) 
    {
        
        /*
            use three loops to check if nums[i] is less than, equal to, and greater than pivot respectfullly.
            storing those elements in a new array.
        */
        
        var newNums = new int[nums.Length];
        
        var p = new Program(nums, pivot, 0, newNums);
        
        return p.Part();
    }
    
    
}

class Program 
{
    public Program(int[] nums, int pivot, int k, int[] newNums)
    {
        this.Pivot = pivot;
        this.N = nums.Length;
        this.Nums = nums;
        this.NewNums = newNums;
        this.K = k;
    }
    
    public void GetLessThan()
    {
        for (int i = 0; i<N; i++) 
        {
            var number = this.Nums[i];
            
            if (number < this.Pivot)
            {
                this.NewNums[this.K++] = number;
            }
        }
    }
    
    public void GetEqualTo()
    {
        for (int i = 0; i<this.N; i++)
        {
            var number = this.Nums[i];
            
            if (number == this.Pivot)
            {
                this.NewNums[this.K++] = number;
            }
        }
    }
    
    public void GetGreaterThan()
    {
        for (int i = 0; i<this.N; i++)
        {
            var number = this.Nums[i];
            
            if (number > this.Pivot)
            {
                this.NewNums[this.K++] = number;
            }
        }
    }
    
    public int[] Part()
    {
        this.GetLessThan();
        this.GetEqualTo();
        this.GetGreaterThan();
        
        return this.NewNums;
    }
    
    public int Pivot  { get; private set; }
    public int[] Nums { get; private set; }
    public int N {get; private set;}
    public int[] NewNums {get; internal set;}
    public int K {get; set;}
}


