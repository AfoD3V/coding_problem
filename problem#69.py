"""
This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
"""

def largest_product(numbers_list: list) -> int:
    max = 0
    for i in range(len(numbers_list) - 2):
        for j in range(i + 1, len(numbers_list) - 1):
            for k in range(j + 1, len(numbers_list)):
                print(i, j, k)
                if numbers_list[i] * numbers_list[j] * numbers_list[k] > max:
                    max = numbers_list[i] * numbers_list[j] * numbers_list[k]
                else:
                    continue
    print(max)



lst = [-10, -10, 5, 2]
largest_product(lst)