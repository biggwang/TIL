### 상황

기존 서비스가 웹서버에서 관리 되는 정적 리소프 파일을 이미지 서버에 올려두고 CDN으로 서비스를 운영하는것으로 변경해야 했다.  
그럼 기존 resources/static/** 경로를 resource/static/member/** 경로로 바꿔야 했다. 왜냐면 배포할 이미지 서버에도 같은 디렉토리로 관리하고  
같은 디렉토리 서비스 운영을 할 것이기 때문이다.


### 그래서 static-path-pattern 을 변경하게 되었다.

아래 .yml 파일을 보자

~~~ java
spring:
  mvc:
    static-path-pattern: /member/static/**
~~~

위와 같이 설정 되어 있다면 sample.js의 경로는 https://www.example.com/member/static/sample.js 에 url을 가지게 된다.   
그러면 https://www.example.com/static/sample.js 로 하려면??

~~~ java
spring:
  mvc:
    static-path-pattern: /static/**
~~~

이렇게 하면 된다.
