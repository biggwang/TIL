### 발생상황

스프링부트에서 인터셉터를 추가하기 위해 Constructor Injection으로 추가하였는데 

~~~ java
@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final HandlerInterceptor handlerInterceptor;
    
    ...
}
~~~

아래와 같은 오류가 발생하였다.

![spring-circular-injection](../img/spring-circular-injection.png)


### 발생원인

객체 의존이 A -> B -> C 형식으로 되어 있을때, Spring DI는 C -> B -> A 순으로 객체를 생성한다.  

하지만, A -> B, A <- B 서로 의존 하고 있을땐? 어느 것을 먼저 생성할지 몰라서 순환 참조 오류가 발생한 것이다.


### 해결 방법

Injection 방식을 Constructor로 하여 객체 생성을 못해 발생한 것이니 Setter Injection 방식으로 바꾸면 해결 된다.


### 참고
- [Spring Circular Reference (순환 참조) 에 대해서 쉽게 이해하기](http://blog.naver.com/PostView.nhn?blogId=gngh0101&logNo=221179100057&parentCategoryNo=&categoryNo=32&viewDate=&isShowPopularPosts=false&from=postView)
- [Spring Security circular bean dependency](https://stackoverflow.com/questions/40695893/spring-security-circular-bean-dependency)
- [Spring referece](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/htmlsingle/#beans-dependency-resolution)
