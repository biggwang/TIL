## 생각

- 항상 잘되던 환경은 백업해놓고 안될때 있음 비교해서 보면 원인 찾기 빠름
- 뭐 배우거나 알게 되면 바로 TIL 작성 바쁘며 키워드 많이라도 적자, 그 당시 느낌과 생각이 중요함

****

## 토이프로젝트 설계

### 메타프로그래밍
서비스를 위한 서비스, 개발을 위한 개발 라이브러리 프레임워크를 개발해 보자 어떤게 좋을까??

### 실천 플랫폼
 개발 역량을 쌓기 위해 정보 홍수속에서 나의 일정과 실천을 잘 할 수 있도록 관리 및 피드백 해주는 시스템

****

## Maven 삽질해서 얻은 내용

### Maven 연관된 라이브러리를 가져온다.
~~~
<dependency>
  <groupId>org.jxls</groupId>
  <artifactId>jxls</artifactId>
  <version>2.3.0</version>
</dependency>
~~~

logback dependency를 입력하지도 않았는데 위 dependency를 넣으면 왜그런지 모르겠지만 logback-classic, logback-core, logback-parent가 생겼다. 아마 위 라이브러리가 logback 라이브러리를 참조하여 Maven이 같이 가지고 오는 것 같다.

### Maven pom.xml에서 저장하거나 maven install 하게 되면
.m2 폴더에 갱신되거나 .m2에 없는 파일은 다시 생성된다.

### Tomcat clean
Tomcat deploy path가 비워지고 다시 파일이 로드 된다.  
logback 관련 jar파일이 Tomcat deploy path에 로드 되지않아 어떻게 하면 클린하고 다시 로드 되나 찾다가 알게 됨

### pom.xml에서 dependency 기준으로 Library 배포
예를들어 .m2 폴더에서 10개의 라이브러리가 있다고 해도 A 프로젝트에서 pom.xml에서 선언된 라이브러리가 5개라면 5개만 Tomcat deploy path로 Library가 로드 된다.


### scope가 test면 라이브러리가 Tomcat deploy path에 로드 되지 않는다.
~~~
<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <version>1.2.3</version>
  <!--<scope>test</scope> -->
</dependency>
~~~

****

## 조각 지식

### Shell (bash) 명령어
shell> shitft + v: 현재 라인 전체 선택
shell> v: 방금 복사한 라인 붙여넣기

****

### log4j -> logback 적용
뿌듯했다 삽질을 자꾸하니 구조가 눈에 보여서 그런지 예전보다 빨리 적용하고 결과가 나왔다.  
느낀점은 공식문서를 보고 찾는 습관과 영어의 중요성이다.  
공식문서는 굉장히 딱딱해서 눈에 잘 안들어와 대충 스캔하는경우가 많은데 정보를 놓칠 수 있으므로 놓치지 않겠다는 마음으로 본다.  
역시 삽질은 체화화는 도구중에 최고인거 같다. 구조와 개념을 알아야 해결을 잘 할 수 있다.


## DB, Java 데이터 타입 맵핑
