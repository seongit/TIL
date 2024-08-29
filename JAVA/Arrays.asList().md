Arrays.asList()

- java.util 패키지의 ArrayList와 다름
- 새로운 원소 추가, 삭제 불가 (remove, add 메서드 x)
- set()은 사용가능
- 원본 배열의 주소값을 가져오기 때문에 수정시, 원본 배열도 함께 바뀜
  위와 같은 이유로 Arrays.asList()는 반만 불변이기 때문에
  Java 9에서 지원하는 List.of()를 사용할 것을 권장!
