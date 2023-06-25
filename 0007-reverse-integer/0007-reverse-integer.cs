public class Solution {
    public int Reverse(int x) {
        
        bool negative = false;
        
        if (x < 0)
        {
            negative = true;
            x = -1 * x;
        }
        
        long result = 0;
        
        while (x > 0)
        {
            result = (result * 10) + (x % 10);
            x /= 10;
        }
        
        if (result > int.MaxValue)
        {
            return 0;
        }
        
        if (negative == false)
        {
            return (int)result;
        }
        else
        {
            return (int)(-1 * result);
        }
    }
}