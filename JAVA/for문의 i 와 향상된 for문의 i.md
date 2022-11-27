
# for문의 i와 향상된 for문의 i 차이점


```java
public class Exam 
{
	public static void main(String[] args){
		int [] = new int[5];
		int sum = 0;
	
   1)
		for(int i=0;i<5;i++){
			sum += a[0]
		}
		
	 2)
		for(int i : a){
			sum += i;
		}
	}
}
```
<br><br>

## for문의 i

```java
for(int i=0;i<5;i++){
	sum += a[0]
}
```

여기서의 int의 i는 인덱스로 사용되었다.
실제 i는 최초의 0에서부터 1씩 증가해서 5까지 반복한다. 

반복의 횟수와 배열의 인덱스의 i번째를 의미하는 것이다.

i가 0부터 5까지의 순서가 들어감
<br><br>

## 향상된 for문의 i

```java
for(int i : a){
	sum += i;
}
```

향상된 for문에서는 a가 존재하는 모든 요소이기 때문에 첫 번째 요소값 1이 실제로 i에 담기게 된다. 그 다음 값인 2,3,4,5  모두 i에 담기게 되는 것이다.
인덱스의 값이 변화하는 경우에는 향상된 for문보다 일반 for문을 사용해야함
i에는 실제적인 값이 담긴다.

do-while문 
논리적 에러를 범하지 않게 하기 위해 사용함

switch문
if문이 3개 있으면 switch문으로 돌리는게 좋음

for문 안에 switch문 사용 가능
* 주의 사항 
for문 안에서 선언하면 안됨
중첩된 for문에서는 switch문보다 if문으로 처리하는 것이 더 좋음

for문이  while 보다 처리 속도가 빠름
for문을 기반으로 while문이 만들어졌다고 생각하면 됨
반복문은 for문을 사용하면 됨
바깥에서 문제를 정리해서 하는 것이 좋음 
continue는 논리적인 모순에 빠질 가능성이 높음

수정일
2022.11.23
