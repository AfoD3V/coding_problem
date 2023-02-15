"""
This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.
"""


def perfect_number(n):
    lst = []
    i = 19
    while len(lst) < n:
        list_of_numbers = [int(i) for i in str(i)]
        if sum(list_of_numbers) == 10:
            lst.append(i)
        i += 9
    print(lst[n - 1])

perfect_number(2)