CTE(Common Table Expression)는 SQL에서 사용되는 일종의 임시 테이블이다.

- **기본 사용 예시**
    
    ```sql
    WITH cte이름 AS (
      SELECT ...
      FROM 테이블
      WHERE 조건
    )
    SELECT *
    FROM cte이름
    WHERE 다른조건;
    
    ```
    
    위처럼 WITH로 임시 결과셋을 만들고, 바로 아래의 쿼리에서 마치 테이블 처럼 참조하는 구조

- **장점**
  - 복잡한 쿼리를 논리적으로 단계별 분리 가능
  - 하나의 CTE를 여러 번 재사용할 수 있음
  - 재귀 CTE를 통해 트리구조(예: 조직도, 카테고리 계층 등) 쉽게 처리 가능