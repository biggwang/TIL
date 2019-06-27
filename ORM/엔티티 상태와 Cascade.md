### Cascade 옵션
Entity 상태를 전이시키는 옵션

### 엔티티 상태

우선, 아래 JPA 코드 부터 보자 

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
~~~


### Transient
~~~ java
Account account = new Account();
account.setUsername("ryu");
account.setPassword("1111");

Study study = new Study();
study.setName("Spring Data JPA");
~~~

이 부분이 Transient 이며, JPA는 아직 아무것도 모르고 있는 상태이다.


### Persistent

> session.save(account);

- JPA가 관리중인 상태이다. 아직, DB에 저장 된 건 아니다. 
- 트랜잭션이 끝나야 DB에 반영이 된다.
- Persist Context에 1차 캐쉬로 저장 된다.

- Removed

- Detached
