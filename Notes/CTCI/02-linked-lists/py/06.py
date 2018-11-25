# 06. Palindrome
# Check if a linked list is a palindrome


from lst import create_list, reverse


def palin(head):
    arr = []

    while head:
        arr.append(head.data)
        head = head.next

    for i in range(0, len(arr) // 2):
        if arr[i] != arr[len(arr) - 1 - i]:
            return False

    return True


def rev_palin(head):
    return reverse(head) == head


def run_palin(head):
    s = []
    fast = head
    slow = head

    while fast and fast.next:
        s.append(slow.data)
        fast = fast.next.next
        slow = slow.next

    if fast:
        slow = slow.next

    while slow and len(s) > 0:
        temp = s.pop()
        if slow.data != temp:
            return False
        slow = slow.next

    return True


maybe = create_list([1, 2, 2, 1])
yes = create_list([1, 2, 3, 3, 2, 1])
second_yes = create_list([1, 2, 3, 2, 1])
no = create_list([1, 2, 3, 4, 5])

assert(run_palin(maybe) == True)  # noqa: E721
assert(run_palin(yes) == True)  # noqa: E721
assert(run_palin(second_yes) == True)  # noqa: E721
assert(run_palin(no) == False)  # noqa: E721
print('All tests passed!')
