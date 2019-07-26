### JPA 핵심개념 1 - 객체와 릴레이션 맵핑

### JPA 핵심개념 2 - 영속성 컨텍스트 란?
스프링 컨테이너 같이 JPA에서 관리하는 컨테이너 같은 개념  
영속성컨텍스트는 논리적(추상적)인 개념이고 EntityManager가 그 구현체 인거 같은데 팩트체크 필요하다.  
엔티티를 영속성 컨텍스안에 보관 하게 되면 아래와 같이 많은 이점이 있다.


### 영속성 컨텍스트 이점
----
### 1차 캐시
~~~ java
Member member = new Member();
member.setId("member1");
member.setUserName("회원1");

// 1차 캐쉬 저장, 영속성 컨텍스트에 저장 됨
EntityManager em = emf.createEntityManager();
em.getTransaction().begin();
em.persist(member);

// 1차 캐쉬 조회
Member findMember = em.find(Member.class), "member1");

em.getTransaction().end();
~~~
 
DB로 가기전에 먼저 영속성 컨텍스트에 "member1"에 해당하는 데이터가 있으면 우선 조회 한다.  
단, 한 트랜잭션내에서만 1차 캐쉬가 보관되어 지는 것이다. 또 동시에 100명에 접속자가 있다면 100개에 영속성 컨텍스트가 생기는 것이며 서로 공유 되지 않는다. 
 
그러면 1차 캐쉬에 없는 데이터는 어떻게 될까??  
그때는 DB에서 조회하고 가져온 데이터를 1차 캐쉬에 저장하고 그리고 그 값을 반환한다.

### 동일성 보장

~~~ java
Member a = em.find(Member.class), "member1");
Member b = em.find(Member.class), "member1");

a == b 하면 true 즉, heap 같은 주소를 가지고 있는 객체라는 뜻인데 1차 캐쉬에 보관 된 데이터를 반환하였기 때문에 같은 주소를 가진 데이터 인것이다.

~~~

### 트랜잭션을 지원하는 쓰기 지연

DB 트랜잭션 개념이다. 
엔티티매니저에 의해서 관리되고 있는 엔티에서 쿼리를 막날려도 DB에 날라가지 않는다. 왜냐면 트랜잭션 상태에서 아직 커밋되지 않았기 때문이다.  
flush를 하거나 트랜잭션이 끝나면 그때 DB에 반영된다. 정확히 말하면 트랜잭션이 끝나기전에 JPA가 flush를 하여 영속성 컨텍스트 관리되는 엔티티와 DB와 비교후 변경된것이 있다면 쿼리를 생성하여 쓰기지연 SQL 저장소에 보관하고 그 쿼리를 DB에 반영하고 트랜잭션이 끝나면 커밋이 되어 최종 반영 되는 것이다.

### 변경 감지(Dirty Checking)
영속성 컨텍스트에서 관리되는 엔티티라면 엔티티 정보가 변경 되었을때 변경 감지가 되어 업데이트 쿼리가 만들진다.  
단, 기본적으로 엔티티 모든 컬럼에 대한 업데이트 구문이 발생한다. 예를 들어 컬럼이 30개 라면 컬럼 30개에 대한 모든 컬럼을 업데이트 한다.  

모든 컬럼을 업데이트 치는 것이 불필요하다 생각 할 수 있으나 아래와 같은 이점이 있다고 한다.
- 모든 컬럼을 업데이트 하기 때문에 쿼리가 항상 같아서 DB에 동일한 쿼리를 보낼테고 이는 DB가 쿼리를 캐슁하여 캐슁한 쿼리를 계속 사용 할 수 있다.  

컬럼이 30개이상 되는 엔티티라면 기본값인 모든 컬럼을 업데이트 치는 것보다 @DynamincUpdate 을 사용하여 변경된 컬럼만 업데이트 치는것이 낫다고 한다.



### [문제] DB에 날리는 쿼리는 몇 번 호출 되었을까?
~~~ java

Account account = new Account();
account.setUsername("ryu");
account.setPassword("1111");

Study study = new Study();
study.setName("Spring Data JPA");

account.addStudy(study);

Session session = entityManager.unwrap(Session.class);
session.save(account);
session.save(study);

Account yungwang = session.load(Account.class, account.getId());
yungwang.setUsername("gwang");
yungwang.setUsername("boriswinter");
yungwang.setUsername("ryu");

~~~


답은 insert 2번이다.  

session.save(account);
session.save(study);  

이부분이 2번 insert 쿼리가 DB로 날라간것이다. 그럼 setUserName 메소드 3번 호출한건 왜 Update가 되지 않지??

바로 이 부분이 Psersist Context에 성능 이점이다.  
코드를 보면 ryu -> gwang -> boriswinter -> ryu 결국 name은 변하지 않았기 때문에 JPA가 알아서 쿼리를 날리지 않았던 것이다.  
이부분이 Dirty Checking 했다는 것이고 DB에 쿼리 날리는 것을 최소화 한다는 개념 Write Behind 개념이다.





