"""
Given the participants' score sheet for your University Sports Day,
you are required to find the runner-up score.
You are given  scores. Store them in a list and find the score of the runner-up.

input:
5
2 3 6 6 5

output:
5
"""


# initial part
n = int(input())
arr = map(int, input().split())
# main function part
runner_up = 0
arr = list(arr)
for score in arr:
    if score < max(arr):
        if runner_up == 0:
            runner_up = score
        else:
            if score > runner_up:
                runner_up = score
    else:
        continue
print(runner_up)
