/*
## 66. Plus One

You are given a large integer represented as an integer array `digits`, 
where each `digits[i]` is the i-th digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

### Example 1:
Input: digits = [1,2,3]  
Output: [1,2,4]  
Explanation: The array represents the integer 123.  
Incrementing by one gives 123 + 1 = 124.  
Thus, the result should be [1,2,4].

### Example 2:
Input: digits = [4,3,2,1]  
Output: [4,3,2,2]  
Explanation: The array represents the integer 4321.  
Incrementing by one gives 4321 + 1 = 4322.  
Thus, the result should be [4,3,2,2].

### Example 3:
Input: digits = [9]  
Output: [1,0]  
Explanation: The array represents the integer 9.  
Incrementing by one gives 9 + 1 = 10.  
Thus, the result should be [1,0].
*/

// -----------------------------------------------------------------
//            SOLUTION
// -----------------------------------------------------------------

function plusOne(digits: number[]): number[] {
    for (let i: number = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else if (digits[i] === 9) {
            if (i === 0) {
                digits[i] = 0;
                digits.unshift(1);
                return digits
            } else {
                digits[i] = 0;
                continue;
            }
            
        }
    }
}

/* 
--------------------------------------------------------------------
        Explanation
--------------------------------------------------------------------

Imagine a row of boxes, each box holds one digit.
We want to add 1 to the number made by all the boxes.

What we do (like counting on a car odometer):
	1.	Start at the last box on the right.
That’s the “ones” place.
	2.	If that box is 0–8:
Just put one more in it (e.g., 7 ? 8) and we’re done. No other boxes change.
	3.	If that box is 9:
9 can’t become 10 in one box, so we turn it into 0 and carry a 1 to the box on the left.
Now repeat the same idea with that left box.
	4.	Keep moving left while you see 9s:
Every 9 turns to 0, and you keep carrying the 1 leftward.
	5.	If you carried past the first box (everything turned to 0):
Put a new box with 1 at the very front.
Example: [9] ? [1,0], [9,9,9] ? [1,0,0,0].

Quick examples
	•	[1,2,3] ? last box is 3 ? add 1 ? [1,2,4] (stop)
	•	[1,2,9] ? 9 becomes 0, carry ? left box 2 becomes 3 ? [1,3,0] (stop)
	•	[9,9] ? last 9 ? 0, carry; first 9 ? 0, carry past left ? add new 1 ? [1,0,0]

Why this is efficient
	•	You touch each box at most once, from right to left.
	•	Worst case (all 9s), you visit all boxes ? O(n) time.
	•	You don’t use extra space except maybe adding one new box at the front.

That’s the whole trick: add 1 at the end, turn 9s into 0s, and carry left until you don’t need to anymore.
*/