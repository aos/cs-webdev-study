# 08. Loop Detection
# Given a circular linked list, implement an algorithm that returns the node at
# the beginning of the loop


from lst import Node, create_list, pick_node


def detect_loop(head):
    slow = head
    fast = head
    p2 = None

    while slow and fast:
        slow = slow.next
        fast = fast.next and fast.next.next

        # We detected a loop since the fast pointer and slow pointer have met
        if slow.data == fast.data:
            p2 = slow
            break

    # Assign a pointer at meeting point. Move head pointer and this pointer
    # at the same speed until they meet. This is the start of the loop
    while p2:
        if head.data == p2.data:
            p2.next = None  # Guard against infinite loop when returning
            return p2

        head = head.next
        p2 = p2.next

    # No loop as slow has fallen off and we never assigned p2
    return False


# Test 1
my_l = create_list([1, 2, 3, 4, 5, 6, 7, 8, 9])
start = pick_node(my_l, 5)
loop_node = pick_node(my_l, 9)
# Create the loop
loop_node.next = start
assert(Node(5) == start)

# Test 2
s_l = create_list([1, 2, 3, 4, 5, 6])
start_2 = pick_node(s_l, 2)
loop_node_2 = pick_node(s_l, 6)
# Create loop
loop_node_2.next = start_2
assert(Node(2) == start_2)
print('All tests passed!')
