📌 jsp 인코딩 설정
jsp 페이지 상단에 다음 문구 기재
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

index.jsp에는 인코딩이 안먹어서 welcomAPITest.jsp로 redirect 시킴

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <%response.sendRedirect("./welcomeAPITest.jsp");%>
    </body>
</html>