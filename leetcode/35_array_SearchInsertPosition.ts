/**
 * # 35. Search Insert Position
 * Difficulty: Easy
 *
 * ## Problem
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * ## Examples
 * - nums = [1, 3, 5, 6], target = 5  -> 2
 * - nums = [1, 3, 5, 6], target = 2  -> 1
 * - nums = [1, 3, 5, 6], target = 7  -> 4
 *
 * ## Constraints
 * - 1 <= nums.length <= 1e4
 * - -1e4 <= nums[i] <= 1e4
 * - nums contains distinct values sorted in ascending order
 * - -1e4 <= target <= 1e4
 */

/**
 * Binary search for the exact index or insertion position.
 * Time: O(log n), Space: O(1)
 */
export function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = (left + right) >> 1; // faster Math.floor((l+r)/2)
  
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  
    // If not found, left is the first index with nums[i] >= target,
    // i.e., the correct insertion position.
    return left;
  }
  
  /* ---------------------------------------------------------------------------
     Explanation
     1) Initialize left=0, right=n-1.
     2) While left <= right:
          - mid = floor((left + right) / 2)
          - if nums[mid] === target -> return mid
          - if nums[mid] < target   -> search right half  (left = mid + 1)
          - else                    -> search left half   (right = mid - 1)
     3) Not found -> return left (insertion index).
  --------------------------------------------------------------------------- */


  console.log(searchInsert([1, 3, 5, 6], 5)); // 2
  console.log(searchInsert([1, 3, 5, 6], 2)); // 1
  console.log(searchInsert([1, 3, 5, 6], 7)); // 4
  console.log(searchInsert([1, 3, 5, 6], 0)); // 0
  console.log(searchInsert([1], 0));          // 0
  console.log(searchInsert([1], 2));          // 1