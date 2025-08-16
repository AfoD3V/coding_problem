/*
# 1. Two Sum
**Difficulty:** Easy  
**Topics:** Arrays, Hash Table  
**Companies:** ??
---
Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.
You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.
You can return the answer in any order.
---
### Example 1:
**Input:**  
`nums = [2,7,11,15], target = 9`  

**Output:**  
`[0,1]`  

**Explanation:**  
Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.
---
### Example 2:
**Input:**  
`nums = [3,2,4], target = 6`  
**Output:**  
`[1,2]`

---
### Example 3:
**Input:**  
`nums = [3,3], target = 6`  
**Output:**  
`[0,1]`

---
### Constraints:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.
*/

// ------------------------------------------------------------------------------------------------
// Solution O(n)
// ---------------------------------
function twoSum(nums: number[], target: number): number[] {
    let seen: {[key: number]: number} = {};
    seen[nums[0]] = 0;
    for (let i: number = 1; i < nums.length; i++) {
        let check: number = target - nums[i];
        if (check in seen) {
            return [seen[check], i];
        } else {
            seen[nums[i]] = i;
        }
    }
    return []; // Return empty array if no solution found
}

// ------------------------------------------------------------------------------------------------
// Explanation  
// ------------------------------------------------------------------------------------------------
/*
We use a dictionary (seen) to store numbers we’ve already visited along with their indices.
	1.	Start by adding the first number to seen.
	2.	For each next number (nums[i]):
	•	Calculate the complement ? target - nums[i].
	•	If the complement is already in seen, we’ve found two numbers that add to target, so return their indices.
	•	Otherwise, store the current number and its index in seen for future checks.

This way, each number is processed only once ? O(n) time complexity.
*/

// ------------------------------------------------------------------------------------------------
// Test Cases
// ------------------------------------------------------------------------------------------------
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]