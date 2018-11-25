# 05. Sum Lists
# Two numbers stored as linked lists, each node contains a digit
# Digits are stored in *reverse order*
# Write a function that adds the two numbers and returns the sum as a list
# Follow-up: forward order lists


from lst import Node, create_list


def sum_lists(first, second):
    curr_first = first
    curr_second = second
    sums = curr_first.data + curr_second.data
    carry = sums // 10

    head = Node(sums % 10)
    curr = head
    curr_first = curr_first.next
    curr_second = curr_second.next

    while curr_first and curr_second:
        sums = curr_first.data + curr_second.data + carry
        carry = sums // 10

        curr.next = Node(sums % 10)
        curr = curr.next
        curr_first = curr_first.next
        curr_second = curr_second.next

    while curr_first:
        sums = curr_first.data + carry
        if sums >= 10:
            carry = 1
            sums = sums % 10
        else:
            carry = 0

        curr.next = Node(sums)
        curr = curr.next
        curr_first = curr_first.next

    while curr_second:
        sums = curr_second.data + carry
        if sums >= 10:
            carry = 1
            sums = sums % 10
        else:
            carry = 0

        curr.next = Node(sums)
        curr = curr.next
        curr_second = curr_second.next

    if carry:
        curr.next = Node(carry)

    return head


def sum_fwd(first, second):
    fs, ss, tot = [[] for _ in range(3)]
    carry = 0
    head = curr = None

    while first and second:
        fs.append(first.data)
        ss.append(second.data)

        first = first.next
        second = second.next

    while first:
        fs.append(first.data)
        first = first.next

    while second:
        ss.append(second.data)
        second = second.next

    while len(fs) > 0 and len(ss) > 0:
        f_num = fs.pop()
        s_num = ss.pop()

        sums = f_num + s_num + carry
        if sums >= 10:
            carry = 1
            sums = sums % 10
        else:
            carry = 0

        tot.append(sums)

    while len(fs) > 0:
        f_num = fs.pop()
        sums = f_num + carry
        if sums >= 10:
            carry = 1
            sums = sums % 10
        else:
            carry = 0

        tot.append(sums)

    while len(ss) > 0:
        s_num = ss.pop()
        sums = s_num + carry
        if sums >= 10:
            carry = 1
            sums = sums % 10
        else:
            carry = 0

        tot.append(sums)

    if carry:
        tot.append(carry)

    head = Node(tot.pop())
    curr = head

    while len(tot) > 0:
        curr.next = Node(tot.pop())
        curr = curr.next

    return head


def sum_recursive(first, second, carry=0):
    if not first and not second and carry == 0:
        return None

    sums = carry

    if first:
        sums += first.data

    if second:
        sums += second.data

    node = Node(sums % 10)

    if (first or second):
        more = sum_recursive(first.next if first else None,
                             second.next if second else None,
                             1 if sums >= 10 else 0)
        node.next = more

    return node


inp_one = create_list([7, 1, 6])
inp_two = create_list([5, 9, 2, 9])
res = sum_lists(inp_one, inp_two)
res_two = sum_fwd(create_list([6, 1, 7]), create_list([2, 9, 5]))
res_rec = sum_recursive(inp_one, inp_two)
res_ans = create_list([2, 1, 9, 9])
res_two_ans = create_list([9, 1, 2])

assert(res == res_ans)
assert(res == res_rec)
assert(res_two == res_two_ans)
print('All tests passed!')
