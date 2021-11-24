import random
n = 0
arr = []

while n < 10:
    n += 1
    num = random.randint(0, 100)
    print(num)
    arr.append(num)

print("Here are the numbers if any: ")

i = 0
for x in arr:
    temp = x % 11
    i += 1
    if temp == 0:
        print(str(i))
        print(str)


