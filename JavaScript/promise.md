promise는 마이크로태스크 큐에 쌓이기 때문에 먼저 들어온 작업을 먼저 실행함

Promise는 비동기 작업을 수행하는 함수가 프로미스의 객체를 반환하는데 그 생성자에 두 개의 인자가 들어가는데 첫 번째는 수행할 비동기 작업 두 번째 인자에는 작업한 결과물을 콜백함수에 전달하는 함수가 들어갑니다 그리고 해당 함수에 resolve 성공과 reject 실패도 할 수 있습니다

https://ko.javascript.info/microtask-queue