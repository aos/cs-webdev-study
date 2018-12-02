# 01. Three in One
# Use a single array to implement 3 stacks
# Use a fixed-size array and shift the elements around based on space

import math


class ThreeStacks:

    def __init__(self, size):
        self.size = size
        self.mem = [None] * size
        self.offsets = [i * math.ceil(size / 3) for i in range(3)]

    def add(self, stack, i):
        loc = self.offsets[stack]
        next_loc = (loc + 1) % self.size

        # The stack has not used all of its alotted space
        if not self.mem[loc]:
            self.mem[loc] = i
        # All alotted space used, encroaching into next stack
        elif not self.mem[next_loc]:
            self.mem[next_loc] = i
            self.offsets[stack] = next_loc
        else:
            print('Fail: array current state:', self.mem)
            return False

        print('Success: array current state:', self.mem)
        return True

    def pop(self, stack):
        loc = self.offsets[stack]

        if not self.mem[loc]:
            return False

        value = self.mem[loc]
        self.mem[loc] = None
        prev_loc = (loc - 1) % 3
        prev_stack = stack - 1

        if not self.offsets[prev_stack] == prev_loc:
            self.offsets[stack] = prev_loc

        return value

    def peek(self, stack):
        loc = self.offsets[stack]
        return self.mem[loc]
