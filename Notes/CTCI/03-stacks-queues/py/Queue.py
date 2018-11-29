class Queue:
    def __init__(self):
        self.items = []

    def add(self, i):
        return self.items.append(i)

    def remove(self):
        return None if self.is_empty() else self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[0]
