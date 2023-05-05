# nginx 테스트

1. docker-compose up
2. npm start (3000port)
3. ./server && npm start (8080port)

localhost ... 접근 시 client (3000port)
localhost/api ... 접근 시 server (8080port)

<br>

## serve를 사용하여 로컬에서 npm run build 한 파일 사용하기
### 설치 명령어
> npm install -g serve
### 실행 명령어
> serve -s build -l 8090