def solution(phone_book):
    # 일단 정렬 -> 문자 순으로 정렬 -> 여기서 접두사 있는지 찾기
    phone_book.sort()
    
    for i in range(len(phone_book)):
        if i == 0:
            continue
        if phone_book[i].startswith(phone_book[i-1]):
            return False
    return True