url 패턴으로 허용하고자 할 때 /member/** 아스테리크를 2개 붙여줘야 허용된다.

~~~ java
@Override
public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(tokenAuthInterceptor).addPathPatterns("/member/**");
    registry.addInterceptor(mssServiceInterceptor).addPathPatterns("/**");
    WebMvcConfigurer.super.addInterceptors(registry);
}
~~~
