# 03. URLify
# Replace all spaces in a string with '%20'


def rep(string, length):
    return string.strip().replace(' ', '%20')


assert(rep('Mr John Smith     ', 13) == 'Mr%20John%20Smith')
assert(rep(' Mr Aos   Dabbagh   ', 13) == 'Mr%20Aos%20%20%20Dabbagh')
print('All tests passed!')
