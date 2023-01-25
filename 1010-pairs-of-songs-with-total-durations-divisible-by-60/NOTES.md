This is a binary search algorithm that is looking for a number (the "target") that, when added to the current value of an array called "time," will result in a number that is divisible by 60. If the current value of "time" is less than 60, the algorithm will search the right half of the array; otherwise, it will search the left half.
​
​
```
// brute force:
// sum every possible pair checking if its divisible by 60
// binary search:
// for each time[i], binary search for the target.
// The target being any number that sums with time[i] to become divisible by 60.
// after binary search, the number in left or right halves must add up to a multiple of 60 with time[i].
// use a loop to search for that number between left and right, if found, increment the count.
​
// two pointer:
// sort array, use two pointers to check if their sum is divisible by 60 then
// increment or decrement the correct pointer, continue this loop
// until left is greater than right```