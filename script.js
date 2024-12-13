function threeSum(arr, target) {
  //your code here
	function threeSum(S, target) {
  // Sort the array
  S.sort((a, b) => a - b);

  // Initialize the closest sum to a large number
  let closestSum = Infinity;

  // Loop through the array
  for (let i = 0; i < S.length - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && S[i] === S[i - 1]) continue;

    let left = i + 1;
    let right = S.length - 1;

    // Use two pointers to find the closest sum
    while (left < right) {
      const currentSum = S[i] + S[left] + S[right];

      // If the current sum is closer to the target, update closestSum
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Move the pointers
      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        // If currentSum is equal to target, we have found the closest sum
        return currentSum;
      }
    }
  }

  // Return the closest sum
  return closestSum;
}

}

module.exports = threeSum;
