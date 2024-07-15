# 아이디어: 리스트에서 바로 뺀다.
# 시간 초과 나는 코드
def solution(participant, completion):
    # participant에서 completion 하나씩 빼기
    for player in completion:
        participant.remove(player)
    return ''.join(participant)


# 통과 코드
def solution(participant, completion):
    # participant에서 completion 하나씩 빼기
    dict = {}
    
    # 일단 인원 수 대로 저장
    for player in participant:
        if player in dict: 
            dict[player] += 1
        else: 
            dict[player] = 1
    # completion에서 삭제
    for player in completion:
        dict[player] -= 1
        
    # dict에서 남아있는거 출력
    for key, value in dict.items():
        if value != 0: return key
