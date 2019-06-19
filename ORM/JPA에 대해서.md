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
### 변경 감지
### 지연 로딩
