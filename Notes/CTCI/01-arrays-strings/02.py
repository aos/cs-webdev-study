# 02. Check Permutation
# Given two strings write a method to decide if one is a permutation of other

import collections


def perms(s1, s2):
    string_map = collections.defaultdict(int)

    for i in s1:
        string_map[i] += 1

    for j in s2:
        string_map[j] -= 1

        if string_map[j] < 0:
            return False

    return True


assert(perms('abc', 'cba') == True)  # noqa: E721
assert(perms('abc', 'bca') == True)  # noqa: E721
assert(perms('abc', 'dbc') == False)  # noqa: E721
assert(perms('ab', 'abc') == False)  # noqa: E721
assert(perms('alaskdjfb', 'dbc') == False)  # noqa: E721
print('All tests passed!')
