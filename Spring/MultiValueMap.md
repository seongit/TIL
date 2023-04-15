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