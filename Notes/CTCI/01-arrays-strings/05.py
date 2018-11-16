# 05. One Away
# Three types of edits: insert, remove, or replace. Given two strings, check if
# they are one (or zero) edits away.


def one_away(s1, s2):
    length_s1 = len(s1)
    length_s2 = len(s2)
    one_off = False
    j = 0

    if length_s1 > length_s2:
        if (length_s1 - length_s2 > 1):
            return False
        for i in range(length_s1):

            if i == length_s2:
                return True

            if s1[i] != s2[j]:
                if one_off:
                    return False
                one_off = True
                continue

            j += 1

        return True

    if length_s1 == length_s2:
        for i in range(length_s1):
            if s1[i] != s2[j]:
                if one_off:
                    return False
                one_off = True
            j += 1

        return True

    if length_s1 < length_s2:
        return one_away(s2, s1)


assert(one_away('pale', 'ple') == True)  # noqa: E721
assert(one_away('pales', 'pale') == True)  # noqa: E721
assert(one_away('pale', 'bale') == True)  # noqa: E721
assert(one_away('pale', 'bake') == False)  # noqa: E721
print('All tests passed!')
