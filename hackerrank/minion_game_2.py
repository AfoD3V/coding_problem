def minion_game(string):
    s = len(string)
    vowel = 0
    consonant = 0

    for i in range(s):
        print(i)
        if string[i] in "AEIOU":
            vowel += s - i
        else:
            consonant += s - i

    if vowel < consonant:
        print("Stuart " + str(consonant))
    elif vowel > consonant:
        print("Kevin " + str(vowel))
    else:
        print("Draw")


str_ = "BANANA"

minion_game(str_)