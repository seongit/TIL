OS : Window 



\가 아닌 ^를 사용하면 된다. 

(\ 사용하면 단일 명령어로 인식됨)

```jsx
mvn sonar:sonar ^
  -Dsonar.projectKey=test ^
  -Dsonar.host.url=http://localhost:9000 ^
  -Dsonar.login=2bec3ac33001c7eda86c733eac40bd416e96207d
```