"""
Mr. Vincent works in a door mat manufacturing company. One day, he designed a new door mat with the following specifications:

Mat size must be X. ( is an odd natural number, and  is  times .)
The design should have 'WELCOME' written in the center.
The design pattern should only use |, . and - characters.
"""

height, width = list(map(int, (input().split())))
step = 1
for i in range(height):
    if i < int(height / 2):
        print((".|." * step).center(width, "-"))
        step += 2
    elif i == int(height / 2):
        print("WELCOME".center(width, "-"))
        step -= 2
    else:
        print((".|." * step).center(width, "-"))
        step -= 2
