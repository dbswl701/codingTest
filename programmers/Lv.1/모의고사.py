
def solution(answers):
    
    st1 = [1, 2, 3, 4, 5]
    st2 = [2, 1, 2, 3, 2, 4, 2, 5]
    st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    answer_num = [0, 0, 0]
    answer = []
    
    for i in range(len(answers)):
        # 각 학생당 정답 맞혔는지 확인
        if st1[i % len(st1)] == answers[i]:
            answer_num[0]+=1
        if st2[i % len(st2)] == answers[i]:
            answer_num[1]+=1
        if st3[i % len(st3)] == answers[i]:
            answer_num[2]+=1
    
    # 최대값 구하기
    max_num = max(answer_num)

    # 최대값인 학생들 번호 뽑기
    for i in range(len(answer_num)):
        if answer_num[i] == max_num:
            answer.append(i+1)
            
    return answer