##  this problem involves finding the path of the minimized sumin a given matrix, meaning the valid path of elements taken must sum to the smallest sum possible.
​
# This algorithm is used to find the minimum path sum from the top-left to the bottom-right corner of a grid by only moving down or right.
​
# 0. Traverse the grid backwards, starting from the last row and column and moving up.
​
# 1. For each element in the grid, accumulate the element's value with the minimum value of the element to the right and the element below it.
​
# 2. If the current element is in the last row and not in the last column, accumulate the element's value with the element to the right.
​
# 3. If the current element is in the last column and not in the last row, accumulate the element's value with the element below it.
​
# 4. The first element of the grid will have the minimum sum possible, so return that element's value.