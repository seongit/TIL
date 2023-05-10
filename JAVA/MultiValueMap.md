# `MultiValueMap` / `LinkedMultiValueMap` / **`.accept(MediaType.APPLICATION_JSON)` /**  **`BodyInserters.fromFormData(formData)`**

- `MultiValueMap` → 자바에 기본 내장된 인터페이스가 아니라 스프링에서 제공하는 인터페이스임
    - MultiValueMap이 Map 인터페이스를 상속할 때 Value값을 List로 감싼 채로 상속받는 것을 볼 수 있다.
    - 여러 값을 저장하는 맵 인터페이스의 확장
    - 일반적인 Map을 구현한 HashMap의 인스턴스인 basicMap은 Key가 중복될 수 없다. 따라서 마지막으로 put된
        
        ```
        basicMap.put("test",2)
        ```
        
        가 최종적으로 Map에 저장된다.
        
        multiValueMap은 put은 아니지만 add를 하는 경우에 Key값이 중복되면 해당 Key값에 List로 모두 들어가는 것을 볼 수 있다.
        
    - Map을 사용하고 싶은데, 중복된 키로 여러 Value 값을 온전히 저장하고 싶을 때 사용하면 좋다.
- `LinkedMultiValueMap`
    - LinkedMultiValueMap은 입력 순서를 유지하는 링크드 리스트(Linked List) 기반의 자료구조입니다. 따라서 데이터의 입력 순서를 유지해야 할 경우에 유용하게 사용할 수 있습니다. LinkedMultiValueMap은 Spring MVC, Spring Webflux 등의 모듈에서 HTTP 요청 파라미터, 폼 데이터, 쿼리 파라미터 등을 다룰 때 자주 사용되며, 다양한 상황에서 효과적으로 데이터를 관리할 수 있도록 도와줍니다.
- `.accept(MediaType.*APPLICATION_JSON*)`
    - 결론적으로, **`.accept(MediaType.APPLICATION_JSON)`**
    는 웹 클라이언트가 서버로부터 JSON 형식의 응답을 요청하기 위해 명시적으로 사용되며, 데이터의 형식 지정, 효율적 전송, 보안 및 안정성 측면에서 장점을 가지고 있습니다.
- `.headers(httpHeaders -> httpHeaders.setBasicAuth(sonarqubeId, sonarqubePassword))`
    - **`.headers(httpHeaders -> httpHeaders.setBasicAuth(sonarqubeId, sonarqubePassword))`**
    에서 **`->`**
    를 사용하는 이유는 람다 표현식(lambda expression)을 사용하여 **`httpHeaders`**
     객체의 **`setBasicAuth()`**
     메서드를 호출하여 HTTP 요청의 헤더에 Basic 인증 정보를 설정하기 위해서입니다.
- `.body(BodyInserters.*fromFormData*(formData))`
    - 따라서, **`BodyInserters`**
    를 사용하는 이유는 Spring WebFlux에서 Reactive Programming 모델을 지원하고, HTTP 요청의 바디를 쉽게 다룰 수 있도록 하기 위함입니다. **`BodyInserters.fromFormData(formData)`**
    는 폼 데이터를 HTTP 요청의 바디에 삽입하는 편리한 방법을 제공하며, 폼 데이터를 인코딩하고 Content-Type을 설정하는 등의 작업을 자동으로 처리해줍니다.
- .log() 메소드:
.log() 메소드는 WebClient의 로깅 기능을 활성화하는 메소드로, 요청 및 응답 정보를 로그에 출력하여 디버깅 및 모니터링에 도움을 줍니다. .log() 메소드를 사용하면 요청과 응답의 다양한 정보를 확인할 수 있으며, 예를 들어 요청 URL, HTTP 메소드, 요청 및 응답 헤더, 응답 상태 코드 등을 로그로 확인할 수 있습니다. 로깅을 통해 웹 서비스와의 통신 과정을 추적하고, 오류를 디버깅하는 데 도움을 줍니다.
- .block() 메소드:
.block() 메소드는 WebClient의 비동기 호출을 동기적으로 블로킹하는 메소드로, 응답이 완전히 도착할 때까지 스레드를 블로킹합니다. 이는 특정 상황에서만 사용되어야 하며, 주로 테스트 코드나 특정 요구사항에 따라 필요한 경우에만 사용됩니다. 일반적으로는 WebClient의 비동기 처리를 활용하여 블로킹을 피하고, 리액티브 프로그래밍의 장점을 살려 비동기적인 처리를 선호합니다.