if __name__ == '__main__':
    """
    Given the names and grades for each student in a class of  students, 
    store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

    Note: If there are multiple students with the second lowest grade, 
    order their names alphabetically and print each name on a new line.
    """

    # container for storing pairs [name, score]
    records = {}

    # input loop
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records[name] = score

    # lowest value from all records
    lowest_score = min(records.values())

    # Variable to store second-lowest value
    second_lowest_score = None

    # loop for checking which condition is second lowest
    for score in records.values():
        if score > lowest_score:
            if second_lowest_score is None:
                second_lowest_score = score
            elif score < second_lowest_score:
                second_lowest_score = score
            else:
                continue
        else:
            continue

    # list of all name's with second-lowest score
    list_of_lower_scores = [name for name in records.keys() if records[name] == second_lowest_score]
    list_of_lower_scores.sort()

    for name in list_of_lower_scores:
        print(name)
        