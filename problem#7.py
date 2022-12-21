"""
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, 
and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
"""



"""Recursive solution"""
def solution(data: str) -> int:
    return helper(data, len(data))

def helper(data: str, k : int) -> int:
    # k == 0 is end of string
    if k == 0:
        # return 1 because every single value in string going to be a first way
        return 1

    # starting point
    s = len(data) - k
    # recursive call
    res = helper(data, k - 1)

    # for k = 0 function is returning 1 and for k = 1 function is returning 0 because initial value
    # have been set already for k = 0
    # if k >= 2 than check if sliced concatenated string from s to s+2 is lower than 27
    if k >= 2 and int(data[s:s+2]) < 27:
        res += helper(data, k - 2)
    return res

x = "121711"
result = solution(x)
print(result)

###############################################################################################################

"""Memoization for better time & space complexity"""

from typing import List


def num_ways(data: str) -> int:
  memo = [0] * (len(data) + 1)
  return helper(data, len(data), memo)


def helper(data: str, k: int, memo: List[int]) -> int:
  # If the length is zero, we have reached the end of the string. Since it is empty, we return 1
  if k == 0:
      return 1
  s = len(data) - k
  # Check if it has been computed already. If so, use that answer.
  if memo[k] != 0:
      return memo[k]
  res = helper(data, k-1, memo)
  # To check if two digits before k are within the permissible range, k must be atleast. Hence we add
  # the condition 'k >= 2' and check the number 'data[s:s+2]' is within [0,26].
  if k >= 2 and int(data[s:s+2]) < 27:
      res += helper(data, k-2, memo)
  memo[k] = res
  return res

y = "121711"
result_2 = num_ways(y)
print(result_2)