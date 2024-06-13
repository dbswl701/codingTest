N = int(input())
arr = list(map(int, input().split()))

dec_sum = sum(arr)

result = oct(dec_sum)

print(result[2:])