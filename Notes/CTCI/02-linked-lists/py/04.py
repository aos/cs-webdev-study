# 04. Partition
# Partition a linked list around a value x: all nodes less than x come before
# all nodes greater than or equal to x.
# If x is contained within the list, the values of x only need to be after the
# elements less than x


from lst import Node, create_list


def partition(head, x):
    left = right = None
    curr = prev = head

    while curr:
        if curr < x:
            if not left:
                left = curr

            else:
                temp = Node(curr.data, nxt=curr.next)
                prev.next = curr.next
                temp.next = left.next
                left.next = temp

        if curr >= x:
            if not right:
                right = curr
            prev = curr

        curr = curr.next

    return head


def part_v2(node, x):
    head = node
    tail = node

    while node:
        nxt = node.next
        if node < x:
            node.next = head
            head = node
        else:
            tail.next = node
            tail = node

        node = nxt

    tail.next = None
    return head


my_l = create_list([3, 2, 8, 4, 10, 2, 1])
first = partition(my_l, 5)
second = part_v2(my_l, 5)
