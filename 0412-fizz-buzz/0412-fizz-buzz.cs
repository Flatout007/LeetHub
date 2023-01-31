public class Solution 
{
    public IList<string> FizzBuzz(int n) 
    {
        IList<string> stringNumbers = new List<string>();
        
        for (int i = 1; i<=n; i++)
        {
            var number = i;
            
            if (number % 3 == 0 && number % 5 == 0) 
            {
                stringNumbers.Add("FizzBuzz");
            }
            else if (number % 3 == 0) 
            {
                stringNumbers.Add("Fizz");
            }
            else if (number % 5 == 0)
            {
                stringNumbers.Add("Buzz");
            }
            else 
            {
                stringNumbers.Add(number.ToString());
            }
        }
        
        return stringNumbers;
    }
}
