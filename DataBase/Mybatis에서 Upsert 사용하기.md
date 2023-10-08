## [Mybatis] foreach insert duplicate update 처리하기

* 다중 insert문은 다음과 같다.

```sql 
<insert id="insertData" parameterType="java.util.List">
  INSERT 테이블명 ( name, age ) VALUES
  <foreach collection="list" item="alias" separator=",">
  ( #{alias.name} , #{alias.age})
  </foreach>
</insert>
```

만약, insert 시 PK(=name)가 중복된 경우에 나이만 UPDATE 하고 싶다면
ON DUPLICATE KEY UPDATE를 사용하면 된다.

ON DUPLICATE KEY UPDATE는 insert 먼저하고 중복된 키가 있으면 UPDATE한다.

foreach에서 사용한 alias는 <foreach>에서만 유효한 지역변수라서 이걸 쓰려면
VALUES(컬럼명)를 사용해줘야 한다.
```sql 
<insert id="insertData" parameterType="java.util.List">
  INSERT 테이블명 ( name, age ) VALUES
  <foreach collection="list" item="alias" separator=",">
     ( #{alias.name} , #{alias.age} )
  </foreach>
  ON DUPLICATE KEY UPDATE
   age = VALUES (age)
</insert>
```

참고 링크 :
- http://opinionminer.blogspot.com/2012/10/mybatis-insert-multiple-rows-if-doesnt.html
- https://brush-describr.tistory.com/entry/MySQL-ON-DUPLICATE-KEY-UPDATE-%EC%A4%91%EB%B3%B5%EC%97%86%EC%9D%B4-%EB%A0%88%EC%BD%94%EB%93%9C-%EB%B0%94%EA%BF%94%EC%B9%98%EA%B8%B0%EB%8C%80%EB%9F%89-%EB%A0%88%EC%BD%94%EB%93%9C-MyBatis-foreach%EB%AC%B8
