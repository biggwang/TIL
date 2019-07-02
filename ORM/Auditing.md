### Auditing
엔티티의 변경 시점에 언제, 누가 변경했는지에 대한 정보를 기록하는 기능

~~~ java
@Service
public class AccountAuditAware implements AuditorAware<Account> {
    
    // TODO Spring Security는 따로 설정 
    
    @Override
    public Optional<Account> getCurrentAuditor(){
        // TODO: 실행되는지 체크
        return Optional.empty();
    }
}
~~~

위 방법 말고 Entity에다가 설정 할 수도 있음

~~~ java

...

@PrePersist
public void prePersist() {
    // TODO 등록자, 등록일 등등..

}
~~~


~~~ java
@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef="accountAuditAware")
public class Application {
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
~~~
