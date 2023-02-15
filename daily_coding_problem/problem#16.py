"""
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log.
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
"""

class Order:
    # dict var for storing orders in time efficient way
    def __init__(self):
        self.order_id = {}
        self.order_count = 0

    # function for appending new orders
    def record(self, order_id):
        self.order_id[self.order_count] = order_id
        self.order_count += 1

    # getting last order
    def get_last(self, i):
        return self.order_id[i]

e_commerce_orders = Order()

# i which is a number in this loop is representing sample values for records
for i in range(101):
    e_commerce_orders.record(i)

n_record_samples = [5, 44, 99]
for record in n_record_samples:
    print(f"The {record}th record >> {e_commerce_orders.get_last(record)}")

