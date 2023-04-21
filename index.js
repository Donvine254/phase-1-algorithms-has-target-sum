function hasTargetSum(array, target) {
  //let use Hash table to keep track of numbers seen so far
  //constant time O(1)
  const seen = new Set(); 
  // Iterate over each number in the array O(n)
  for (let number of array) {
    const complement = target - number; // Calculate the complement of the current number O(1)
    // If the complement has been seen before, then we have found a pair that adds up to the target O(1)
    if (seen.has(complement)) {
      return true;
    }
    seen.add(number); // Add the current number to the hash table
  }

  // If we get here, then no pair was found
  return false;
}

/* 
Line 4: O(1) - Creating a new set takes constant time.
Line 6: O(n) - We iterate over each element of the array once.
Line 7: O(1) - Subtracting two numbers takes constant time.
Lines 9-13: O(1) on average - Checking if a set contains a value or adding a value to a set takes constant time on average, but in the worst case it can be O(n).
Line 16: O(1) - Returning a boolean value takes constant time.
the Big O notation will be O(4)+O(n), ignoring the constant, the total time complexity is O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
