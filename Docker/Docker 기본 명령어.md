[ 도커 명령어]

도커 빌드 및 실행

docker build -t <빌드할_이미지명> <도커파일 경로>

도커 이미지 확인

docker images

도커 컨테이너 실행

docker run -p 8080:8080 --name <컨테이너 이름> <이미지명>

실행중인 컨테이너 확인

docker ps

도커 컨테이너 종료(-f 옵션은 강제종료: 컨테이너가 실행중 일경우 종료가 되지 않기 때문에)

docker rm <컨테이너명> -f

도커 이미지 삭제

docker rmi test
