
byte : -128 ~ 12 
short : -32,xxx ~ 32,xxx
int : -2억,xxx ~ 2억,xxx
long : 
double : 

문자처리에는 
String 클래스랑
그 문자열 이상을 처리하면 4096byte를 넘으면 안됨

그래서 그 이상의 범위의 데이터를 처리할 때는  StringBuffer 클래스 자주 사용함 = 큰 문자열을 사용하기 위함

sql문을 때리면 StringBuffer클래스를 사용하는게 좋음
명시적으로 객체가 파기되는 메커니즘이 빨리 수행된다.
heap 영역에 StringBuffer는 메모리를 효율적으로 사용할 수 있다.

Object 클래스에서 toString() 객체를 정보를 문자열을 제공하기 위해서 디버그할 때 많이 사용함

데이터 타입도 클래스로 되어있다.
Calendar 클래스가 가장 기본적인 클래스
자바 1.8부터 지원

SimpleDataFormat
데이터 포맷은 언어마다 조금씩 다르다.
밀리세컨즈는 대문자 S


리스트
순서 O 중복 O
셋
순서 X 중복 X
MAP
순서 X 키는 중복 X 값은 중복 O

순서를 보장하고 싶으면
List에 MAP을 넣어야함

'동시성' > 쓰레드에서 어떤 값을 참조할 때 문제가 생길 수 있어서

순차적 데이터 접근은  : ArrayList (for loop)
랜덤하게 데이터를 접근할 일이 있다면 : LinkedList (인덱스를 받아서 데이터를 꺼내올때)

대부분은 큐 방식이다.

배열 초기값 세팅 시 fill(), setAll()
배열을 리스트로 변환
배열을 정렬할 수 있다.

열거형 : 상수의 묶음
그린피스 할 때 
state의 상태값 = 상수값
열거형이 있으면 가독성이 높아짐
(= 열거형 : 논리적임 이름을 정할 수 있음)
같은 데이터 타입만 가능

@Inherited
@Override
@SupperessWarnings

====================================

13장 쓰레드