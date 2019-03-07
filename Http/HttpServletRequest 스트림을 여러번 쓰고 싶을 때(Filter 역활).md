Http 요청들어온 request 객체을 읽고 나면 다시 읽지 못한다. (엑셀 파일 읽을때도 마찬가지였다.)  
Stream 특성상 한번 읽으면 다시 읽을 수 없는 성질인거 같다.  

Http요청을 Controller 들어오기전에 읽고 싶을 때는 Filter 를 사용하여 아래와 같이 사용하면 된다. [참고](https://goo.gl/i1hEcD)

~~~ java
public class SomeFilter implements Filter {
  //...

  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    chain.doFilter(new BodyCachedServletRequestWrapper(request), response);
  }
}
~~~