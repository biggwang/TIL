Nginx로 Load Balencing 역활을 하고 있다. 사용자 request가 들어왔다.  
그때, 소스가 배포 되어 서버가 재기동 됬다고 하자. 사용자는 어떻게 될까? timeout이 발생 할 것이다. 하지만 실제 load balencing을 이용하거나 AWS ELB를 사용하면 우선 사용자가 요청한 것들을 모두 응답해주고 서버를 재시작 하게 된다.
