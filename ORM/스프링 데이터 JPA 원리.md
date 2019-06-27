### JpaRepository 를 extends 만 했는데 어떻게 사용이 가능 할 까?

~~~ java
public interface PostRepository extends JpaRespository<Post, Long> {

}
~~~

POSJ 클래스 처럼 보이지만 Spring 에서 알아서 구현 객체를 만들고 Bean으로 등록해 놨기 때문에 개발자는 그냥 사용만 하면 되는 것이다.  
정확히 말하면 스프링 부트가 알아서 해준 것이고 스프링을 사용하며 @Configuration 클래스에서 @EnableJpaRepositories 를 붙여줘야 한다.



### @Import(JpaRepositoriesRegistar.class)

Bean으로 등록하지 않아도 코드로 @Autowired 하여 사용 할 수 있는데 아래 코드를 보자


~~~ java

public class YungwangRegistar implements ImportBeanDefinitionRegistrar {
    @Override
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinition beanDefinition) {
    
        GenericBeanDefinition beanDefinition new GenericBeanDefinition();
        beanDefinition.setBeanClass(Yungwang.class);
        beanDefinition.getPropertyValues().add("nama", "boriswinter");
        registry.registerBeanDefinition("yungwang", beanDefintion);
    }

~~~

그러면 @Autowired 하여 Yungwang 객체를 얻을 수 있다.
