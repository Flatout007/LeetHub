## 🚀 Algorithm
​
## This algorithm is used to find the minimum path sum from the top-left to the bottom-right corner of a grid by only moving down or right.
​
# 1. Traverse the grid backwards starting from the last row and last column.
# 2. For each row in the grid,
# - a. If the current element is not on the last column of the row, accumulate it with the element to its right, overwriting the current element.
# -b. If the current element is not on the last row of the grid, accumulate it with the element directly below it, overwriting the current element.
# c. If the current element is not on the last row or column of the grid, accumulate it with the minimum of the element directly below and the element to its right, overwriting the current element.
# 3.Return the first element of the grid, which will have the minimum sum.
​