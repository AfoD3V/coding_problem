"""
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.
"""

class Code:
    def __init__(self, data) -> None:
        self.data = [letter for letter in data]

    def code(self):
        temp_dict = {}
        counter = 0
        for n, element in enumerate(self.data):
            if n == 0:
                temp_dict[counter] = [element]
            elif self.data[n] == self.data[n - 1]:
                temp_dict[counter] += element
            else:
                counter += 1
                temp_dict[counter] = [element]
    
        result_string = ""

        for i in temp_dict.values():
            result_string += str(len(i))
            result_string += i[0]
            
        return result_string

    def decode(self, data):
        result_string = ""
        for n, element in enumerate(data):
            if n % 2 == 0:
                continue
            else:
                result_string += f"{element}" * int(data[n - 1])
        return result_string
        
        



if __name__ == "__main__":
    
    data = "AAAABBBCCDAA"
    code_instance = Code(data)
    coded_string = code_instance.code()
    decoded_string = code_instance.decode(coded_string)

    assert data == decoded_string, "Something goes wrong on decoding!"