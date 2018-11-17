# 07. Rotate Matrix
# Given an image represented by an NxN matrix, where each pixel in the image is
# 4 bytes, write a method to rotate the image by 90 degrees. Can you do it in
# place?


def rotate(matrix):

    for i, arr in enumerate(matrix):
        for j in range(len(arr) - 1, -1, -1):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
            print(matrix)


m = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
r = [[3, 6, 9],
     [2, 5, 8],
     [1, 4, 7]]

assert(rotate(m) == r)
