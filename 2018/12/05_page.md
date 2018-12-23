## 생각
- TIL 항목 정하고 그 안에서 작성 (항목 없이 작성 하려니 놓친 것이 없는지 파악하기 힘듬)
- 내가 정의한 항목에 빈곳이 많다면 그만큼 오늘 하루는 소득이 없었다는 방증


## 컴퓨터 공학 강의

### OS 인터럽트에 대해서 


## 독서

## 오늘 새롭게 시도해 본 것

## 책임감있게 일 한 일

## 오늘의 짤막 지식
- 방화벽 오픈 간단히 확인 할 때는 telnet ping 


## 오늘의 문제 해결 경험

### 상황
- 로그인 x 상태면 interceptor에서 response.sendRedirect(url(도메인제외))함 
- redirect url 이 https로 되야 하는데 https 되어 응답시간 초과 오류 발생하여 로그인 페이지 안뜸

### 접근
- 관리자 모드를 켜고 통신이 어떻게 이루어졌는지 모니터링 함
- 봐도 redirect url이 http로 보내고 있는거 밖에는 확인 안 됨
- 인프라 영역으로 즉, 웹서버 단에서 설정 부분에서 원인이 있다고 판단
- 선임이 같이 봐주었느데 Http Header 정보에 proxy 부분이 있는데 이상하다고 의심함 
- 선임이 여러 브라우저 키고 간할적 오류를 특정 케이스에서 오류가는 나는지 확인하는 과정이 나이스 했음

- 인프라 쪽에서는 이중환 된 서버를 풀고 1나씩 올려 테스트 해봄
- A라는 서버는 안됬는데 B라는 서버는 잘 됨
- A라는 서버만 테스트 했더니 잘 됨

### 원인 
- A서버에 ngnix쪽에 proxy 관련 설정 문제
- 해당 설정이 redirect시 https -> http로 하는걸로 생각

### 결과
- A서버 proxy 설정 제거

### 부족한점
- 소스단이 아닌 인프라 쪽 서버 설정 문제인것으로 판단 한 건 잘했으나
- 그렇다면 구체적으로 ngnix, tomcat 서버 설정이 어떻게 되었는지 파일로 받아서 직접확인하는 센스 부족 
- 브라우저 관리자 페이지에서 Http 정보를 redirectUrl에서 그친것이 아쉬움, 헤더 정보까지 봤어야 했음 

### 느낀점
- 인프라팀에서 두 서버 설정 정보가 동일하다고 하였지만 결국 동일하지 않았음
- 항상 제로베이스에서 생각하고 확인/접근 하는 자세를 가져야 함
- 웹서버/톰캣 직접 구축해서 어떻게 돌아가는지 체화 할 필요 있음