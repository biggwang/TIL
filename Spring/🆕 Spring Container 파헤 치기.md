## Spring DI 컨테이너 구조

[Spring DI UML 확인하기](https://goo.gl/aXfCTr)


## 컨테이너 인터페이스

### BeanFactory
> The root interface for accessing a Spring bean container. This is the basic client view of a bean container; further interfaces such as ListableBeanFactory and ConfigurableBeanFactory are available for specific purposes.

Spring Document에서 명시된 것 처럼 Spring Container Interfcae 중에 root에 해당하는 Interface이다.  

Bean객체에 대한 Life Cycle, 객체간 관계설정 등을 제어 하는 역활을 한다.

### ApplicationContext
BeanFactory보다 기능이 더 추가된 Spring Container이다.  
주로 애플리케이션 전반에 대한 기능에 초점을 맞춘 Spring Container이다.


### WebApplicationContext
ApplicationContext 기능에서 Web에 초점을 마준 Spring Container이다.



## 컨테이너 구현 클래스

### StaticApplicationContext

### GenericXmlApplicationContext

### WebApplicationContext
