"""
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
"""



number_list = [10, 15, 3, 7]
k = 17
done = False

for i in range(len(number_list)):
  if not done:
    for j in range(len(number_list)):
      if j == i:
        continue
      elif number_list[i] + number_list[j] == k:
        print(f"Correct answer is number on index {i} and number on index {j}")
        done = True