함수 선언식은 코드가 실행되기 전에 로드되지만, 함수 표현식은 인터프리터가 해당 코드 줄에 도달 할 때만 로드된다.

함수 선언식은 var 문과 유사하게 호이스팅(호이스팅 이란?) 된다.

반면, 함수 표현식은 호이스팅되지 않으므로 정의 된 범위에서 로컬 변수의 복사본을 유지할 수 있다.

일반적으로 함수 선언식과 함수 표현식은 함께 사용할 수는 있지만,

함수 표현식은 함수 이름이 필요없기에 가독성이 더 높은 장점이 있다.

함수 선언식 function 함수명() {
  구현 로직
}

함수 표현식 - Function Expressions
유연한 자바스크립트 언어의 특징을 활용한 선언 방식