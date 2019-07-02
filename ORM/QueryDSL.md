### 쿼리메소드가 보기 너무 어려울때..
findByFirstNameIngoreCaseAndLastNameStartsWithIgnoreCase(String firstName, String lastName) 


### 여러 쿼리 메소드는 대부분 두 가지 중 하나.
- Optional<T> findOne(Predicate): 이런 저런 조건으로 무언가 하나를 찾는다.
- List<T>|Page<T>|.. findAll(Predicate): 이런 저런 조건으로 무언가 여러개를 찾는다.
- QuerydslPredicateExecutor 인터페이스

### QueryDSL
- http://www.querydsl.com/
- 타입 세이프한 쿼리 만들 수 있게 도와주는 라이브러리
- JPA, SQL, MongoDB, JDO, Lucene, Collection 지원
- [QueryDSL JPA 연동 가이드](http://www.querydsl.com/static/querydsl/4.1.3/reference/html_single/#jpa_integration)

### Qxxx.java 파일 생성
- Maven, Gradle 에서 compile 하게 되면 지정 위치에 Qxxxx.java 파일이 생성 됨
- Entity에 대한 쿼리를 작성할 수 있게 변환된 파일이다.

### 스프링 데이터 JPA + QueryDSL
- 인터페이스: QuerydslPredicateExecutor<T>
- 구현체: QuerydslPredicateExecutor<T>

### 연동 방법

- QueryDsl 의존성 라이브러리 추가

#### 기본 리포지토리 커스터마이징 안 했을 때. (쉬움)
~~~ java
public interface AccountRepository extends JpaRespository<Account, Long>, QuerydslPredicateExcutor<Account> {
}
~~~


~~~ java 
@RunWith(SpringRunner.class)
@DataJpaTest
public class AccountRepositoryTest {
    
    @Autowired
    private AccountRepository accountRepository;
    
    @Test
    public void crud() {
        QAccount account = QAccount.accout;
        Predicate prdicate = account
                .firstName.contatinsIgnoreCase("ryu")
                .and(account.lastName.startWith("yungwang"));
                
        Optional<Account> one = accountRepository.findOne(predicate);
        assertThat(one).isEmpty();
    }
}
~~~

#### 기본 리포지토리 커스타마이징 했을 때.

위 방법 그데로 하게 되면 **No propery exists found for type Post!** 가 발생하게 되는데  
이유는 커스텀하게 만들었데 Repository에서 QuerydslPredicateExcutor 를 구현하지 않았기 때문이다. 

바로 아래 코드를 보면 SimpleMyRepository가 기본 Repository로 되어 있다.

~~~ java
@SpringBootApplication
@EnableJpaRepositories(repositoryBaseClass = SimpleMyRepository.class)
public class Application {
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }
}
~~~

해결 방법은 

~~~ java


~~~





### 출처
인프런 백기선 Spring JPA
