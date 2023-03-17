import string


def print_rangoli(size):
    alph = list(string.ascii_lowercase)
    letter = size - 1
    for i in range((size * 2) - 1):

        lst_left = alph[letter + 1 : size]
        lst_center = [alph[letter]]
        lst_right = lst_left.copy()
        lst_left.reverse()

        whole = lst_left + lst_center + lst_right

        str_ = "-".join(whole)

        print(f"{str_:-^{((size - 1) * 2) * 2 + 1}s}")

        if letter > 0 and i < size - 1:
            letter -= 1
        else:
            letter += 1


if __name__ == "__main__":
    n = int(input())
    print_rangoli(n)
