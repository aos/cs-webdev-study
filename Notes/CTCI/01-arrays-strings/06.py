# 06. String Compression
# Basic string compression using count of repeated characters


def compress(string):
    new_string = ''
    count = 0
    current = string[0]

    for i in string:
        if i == current:
            count += 1
        else:
            new_string += (current + str(count))
            count = 1
            current = i

    new_string += (current + str(count))

    return new_string if len(string) > len(new_string) else string


assert(compress('aabcccccaaa') == 'a2b1c5a3')
assert(compress('aabbde') == 'aabbde')
assert(compress('AAABccEEeee') == 'A3B1c2E2e3')
print('All tests passed!')
