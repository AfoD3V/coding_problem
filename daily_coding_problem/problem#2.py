"""
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
"""



# List of numbers to work on
numbers = [3, 2, 1]
# temp list to work on for loops
temp_list = []
# final list
new_list = []
x = 1

# For integer in range of numbers len
for i in range(len(numbers)):
  # For integer in range of numbers but in inner looping
  for j in range(len(numbers)):
    # If i is equale to number of elements in temp_list\
    if j == i:
      # than skip
      continue
    # Otherwise append element to the new list
    else:
      temp_list.append(numbers[j])

  # Multiplication elements of list
  for k in temp_list:
    x = x * k

  # Appending multiplication result to final list
  new_list.append(x)
    

  # temp_list and x reset
  x = 1
  temp_list = []

# Result printing
print(new_list)