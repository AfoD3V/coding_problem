"""
This problem was asked by Amazon.

Implement a stack API using only a heap. 

A stack implements the following methods:
- push(item), which adds an element to the stack
- pop(), which removes and returns the most recently added element (or throws an error if there is nothing on the stack)

Recall that a heap has the following operations:
* push(item), which adds a new key to the heap
* pop(), which removes and returns the max value of the heap
"""

class StackApi:
    def __init__(self) -> None:
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop_item(self):
        try:
            temp = self.stack.pop()
            print(f"Most recently added element: {temp}")
            print(f"Current length of stack is equal to {len(self.stack)}")
        except IndexError:
            print("Current stack is empty")
        
        



if __name__ == '__main__':

    api_instance = StackApi()
    
    # first case with empty stack
    print("-" * 20)
    print("1st case")
    api_instance.pop_item()

    print("-" * 20)
    print("2snd case")
    # second case with items on stack
    api_instance.push(1)
    api_instance.push(2)
    api_instance.push(3)
    api_instance.pop_item()
    print("-" * 20)
