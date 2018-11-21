# 08. Zero Matrix
# Write an algorithm such that if an element in an MxN matrix is 0,
# its entire row and column are set to 0


def zero(matrix):
    row = [False] * len(matrix)
    column = [False] * len(matrix[0])

    for i, layer in enumerate(matrix):
        for j, num in enumerate(layer):
            if num == 0:
                row[i] = True
                column[j] = True

    for i, layer in enumerate(matrix):
        for j, num in enumerate(layer):
            if row[i]:
                matrix[i][j] = 0
            if column[j]:
                matrix[i][j] = 0

    return matrix


m2 = [[1,  2,  3,  4],
      [5,  6,  0,  8],
      [9,  10, 11, 12],
      [13, 14, 15, 16]]
r2 = [[1,  2,  0,  4],
      [0,  0,  0,  0],
      [9,  10, 0, 12],
      [13, 14, 0, 16]]

assert(zero(m2) == r2)
print('All tests passed!')
