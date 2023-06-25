public class Solution 
{
    public int RomanToInt(string s) 
    {
        Dictionary<char, int> table = new Dictionary<char, int>();
        int result = 0;
        
        table.Add('C', 100);
        table.Add('D', 500);
        table.Add('M', 1000);
        table.Add('I', 1);
        table.Add('V', 5);
        table.Add('X', 10);
        table.Add('L', 50);
        
        for (int i = 0; i<s.Length; i++)
        {  
            if (i > 0 && table[s[i]] > table[s[i-1]])
            {
                result += table[s[i]] - (2 * table[s[i-1]]);
            }
            else
            {
                result += table[s[i]];
            }
        }
        
        return result;
    }
}