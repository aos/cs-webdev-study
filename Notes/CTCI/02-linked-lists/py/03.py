# 03. Delete Middle Node
# Delete a node in the middle (any node but first or last), given only access
# to the node


from lst import create_list


def delete_mid(node):
    nxt = node.next
    node.data = nxt.data
    node.next = nxt.next
    return True


my_l = create_list(['a', 'b', 'c', 'd', 'e'])
