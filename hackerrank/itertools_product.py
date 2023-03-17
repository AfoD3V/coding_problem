from itertools import product
a, b = list(map(int, input().split())), list(map(int, input().split()))
print(" ".join([str(pair) for pair in list(product(a, b))]))

