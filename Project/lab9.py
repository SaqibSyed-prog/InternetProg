import random
i = 0
temp = 100

while i < 10: 
    i += 1 
    num = random.randint(0, 100)
    print (num)
    if num < temp:
        temp = num
print ("smallest number: ", temp)

