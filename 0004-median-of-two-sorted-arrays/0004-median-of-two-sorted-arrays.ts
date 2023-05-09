function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let m = nums1.length;
  let n = nums2.length;

  if (m > n) {
    [nums1, nums2] = [nums2, nums1]; // ensure nums1 is shorter or equal to nums2
    [m, n] = [n, m];
  }

  let lo = 0;
  let hi = m;

  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2); // binary search on nums1

    // calculate the corresponding index on nums2
    const j = Math.floor((m + n + 1) / 2) - i;

    // check if the middle elements of both arrays form the median
    if (i < m && nums2[j - 1] > nums1[i]) {
      lo = i + 1; // median is on the right side of nums1
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      hi = i - 1; // median is on the left side of nums1
    } else {
      // median found, calculate based on odd/even length
      const maxLeft = i === 0 ? nums2[j - 1] : j === 0 ? nums1[i - 1] : Math.max(nums1[i - 1], nums2[j - 1]);
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }
      const minRight = i === m ? nums2[j] : j === n ? nums1[i] : Math.min(nums1[i], nums2[j]);
      return (maxLeft + minRight) / 2;
    }
  }
};

