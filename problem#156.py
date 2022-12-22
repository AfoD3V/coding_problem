"""
This problem was asked by Facebook.

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 3**2 + 2**2 = 9 + 4.

Given n = 27, return 3 since 27 = 3**2 + 3**2 + 3**2 = 9 + 9 + 9.
"""



"""
My comment:

First of all for this task, the smallest number is always to be 1 because of that 1**1 = 1 and 1 * n = n, 
but to finish this challenge lets assume that we are excluding 1 and the max number of added powers
cant be higher than 3. 
"""

class Finder:
    def __init__(self, n):
        # initial value which we want to find
        self.n = n

        # cache for storing already squared numbers
        self.dict_cache = {}

    def find_smallest(self):
        # loop for storing powers of integers in a range n / 2
        for i in range(2, int(self.n / 2)):
            if i not in self.dict_cache.keys():
                self.dict_cache[i] = i * i

        # checking dictionary for existing values
        for k, v in self.dict_cache.items():
            if v == self.n or v*2 == self.n or v*3 == self.n: 
                return f"Number we are looking for is equal to {k}"
            else:
                for i in range(2, len(self.dict_cache)):
                    for j in range(2, len(self.dict_cache)):
                        for k in range(2, len(self.dict_cache)):
                            if self.dict_cache[i] + self.dict_cache[j] == self.n:
                                if self.dict_cache[i] < self.dict_cache[j]:
                                    return f"Number we are looking for is equal to {i} the higher number is equal to {j}"
                                else:
                                    return f"Number we are looking for is equal to {j} the higher number is equal to {i}"
                            elif self.dict_cache[i] + self.dict_cache[j] + self.dict_cache[k] == self.n:
                                if self.dict_cache[i] < (self.dict_cache[j] and self.dict_cache[k]):
                                    return f"Number we are looking for is equal to {i} because {i}**2 + {j} ** 2 + {k} ** 2 = {self.n}"
                                else:
                                    if self.dict_cache[j] < self.dict_cache[k]:
                                        return f"Number we are looking for is equal to {j} because {i}**2 + {j} ** 2 + {k} ** 2 = {self.n}"
                                    else:
                                        return f"Number we are looking for is equal to {k} because {i}**2 + {j} ** 2 + {k} ** 2 = {self.n}"
                                        

if __name__ == "__main__":

    find_number = Finder(27)
    smallest = find_number.find_smallest()
    print(smallest)


        