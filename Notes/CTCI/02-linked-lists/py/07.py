# 07. Intersection
# Determine if two lists intersect -- return the intersecting node. If the k-th
# node of the first list is the exact same node as the j-th node of the second
# list, they are intersecting

from lst import create_list, prepend


def intersect(l1, l2):
    """
    Time: O(A+B)
    Space: O(1)
    """

    length_l1 = 0
    length_l2 = 0
    curr_l1 = l1
    curr_l2 = l2

    # Get the list lengths
    while curr_l1:
        curr_l1 = curr_l1.next
        length_l1 += 1

    while curr_l2:
        curr_l2 = curr_l2.next
        length_l2 += 1

    # Get the difference based on length
    # Move the head of the long one until they are both the same length
    if length_l1 > length_l2:
        diff = length_l1 - length_l2

        while diff > 0:
            l1 = l1.next
            diff -= 1
    else:
        diff = length_l2 - length_l1

        while diff > 0:
            l2 = l2.next
            diff -= 1

    # Move both points comparing them to each other
    # Return the first equal node -- this is the intersecting node
    while l1 and l2:
        if l1 == l2:
            return l1
        l1 = l1.next
        l2 = l2.next

    return False


base = create_list([6, 7, 8, 9])
h1 = create_list([1, 2, 3])
h2 = create_list([4, 5])

# Prepend each list to the base
h1 = prepend(h1, base)
h2 = prepend(h2, base)

# Find intersecting node
assert(intersect(h1, h2) == base)
print('All tests passed!')
