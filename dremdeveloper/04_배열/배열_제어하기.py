def solution(lst):
  return sorted(list(set(lst)), reverse=True)

lst = [4, 2, 2, 1, 3, 4]
result = solution(lst)
print(result)