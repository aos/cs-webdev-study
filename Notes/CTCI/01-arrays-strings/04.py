# 04. Palindrome Permutation
#
# Given a string, write a function to check if it is a permutation
# of a palindrome. A palindrome is a word or phrase that is the same
# forwards and backwards. The palindrome does not need to be limited
# to dictionary words.
#
# Example
# Input: Tact Coa
# Output: True (permutations: "taco cat", "atco cta", etc.)


import collections


def pal_perm(string):
    string = string.replace(' ', '').lower()
    odd = False
    char_count = collections.Counter(string)

    for k, v in char_count.items():
        if len(string) % 2 == 1:
            if char_count[k] % 2 == 1:
                if odd:
                    return False
                odd = True
        else:
            if char_count[k] % 2 == 1:
                return False

    return True


assert(pal_perm('Tact Coa') == True)  # noqa: E721
assert(pal_perm('Race Car') == True)  # noqa: E721
assert(pal_perm('Tact Cob') == False)  # noqa: E721
assert(pal_perm('GOGJ') == False)  # noqa: E721
assert(pal_perm('GOGO') == True)  # noqa: E721
print('All tests passed!')
