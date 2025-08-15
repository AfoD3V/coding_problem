/*
# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.  
If there is no common prefix, return an empty string `""`.

## Example 1
Input: `strs = ["flower","flow","flight"]`  
Output: `"fl"`

## Example 2
Input: `strs = ["dog","racecar","car"]`  
Output: `""`  
Explanation: There is no common prefix among the input strings.

## Constraints
- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.
*/

// ------------------------------------------------------------------------------------------------
// Solution O(n)
// ------------------------------------------------------------------------------------------------

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
  
    // Start with the first string as a candidate prefix
    let prefix = strs[0];
  
    // For each other string, shrink prefix until it matches
    for (const s of strs.slice(1)) {
      while (!s.startsWith(prefix)) {
        prefix = prefix.slice(0, -1); // remove last char
        if (prefix === "") return "";
      }
    }
  
    return prefix;
  }

// ------------------------------------------------------------------------------------------------
// Explanation  
// ------------------------------------------------------------------------------------------------
/*
We use a "shrinking prefix" approach where we start with the first string as our candidate prefix and gradually reduce it until it becomes a common prefix for all strings.

**Step-by-Step Process:**
1. **Edge Case Check**: If the array is empty, return empty string ""
2. **Initialize Prefix**: Start with the first string (strs[0]) as our candidate prefix
3. **Iterate Through Remaining Strings**: For each string starting from the second one
4. **Shrink Prefix if Needed**: If a string doesn't start with our prefix, remove the last character
5. **Return Result**: Return the final prefix that works for all strings

**Key Insights:**
- We start with the longest possible prefix and shrink it, ensuring we find the longest common prefix
- If prefix becomes empty, we know no common prefix exists
- Each string is processed efficiently using the startsWith() method

**Time Complexity:** O(n) where n is the total number of characters across all strings
**Space Complexity:** O(1) as we only store the prefix string
*/

// ------------------------------------------------------------------------------------------------
// Test Cases
// ------------------------------------------------------------------------------------------------
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["hello","hello","hello"])); // "hello"
console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // "inters"