### 연관 관계의 엔티티를 어떻게 가져올 것인가 

- @OneToMany 기본값 Lazy
- @ManyToMany 기본값 Eager

Post, Comment 테이블 관계에서 Post에서 Comments데이터를 기본적으로 가져오지 않는다.  
왜냐하면 Comment에 Row가 얼마나 있을지 모르기 때문이다. 그래서 OneToMany 기본값은 Lazy 이다.  

즉, Post에 있는 데이터만 가져오겠다는 뜻이다.

### 프록시

-  엔티티를 조회할 때 영속성 컨텍스트에 존재하지 않으면 DB콜을 하게 되는데 그런 I/O 발생없이 실제 사용하는 시점까지 미루고 싶을때 사용한다.
-  즉, 지연로딩을 사용하기 위해 프록시 객체가 필요함

> Memeber member = entityManager.getReference(Member.class, "member1");


### 즉시로딩 (EAGER)
- @ManyToOne 에서 기본값으로 되어 있으며 즉시 DB콜하여 데이터를 가져온다.

### 지연로딩 (LAZY)
- A 엔티티에 연관된 B 엔티티 정보가 있을때 A 엔티티 정보만 조회 하면 비효율적이므로 로딩을 지연하여 실제 사용할 때 데이터를 조회 한다.

### N + 1 문제


### 참고
- https://yellowh.tistory.com/125
