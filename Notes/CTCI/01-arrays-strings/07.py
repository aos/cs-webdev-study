# 07. Rotate Matrix
# Given an image represented by an NxN matrix, where each pixel in the image is
# 4 bytes, write a method to rotate the image by 90 degrees. Can you do it in
# place?


def rotate(matrix):
    n = len(matrix)

    for layer in range(n // 2):
        first = layer
        last = n - 1 - layer

        for i in range(first, last):
            offset = i - first
            top = matrix[first][i]  # save top
            # left -> top
            matrix[first][i] = matrix[last - offset][first]
            # bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset]
            # right -> bottom
            matrix[last][last - offset] = matrix[i][last]
            # top -> right
            matrix[i][last] = top

    return matrix


m = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
r = [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]

m2 = [[1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]]
r2 = [[13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]]

assert(rotate(m) == r)
assert(rotate(m2) == r2)
print('All tests passed!')
