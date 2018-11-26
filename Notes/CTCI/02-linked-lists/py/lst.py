import copy


class Node:
    """
    A node in a linked list
    """
    def __init__(self, data, nxt=None):
        self.data = data
        self.next = nxt

    def __repr__(self):
        nxt = ''
        if self.next:
            nxt = ' -> {}'.format(repr(self.next))

        return '{}({}){}'.format(self.__class__.__name__, self.data, nxt)

    def __eq__(self, other):
        if self.next and other.next:
            if self.data == other.data:
                return self.next == other.next
            else:
                return False

        return self.data == other.data

    def __lt__(self, other):
        o = other.data if isinstance(other, Node) else other
        return self.data < o

    def __gt__(self, other):
        o = other.data if isinstance(other, Node) else other
        return self.data > o

    def __le__(self, other):
        o = other.data if isinstance(other, Node) else other
        return self.data <= o

    def __ge__(self, other):
        o = other.data if isinstance(other, Node) else other
        return self.data >= o


def create_list(arr):
    head = Node(arr.pop(0))
    curr = head

    for i in arr:
        node = Node(i)
        curr.next = node
        curr = curr.next

    return head


def pick_node(head, n):
    curr = head
    count = 0

    while curr:
        count += 1

        if count == n:
            return curr

        curr = curr.next

    return None


def reverse(head):
    curr = copy.copy(head)
    head.next = None
    new_head = head

    while curr.next:
        temp = copy.copy(curr.next)
        temp.next = new_head
        new_head = temp
        curr = curr.next

    return new_head


def prepend(lst, head):
    curr = lst

    while curr.next:
        curr = curr.next

    curr.next = head

    return lst
