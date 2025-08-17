/*
# 27. Remove Element

**Difficulty:** Easy  
**Topics:** Array, Two Pointers  

---

## Problem

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**.  
The order of the elements may be changed.  
Then return the **number of elements in `nums` which are not equal to `val`**.

---

## Requirements

To get accepted, you need to:

1. Change the array `nums` such that the first `k` elements contain the elements which are not equal to `val`.
2. The remaining elements of `nums` are not important (beyond index `k`).
3. Return `k`.

---

## Custom Judge

The judge will test your solution with the following code:

```cpp
int[] nums = [...];  // Input array
int val = ...;       // Value to remove
int[] expectedNums = [...]; // Expected answer with correct length
                          // It is sorted with no values equal to val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

Example:

Example 1

Input:
nums = [3,2,2,3], val = 3

Output:
2, nums = [2,2,_,_]

Explanation:
Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (underscores are placeholders).

?

Example 2

Input:
nums = [0,1,2,2,3,0,4,2], val = 2

Output:
5, nums = [0,1,4,0,3,_,_,_]

Explanation:
Your function should return k = 5, with the first five elements containing 0, 1, 3, 0, 4.
The five elements can be returned in any order.
It does not matter what you leave beyond the returned k.

?

Constraints
	•	0 <= nums.length <= 100
	•	0 <= nums[i] <= 50
	•	0 <= val <= 100
*/

// ------------------------------------------------------------------------------------
// SOLUTION O(n^2)
// ------------------------------------------------------------------------------------
function removeElement(nums: number[], val: number): number {
    for (let i: number = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

/*
Explanation:

1. **Reverse Iteration Strategy**: 
   - We iterate through the array from the end (nums.length - 1) to the beginning (0)
   - This approach prevents issues with shifting indices when removing elements

2. **Element Removal Process**:
   - For each element at index i, check if nums[i] === val
   - If true, use splice(i, 1) to remove the element at index i
   - The splice method automatically shifts remaining elements left

3. **Why Reverse Iteration Works**:
   - When removing elements from left to right, removing an element shifts all subsequent elements left
   - This changes the indices of remaining elements, potentially causing us to skip elements
   - By going right to left, we avoid this issue since we're not affecting indices of elements we haven't processed yet

4. **Return Value**:
   - Return nums.length after all removals
   - This gives us the count of remaining elements (those not equal to val)

**Time Complexity**: O(n?) - splice operation is O(n) and we do it up to n times
**Space Complexity**: O(1) - we modify the array in-place
*/

// ------------------------------------------------------------------------------------
// TEST CASES
// ------------------------------------------------------------------------------------

// Test Case 1: Basic removal
console.log("Test Case 1:");
const testNums1: number[] = [3, 2, 2, 3];
const testVal1: number = 3;
console.log("Input: nums =", testNums1, "val =", testVal1);
const result1 = removeElement(testNums1, testVal1);
console.log("Output:", result1, "nums =", testNums1);
console.log("Expected: 2, nums = [2, 2]");
console.log("---");

// Test Case 2: Multiple occurrences
console.log("Test Case 2:");
const testNums2: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
const testVal2: number = 2;
console.log("Input: nums =", testNums2, "val =", testVal2);
const result2 = removeElement(testNums2, testVal2);
console.log("Output:", result2, "nums =", testNums2);
console.log("Expected: 5, nums = [0, 1, 3, 0, 4]");
console.log("---");

// Test Case 3: No occurrences of val
console.log("Test Case 3:");
const testNums3: number[] = [1, 2, 3, 4, 5];
const testVal3: number = 6;
console.log("Input: nums =", testNums3, "val =", testVal3);
const result3 = removeElement(testNums3, testVal3);
console.log("Output:", result3, "nums =", testNums3);
console.log("Expected: 5, nums = [1, 2, 3, 4, 5]");
console.log("---");

// Test Case 4: All elements are val
console.log("Test Case 4:");
const testNums4: number[] = [2, 2, 2, 2];
const testVal4: number = 2;
console.log("Input: nums =", testNums4, "val =", testVal4);
const result4 = removeElement(testNums4, testVal4);
console.log("Output:", result4, "nums =", testNums4);
console.log("Expected: 0, nums = []");
console.log("---");

// Test Case 5: Empty array
console.log("Test Case 5:");
const testNums5: number[] = [];
const testVal5: number = 1;
console.log("Input: nums =", testNums5, "val =", testVal5);
const result5 = removeElement(testNums1, testVal5);
console.log("Output:", result5, "nums =", testNums5);
console.log("Expected: 0, nums = []");
console.log("---");

// Test Case 6: Single element array
console.log("Test Case 6:");
const testNums6: number[] = [1];
const testVal6: number = 1;
console.log("Input: nums =", testNums6, "val =", testVal6);
const result6 = removeElement(testNums6, testVal6);
console.log("Output:", result6, "nums =", testNums6);
console.log("Expected: 0, nums = []");
console.log("---");