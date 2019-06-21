### Client IP 얻는 방법
서버 앞단에 L4, Proxy 서버 등이 있으면 Java에서 request.getRemoteAddr(); 하게 되면 L4, Proxy Server에 IP를 가져오게 된다.  
때문에 최초 Clinet에 IP를 얻기 위해서는 X-Forwarded-For(XFF) 헤더를 사용하여 얻을 수 있다. 

예를 들어, A -> B -> C 이렇게 요청이 들어 왔을때, X-Forwarded-For 헤더 정보를 보면 

> X-Forwarded-For: client, proxy1, proxy2

이렇게 들어 온다. 즉 A 가 클라이언트 ip 정보 인 것이다.  

하지만 XFF가 사실상 표준이지 RFC에 정식 표준은 아니다.  
때문에 WAS별 사용하는 헤더가 다를 수 있으므로 무조건 적으로 사용하면 안 된다.


### 참고
https://www.lesstif.com/pages/viewpage.action?pageId=20775886
