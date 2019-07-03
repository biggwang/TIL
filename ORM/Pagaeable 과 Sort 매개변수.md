### 스프링 MVC HandlerMethodArgumentResolver
- 스프링 MVC 핸들러 메소드의 매개변수로 받을 수 있는 객체를 확장하고 싶을 때 사용하는 인터페이스
- https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/method/support/HandlerMethodArgumentResolver.html



~~~ java
@GetMapping("/posts/{id}")
public String getAPost(@PathVariable(“id”) Post post) {
    return post.getTitle();
}
~~~ 
