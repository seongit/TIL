window 객체 실행 순서 

window.DOMContentLoaded() -> document.ready() -> image, resource load -> window.load() ->  body onload -> window.beforeunload() -> window.unload()


*첨부파일 test.html 참조

DOMContentLoaded

HTML 문서를 전부 읽고 DOM 트리를 완성하는 즉시 발생 스타일 시트, 이미지 및 하위 프레임의 로드가 완료될 때까지 기다리지 않음

📌 DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때

Ref. https://developer.mozilla.org/ko/docs/Web/API/Window/DOMContentLoaded_event

load

HTML로 DOM 트리를 완성했을 뿐만 아니라 스타일 시트, 이미지와 같은 모든 종속 리소스를 포함하여 전체 페이지가 로드 되었을 때 발생

📌 이미지 사이즈를 확인할 때 등. 외부 자원이 로드된 후이기 때문에 스타일이 적용된 상태이므로 화면에 뿌려지는 요소의 실제 크기를 확인할 수 있음

Ref. https://developer.mozilla.org/ko/docs/Web/API/Window/load_event

beforeunload

창, 문서 및 해당 리소스가 언로드 되기 직전에 window에서 발생

이벤트 발생 시점에 문서를 확인 O, 이벤트 취소 가능

📌 사용자가 사이트를 떠나려 할 때, 변경되지 않은 사항들을 저장했는지 확인 시켜줄 때

→ 사용자가 확인을 누를 경우 브라우저는 새로운 페이지로 탐색하고, 취소할 경우 탐색을 취소하고 현재 페이지에 머묾

Ref. https://developer.mozilla.org/ko/docs/Web/API/Window/beforeunload_event

unload

사용자가 최종적으로 사이트를 떠날 때 window 객체에서 발생합니다. unload 이벤트 핸들러에선 지연을 유발하는 복잡한 작업이나 사용자와의 상호작용은 할 수 없습니다.

이 제약사항 때문에 unload 이벤트는 아주 드물게 사용됩니다. 하지만 예외적으로 navigator.sendBeacon을 사용해 네트워크 요청을 보낼 수 있음.

부모 프레임의 unload가 자식 프레임의 unload 이전에 발생

Ref. https://developer.mozilla.org/ko/docs/Web/API/Window/unload_event

beforeunload 이후 발생함
이벤트 발생 시점에 문서 확인 X, UI 상호작용 효과 X, 오류가 발생해도 언로딩 절차 중단 X

📌 사용자가 진짜 떠나기 전에 사용자 분석 정보를 담은 통계자료를 전송하고자 할 때

Ref.

1. Window - Web API | MDN

2. DOMContentLoaded, load, beforeunload, unload 이벤트


