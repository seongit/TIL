## UNIX

### UNIX에서의 프로세스 간 통신

각 프로세스는 시스템 호출을 통해 커널의 기능을 사용하며, 

프로세스 간 통신은 1)시그널 2)파이프 3)소켓 등을 사용합니다.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        추가)
커널은 프로세스 관리, 메모리 관리, 저장장치 관리와 같은 운영체제의 핵심적인 기능을 모아놓은 것으로, 자동차에 비유하자면 엔진에 해당한다. 운영체제의 성능은 커널이 좌우한다.
유닉스의 사용자 인터페이스는 셸이라고 한다.

시스템 호출은 커널이 제공하는 시스템 자원의 사용과 연견된 함수이다.
응용 프로그램이 하드웨어 자원에 접근하거나 운영체제가 제공하는 서비스를 이용하려 할 때는 시스템 호출을 사용해야 한다.

시스템 호출과 유사한 용어로 API와 SDK(시스템 개발자용 키트)가 있다. 

시스템호출 : 운영체제가 관리하는 자원을 사용자가 마음대로 사용하게 두면 실수나 악의적인 의도로 시스템 자원을 망가뜨릴 수 있다. 이러한 문제를 예방하기 위해 운영체제는 시스템 자원을 사용자로부터 숨기고 사용자의 요구사항을 처리할 수 있는 인터페이스만 제공한다.

<br>

- 간단한 메시지를 이용하여 통신하는 것으로 초기 UNIX 시스템에서 사용된 **프로세스 간 통신**은? 시그널 Signal
    

- 한 프로세스의 **출력**이 다른 프로세스의 **입력**으로 사용되는 **단반향 통신 방식**은?  파이프 (Pipe)
    

- 프로세스 사이의 대화를 가능하게 하는 **쌍방향 통신** 방식은? 소켓 (Socket)
    
<br>

## UNIX의 파일 시스템

UNIX 파일 시스템의 디렉터리 구조는 트리 구조이다.

여러가지 파일 시스템의 구조가 있지만,

I-node 블록(Index Node Block)은 각 파일에 대한 정보를 저장하고 있는 블록이다.

### I-node에서 관리하는 정보

- 파일 소유자의 식별 번호
- 파일 크기
- 파일의 생성시간
- 파일의 최종 수정 시간
- 파일 링크 수
- 파일이 만들어진 시간

### 소켓
소켓을 이용하는 프로세스간 통신을 네트워킹이라고 한다. 다른 컴퓨터에 있는 함수를 호출하여 통신하는 원격 프로시저 호출도 여기에 해당한다.

양방향 통신 : 데이터를 동시에 양족 방향으로 전송할 수 있는 구조로, 일반적인 통신은 모두 양방향 통신이다. 프로세스 간 통신에서는 소켓 통신이 양방향 통신에 해당한다.

프로시저 호출이 한 컴퓨터에 있는 함수를 호출하는 것이라면, 원격 프로시저 호출은 다른 컴퓨터에 있는 함수를 호출하는 것이다. 

자바와 같은 객체지향 언어에서 다른 컴퓨터에 있는객체의 메소드를 불러와 사용하는 것은 모두 원격 프로시저 호출의 예이다.

네트워크 프로그래밍을 흔히 소켓 프로그래밍이라고 부르는 이유는 네트워킹의 기본이 소켓이기 때문이다. 


클라이언트와 서버가 어떤 절차를 거쳐서 통신하는지를 보여준다. 클라이언 
트와 서버는둘 다 소켓을사용한다. 소켓은 파이프와달리 양방향통신을 지원하고 동기화도 지원한다.

### 작성일
2021.10.04