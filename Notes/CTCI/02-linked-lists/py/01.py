# 2.1 Remove Dups
# Write code to remove duplicates from an unsorted linked list
# Follow-up: Solve this without a temporary buffer

from lst import create_list


def remove_dups(lst):
    """
    Time: O(n)
    Space: O(n)
    """
    buffer = {}
    curr = lst
    prev = None

    while curr.next:
        if curr.data in buffer:
            prev.next = curr.next
        else:
            buffer[curr.data] = True
            prev = curr

        curr = curr.next

    return lst


# Follow-up -> Not using a temp buffer
def no_buff(lst):
    """
    Time: O(n^2)
    Space: O(1)
    """
    curr = lst
    prev = lst

    while curr:
        runner = curr.next
        prev = curr

        while runner:
            if runner.data == curr.data:
                prev.next = runner.next
            else:
                prev = runner

            runner = runner.next

        curr = curr.next

    return lst


arr = [1, 1, 2, 2, 6, 1, 3, 4, 8, 2, 1]
dup_list = create_list(arr)
correct_list = create_list([1, 2, 6, 3, 4, 8])
wrong_list = create_list([1, 8, 2, 6])
result = remove_dups(dup_list)
again = no_buff(dup_list)
assert(result == correct_list)
assert(again == correct_list)
print('All tests passed!')
