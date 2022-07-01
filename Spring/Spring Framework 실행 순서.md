## Spring Framework 실행순서
https://pro-growth.tistory.com/174
톰캣 실행 전에 web.xml에 전역 파라미터(contextConfigLocation) 설정 => 어떤 객체들을 미리 만들어 놓을지가 작성된 설정파일의 경로 작성
톰캣 실행되면 클래스(리스너)의 이름을 같은 web.xml에 작성. 톰캣을 실행하면 <listener>가 등록되어 있는 ContextLoaderListener 객체를 호출하는데
이 객체는 내부적으로 부모객체를 실행한다. 부모 객체는 ConttextLoaderListener이며, 이 객체에서 Root ApplicationContext를 생성하고 웹과 관련이 없는 객체를 저장한다.
#### 포스팅
https://seongeun-it.tistory.com/238

#### 작성일
2021.11.15

#### 수정됨
2022.06.30