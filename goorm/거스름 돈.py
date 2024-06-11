money = int(input())

total = 0
for i in [40, 20, 10, 5, 1]:
	total = total + money // i
	money = money % i
print(total)