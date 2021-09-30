
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

i에는 실제적인 값이 담긴다.

