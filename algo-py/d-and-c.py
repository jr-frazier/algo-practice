foo = [1, 2, 3, 4]

# find the sum of the provided array using recursion


def bar(arr):

    if arr == []:
        return 0
    else:
        return arr[0] + bar(arr[1:])


print(bar(foo))
print(foo[1:])
