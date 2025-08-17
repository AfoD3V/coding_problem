/*
# 26. Remove Duplicates from Sorted Array ?

**Difficulty:** Easy  
**Topics:** Arrays  
**Companies:** ??  
**Hint Available**

---

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the **same**. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

---

## Custom Judge:

The judge will test your solution with the following code:

```cpp
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

// -----------------------------------------------------------------------------------------------------
//     SOLUTION
// -----------------------------------------------------------------------------------------------------

function removeDuplicates(nums: number[]): number {
    let k: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i];
        };
    };
    return (k + 1);
};

// ----------------------------------------------------------------------------------------------------
// Explanation
// ----------------------------------------------------------------------------------------------------
/*
	1.	Sorted input assumption: Because the array is non-decreasing, duplicates are always adjacent.
	2.	Two pointers:
	•	k ? the write pointer, points to the last unique element found.
	•	i ? the read pointer, scans through the array.
	3.	Loop: For each element at i:
	•	If nums[i] == nums[k]: skip (duplicate).
	•	If nums[i] != nums[k]: move k forward and copy nums[i] into nums[k].
	4.	Return value: The number of unique elements is k + 1 (because k is zero-based index).
*/

// ----------------------------------------------------------------------------------------------------
// Test Cases
// ----------------------------------------------------------------------------------------------------

// Test Case 1: Basic case with duplicates
const dupNums1: number[] = [1, 1, 2];
console.log("Test Case 1:");
console.log("Input:", dupNums1);
const dupK1 = removeDuplicates(dupNums1);
console.log("Output:", dupK1, "nums =", dupNums1.slice(0, dupK1));
console.log("Expected: 2, nums = [1, 2]");
console.log("---");

// Test Case 2: Multiple duplicates
const dupNums2: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Test Case 2:");
console.log("Input:", dupNums2);
const dupK2 = removeDuplicates(dupNums2);
console.log("Output:", dupK2, "nums =", dupNums2.slice(0, dupK2));
console.log("Expected: 5, nums = [0, 1, 2, 3, 4]");
console.log("---");

// Test Case 3: No duplicates
const dupNums3: number[] = [1, 2, 3, 4, 5];
console.log("Test Case 3:");
console.log("Input:", dupNums3);
const dupK3 = removeDuplicates(dupNums3);
console.log("Output:", dupK3, "nums =", dupNums3.slice(0, dupK3));
console.log("Expected: 5, nums = [1, 2, 3, 4, 5]");
console.log("---");

// Test Case 4: Single element
const dupNums4: number[] = [1];
console.log("Test Case 4:");
console.log("Input:", dupNums4);
const dupK4 = removeDuplicates(dupNums4);
console.log("Output:", dupK4, "nums =", dupNums4.slice(0, dupK4));
console.log("Expected: 1, nums = [1]");
console.log("---");

// Test Case 5: All same elements
const dupNums5: number[] = [2, 2, 2, 2, 2];
console.log("Test Case 5:");
console.log("Input:", dupNums5);
const dupK5 = removeDuplicates(dupNums5);
console.log("Output:", dupK5, "nums =", dupNums5.slice(0, dupK5));
console.log("Expected: 1, nums = [2]");
console.log("---");