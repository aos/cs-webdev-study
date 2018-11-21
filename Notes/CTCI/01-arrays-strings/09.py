# 09. String Rotation
# Assume you have a method 'is_substring' which checks if one word is a
# substring of another. Given 2 strings 's1' and 's2', write code to check if
# 's2' is a rotation of 's1' using only one call to 'is_substring'


import collections


def is_rotation(s1, s2):
    if len(s1) != len(s2):
        return False

    double = s2 * 2

    return is_py_substring(s1, double)


def is_substring(target, string):
    """
    Checks to see if target is a substring of string
    """
    table = collections.Counter(target)
    count = len(target)
    end = 0

    while end < len(string):
        if table[string[end]] > 0:
            count -= 1
        elif table[string[end]] <= 0:
            return False

        if count == 0:
            return True

        table[string[end]] -= 1
        end += 1

    return False


def is_py_substring(target, string):
    return target in string


assert(is_rotation('waterbottle', 'erbottlewat') == True)  # noqa: E721
print('All tests passed!')
