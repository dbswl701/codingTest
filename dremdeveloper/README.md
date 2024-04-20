[코딩 테스트 합격자 되기 - 파이썬 편]을 읽으며 저자가 출제한 문제를 풀이한 코드 기록

(기존 코드도 깃허브에 공개되어있음)


## 정리
### 배열 선언
- 일반적인 방법
```
arr = [0, 0, 0, 0, 0, 0]
arr = [0] * 6
```
- 리스트 생성자를 사용하는 방법
```
arr = list(range(6)) # [0, 1, 2 ,3, 4, 5]
```
- 리스트 컴프리헨션을 활용하는 방법
```
arr = [0 for _ in range(6)]
```

### 시간복잡도
- 임의접근 = O(1)
- 맨 뒤에 삽입 = O(1)
- 맨 앞, 중간에 삽입 = O(N)

### 선택 시 고려 사항
-데이터에 자주 접근 및 읽는 경우 좋은 성능
- ex) 그래프 표현 시 임의 접근을 할 수 있기에 간선 여부도 O(1)로 표현 가능
- 단점: 메모리 공간을 충분히 확보해야함
- 정수형 1차원 배열은 1000만개, 2차원 배열은 3000*3000 크기가 최대
- 중간이나 처음에 데이터 삽입이 빈번하면 x

### 문법
#### 리스트에 데이터 추가
- append(v) : 맨 끝
- '+' : 끝에 다른 리스트 쿠가
- insert(idx, v): 특정 위치에 데이터 삽입

### 리스트에서 데이터 삭제
- pop(idx) : 특정 인덱스 삭제 후 값 반환
- remove(v) : 값이 처음 등장하는 위치의 데이터 삭제

### 리스트 컴프리헨션으로 데이터에 특정 연산 적용
- 기존 리스트를 기반해 새 리스트를 만들거나 반복문, 조건문을 이용해 복잡한 리스트를 생성
```
numbers = [1, 2, 3, 4, 5]
square = [num**2 for num in numbers] # [1, 4, 9, 16, 25]
```

### 유용한 메서드
- len(): 길이 반환
- index(): 특정 데이터가 처음 등장한 인덱스 반환. 없으면 -1
- sort(): 데이터 기본 오름차순 정렬, reverse=True 옵션은 내림차순
- count(): 특정 데이터 개수 반환

---
- 파이썬의 정렬 함수 sort의 시간복잡도는 O(NlogN)이다
- sort는 원본 배열을 수정한다
- 원본 배열을 유지하고 싶다면
```
sorted_list = list(sort(arr))
```
을 사용한다