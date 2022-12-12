"""
This problem was asked by Stripe.
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
"""


def sort_function(lst: list) -> list:
    lst.sort()
    return lst


def main(lst):
    sorted_list = sort_function(lst)
    number_temp = 0
    # for each number in sorted list
    for number in sorted_list:
        # if number is lower or equale to 0 than skip
        if number <= 0:
            continue
        # if number is higher than 0
        elif number > 0:
            # check if temp is still set as 0
            if number_temp == 0:
                # if temp is equale to 0 set a number as a new temp
                number_temp = number
            # else if number temp + 1 is equale to current number from iterration
            elif (number_temp + 1) == number:
                # set number as a new temp and continue
                number_temp = number
                # check if the number is a last number on list
                if number == lst[-1]:
                    print(f"{number + 1} is first missing value")
            # if there is free space between  temp + 1 and num print missing number and break
            elif (number_temp + 1) != number:
                print(f"{number_temp + 1} is first missing value")
                break


if __name__ == "__main__":
    sample_1 = [3, 4, -1, 1]
    sample_2 = [1, 2, 0]
    print("1st set [3, 4, -1, 1]")
    main(sample_1)
    print("2nd set [1, 2, 0]")
    main(sample_2)
