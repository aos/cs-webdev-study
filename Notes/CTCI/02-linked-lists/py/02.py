# 02. Return Kth to Last
# Find the kth to last element of a singly linked list


from lst import create_list


def kth(lst, k):
    curr = lst
    length = 0
    n = 0

    # Get the length of the list
    while curr:
        length += 1
        curr = curr.next

    curr = lst
    while curr:
        n += 1
        if k == length - n + 1:
            return curr.data
        curr = curr.next

    return False


my_l = create_list([1, 2, 3, 4, 5])
assert(kth(my_l, 2) == 4)
assert(kth(my_l, 3) == 3)
print('All tests passed!')
