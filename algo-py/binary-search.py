"""
    How many steps would it take to search through a list of 128 name using binary search?
"""

number_of_steps = 128

def listNumOfSteps(num: int):
    steps = 0

    while num > 1:
        num = (1 + num) // 2
        steps += 1
    
    return steps
print("How many steps would it take to search through a list of 128 name using binary search?")
print(listNumOfSteps(number_of_steps))
