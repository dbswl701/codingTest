def solution(numbers):
    answer = set([])
    for i in range(len(numbers)):
        for j in range(0, i):
            answer.add(numbers[i] + numbers[j])
    return sorted(answer)