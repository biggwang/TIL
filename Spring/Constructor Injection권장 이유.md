## Construtor Injection을 권장 되는 이유

### Filed Injection 이란?
@Autowired를 통해 주입 받는 것을 말한다.


### Construtor Injection 이란?
생성자를 통해 객체를 주입 받는 것을 말한다.


### Field Injection 방식은 단위테스트 할 때 객체를 생성해서 주입 할 수가 없다.
Spring DI 의존관계를 끝는다고들 하는데 내가 이해한것은 Spring DI도 가능하고 단위테스트 할 때 객체 생성하여 주입도 가능하다.
그래서, Construtor Injection을 하게 되면 둘다 가능하게 해주는 장점이 있다.


### DI를 얼마나 주입 받고 있는지 쉽게 알 수 있어 의존관계를 알 수 있어 리펙토링에 필요성을 보여준다.

~~~ java

public ServiceA serviceA;
public ServiceB serviceB;
public ServiceC serviceC;
public ServiceD serviceD;

@Autowired
public InjectionRecipe(ServiceA serviceA, ServiceB serviceB, ServiceC serviceC, ServiceD serviceD) {
    this.serviceA = serviceA;
    this.serviceB = serviceB;
    this.serviceC = serviceC;
    this.serviceD = serviceD;
}

~~~

### Final 키워드를 사용 할 수 있어 객체 변경을 막을 수 있다. (Field Injection 방식은 컴파일 할 때 오류 남)

~~~ java

public final ServiceA serviceA;

@Autowired
public InjectionRecipe(ServiceA serviceA) {
    this.serviceA = serviceA;
}

~~~

### 메소드내 코드작성이 가능하다.

만약 주입받는 객체가 null일 경우라면 Field Injection은 null로 받을수 밖에 없지만 Construtor Injection 방식은 대체 코드가 가능하다.

~~~ java

public final ServiceA serviceA;

@Autowired
public InjectionRecipe(ServiceA serviceA) {
    if(serviceA == null){
        this.serviceA = new ServiceA();
    }
}

~~~


### 참고
- https://warpgate3.tistory.com/entry/Spring-Constructor-Dependency-Injection-%EC%83%9D%EC%84%B1%EC%9E%90-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85
