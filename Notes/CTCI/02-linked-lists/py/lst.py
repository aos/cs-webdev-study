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


def create_list(arr):
    head = Node(arr.pop(0))
    curr = head

    for i in arr:
        node = Node(i)
        curr.next = node
        curr = curr.next

    return head
