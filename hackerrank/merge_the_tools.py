def merge_the_tools(string, k):
    list_of_sequences = []
    start, end = 0, k
    for i in range(int(len(string) / k)):
        temp = ""
        for j in string[start:end]:
            if j not in temp:
                temp += j
        list_of_sequences.append(temp)
        start += k
        end += k
    for _ in list_of_sequences:
        print(_)


if __name__ == "__main__":
    string, k = input(), int(input())
    merge_the_tools(string, k)
