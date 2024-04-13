## Scheduler의 종류
- Schedulers.immediate()는 별도의 스레드를 추가적으로 생성하지 않고, 현재 스레드에서 작업을 처리한다.
- Schedulers.single()은 스레드 하나만 생성해서 Scheduler가 제거되기 전까지 재사용한다.
- Schedulers.boundedElastic()은 ExecutorService 기반의 스레드 풀을 생성한 후, 그 안에서 정해진 수만큼의 스레드를 사용하여 작업을 처리하고 작업이 종료된 스레드는 반납하여 재사용한다.
- Schedulers.boundedElastic()은 Blocking I/O 작업에 최적화되어 있다.
- Schedulers.parallel()은 Non-Blocking I/O에 최적화되어 있는 Scheduler로서 CPU 코어 수만큼의 스레드를 생성한다.
- Schedulers.newSingle(), Schedulers.newBoundedElastic(), Schedulers.newParallel() 메서드를 사용해서 새로운 Scheduler 인스턴스를 생성할 수 있다.

#### 출처
스프링으로 시작하는 리액티브 프로그래밍 > Chapter 10. Scheduler

#### 작성일
2024.04.13