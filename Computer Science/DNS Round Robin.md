라운드 로빈 방식으로 DNS를 구성한다는 말은 서버에 IP요청이 왔을 때, IP를 반환할 때 특정 스케줄링 방식을 사용한다는 의미
 라운드 로빈의 스케줄링은 각 프로세스에 일정 시간을 할당하고, 시간이 초과되었음에도 끝나지 않은 경우, 잠시 프로세스를 보류하고 다음 프로세스에게 기회를 주는 방식
 즉, 한 프로세스가 너무 긴 시간을 차지하지 않도록 하기 위함