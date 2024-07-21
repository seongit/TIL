ERROR: Error during SonarQube Scanner execution

ERROR: Error during SonarQube Scanner execution

java.lang.IllegalStateException: Unable to load component class org.sonar.scanner.report.ActiveRulesPublisher

https://github.com/SonarSource/sonar-dotnet/issues/307

- stop the SonarQube server
- purge the {SONAR_QUE}/data/es folder
- restart the SonarQube server
- relaunch the project analysis

/data/es7라는 폴더 삭제했다.

소나큐브 올라오면서 해당 폴더는 다시 생성됨
