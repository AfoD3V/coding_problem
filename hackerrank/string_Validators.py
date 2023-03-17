"""
Python has built-in string validation methods for basic data. 
It can check if a string is composed of alphabetical characters, alphanumeric characters, digits, etc.

You are given a string .
Your task is to find out if the string  contains: alphanumeric characters, alphabetical characters, 
digits, lowercase and uppercase characters.
"""


def get_validate(text) -> dict:

    validation = [False for _ in range(5)]
    for i in text:
        if i.isalnum():
            validation[0] = True
        if i.isalpha():
            validation[1] = True
        if i.isdigit():
            validation[2] = True
        if i.islower():
            validation[3] = True
        if i.isupper():
            validation[4] = True

    for value in validation:
        print(value)


if __name__ == "__main__":
    s = input()
    get_validate(s)
