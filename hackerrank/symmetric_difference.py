m = input()
m_array = set()
m_array.update(list(map(int, input().split())))
n = input()
n_array = set()
n_array.update([int(a) for a in input().split()])

lst = list(m_array.union(n_array) - n_array.intersection(m_array))
lst.sort()
for number in lst:
    print(number)
