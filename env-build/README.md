# package.json script를 통해 env 개별설정하여 실행 및 빌드
 
> "start": react-scripts start'" :: dev 실행\
"start:stag": "sh -ac '. ./.env.stag; react-scripts start'" :: stag 실행\
"start:prod": "sh -ac '. ./.env.prod; react-scripts start'" :: prod 실행\
\
"build": "react-scripts build" :: dev 빌드\
"build:stag": "sh -ac '. ./.env.stag; react-scripts build'" :: stag 빌드\
"build:prod": "sh -ac '. ./.env.prod; react-scripts build'" :: prod 빌드

<br>

## serve를 사용하여 로컬에서 npm run build 한 파일 사용하기
### 설치 명령어
> npm install -g serve
### 실행 명령어
> serve -s build -l 3000(원하는 포트)