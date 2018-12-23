
### 오늘의 생각

#### 나도 오픈소스에 기여해보자
어떻게 하면 나를 알리고 활발히 활동하면서 S/W에 기여 할 수 있을까?  
고민중에 오픈소스가 떠올라 몇가지 서치를 해본 결과 정말 활발히 활동하는 개발자들과 오픈소스를 통해 많은 것을 배울 수 있다는 것을 깨닳았다.  
또한 오픈소스가 존재하기 때문에 좋은 프로젝트가 나올수 있었고 나또한 도움 받고 있기 때문에 오픈소스에 소중함을 알게되었고 나도 기여하고 싶어졌다.  
내가 관심있는 오픈소스 프로젝트를 선정하여 애정을 가지고 공헌해 보자

**오픈소스에 기여하면 좋은점**
- 다양한 성향의 사람들과 소통하는 법을 배울수 있다.
- 말그데로 open source이므로 더 생각하고 더 고려하여 개발을 하게 된다.
- 이때라도 영어를 사용하니 영어와 더 친해 질 수 있다.
- 나는 어떤 프로젝트로 개발자 또는 사람들에게 편리함을 줄 수 있을까? 라는 생각을 하게되어 나도 만들고 싶다! 라는 욕구를 불러일으킨다.

**오픈소스 입문에 대해 도움이 되었던 사이트**
- [오픈소스 입문을 위한 아주 구체적인 가이드](https://goo.gl/seZr3T)
- [네이버 오픈소스 가이드](https://goo.gl/xcmWhq)

**내가 관심있는 오픈소스**
- [spring-projects / spring-batch](https://goo.gl/FxU55t)



#### Commit Message를 잘 작성해보자!
혼자하는 개발은 없는 만큼 사람들에게 내용 전달이 잘 전달하는게 무엇보다 중요하게 생각하였고 그중에 commit message를 어떻게 하면 잘 쓸까 고민되었는데 괜찮은 내용이 있어 여기에 남긴다.

- [좋은 git 커밋 메시지를 작성하기 위한 7가지 약속](https://goo.gl/yFdgt3)

### 오늘의 지식

#### IDE Tool 없이 Tomcat local 환경에서 소스 배포하고 띄우기
- Tomcat Zip 파일 다운로드
- server.bat 파일 OS Service 등록 (cmd 창 해당디렉토리> service.bat install)
  + JAVA_HOME에 JDK 버전 확인
  + IDE Tool에서 컴파일 한 버전과 Tomcat JAVA_HOME 버전이 다르면 "Unsupported major.minor version 52.0" 오류 발생 할 수 있음
- Server.xml 수정
  + <Context /> 추가
- 등록한 Service 시작
- Tomcat 동작 확인


#### iterator(반복자)란?
Java에 Collection Interface가 Iterable<E>를 상속하여 Collection에 하위 구현체인 List, Set, Queue가 iterator()를 사용 할 수 있는 것이며 데이터를 순차적으로 가져오는 기능을 한다.
