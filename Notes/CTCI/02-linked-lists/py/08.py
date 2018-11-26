# 08. Loop Detection
# Given a circular linked list, implement an algorithm that returns the node at
# the beginning of the loop


from lst import create_list, append


def loops(head):
    slow = head
    fast = head

    while slow and fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return slow

    return False
