시작 - connect - 종료포트 모두 달라야함

nginx <-> tomcat 
tomcat 기준 클라이언트는 nginx임
nginx.config < nginx과 직접적으로 관련되는 환경 설정
default.config < 이건 tomcat이 직접적으로 관련됨

로컬 톰캣에 ssl 적용
server.xml 수정 * hosts 파일에서 설정한 도메인과 일치해야함
hosts 파일 수정 * ip + 원하는 도메인 설정
E.g 10.160.xx.xx test.도메인~

jsp를 컴파일함 

