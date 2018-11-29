class Stack:
    def __init__(self):
        self.items = []

    def push(self, i):
        return self.items.add(i)

    def pop(self):
        return None if self.is_empty() else self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[-1]
