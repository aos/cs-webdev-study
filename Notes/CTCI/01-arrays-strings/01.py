# 01. Is Unique
# Algorithm to determine if a string has all unique characters
# No additional data structures


def is_unique(string):
    """
    Space: O(n)
    Time: O(n)
    """
    table = {}
    for i in string:
        if i in table:
            return False

        table[i] = True

    return True


def is_unique_no_DSA(string):
    """
    Space: O(1) -- sort of (assuming sorted string takes O(1))
    Time: O(n log n) -- due to sorting
    """
    s = ''.join(sorted(string))
    c = ''
    for i in s:
        if i == c:
            return False
        c = i

    return True


assert(is_unique('abcdefg') == True)  # noqa: E721
assert(is_unique('aabcdefg') == False)  # noqa: E721
assert(is_unique('abcdae') == False)  # noqa: E721
assert(is_unique_no_DSA('abcdefg') == True)  # noqa: E721
assert(is_unique_no_DSA('aabcdefg') == False)  # noqa: E721
assert(is_unique_no_DSA('abcdae') == False)  # noqa: E721
print('All tests passed!')
