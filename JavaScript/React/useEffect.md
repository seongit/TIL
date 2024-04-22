기본 형태
useEffect(function, deps)
function : 실행하고자 하는 함수
deps : 배열 형태. function을 실행시킬 조건.
deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행합니다.
