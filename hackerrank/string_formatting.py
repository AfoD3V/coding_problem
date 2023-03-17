def print_formatted(number):
    for i in range(1, number + 1):
        b_len = len(format(number, "b"))
        print(f"{i:{b_len}d} {i:{b_len}o} {i:{b_len}X} {i:{b_len}b}")


if __name__ == "__main__":
    n = int(input())
    print_formatted(n)
