### 관계 맵핑시 알아둘 것

- 관계 맵핑은 반드시 2개에 엔티디에서 이루어진다.
- FK를 가진쪽이 주인이다.


### 단방향 @ManyToOne

- 기본값은 FK 생성
- ERD 설계 할 때를 잘 생각해 보면 FK를 가지고 있는 테이블은 1:N 관계에서 N 테이블이다.
- 즉, @ManyToOne을 선언한 엔티티가 바로 N 테이블이다.

- 주인은 스터디임으로 회원 엔티티에서 회원의 키를 가진다.


~~~ java
@Override
public void run(ApplicationArguments args) throws Exception {
     Account account = new Account();
     account.setUsername("ryu");
     account.setPassword("1111");

     Study study = new Study();
     study.setName("Spring Data JPA");
     
     // 스터디 엔티티에서 회원의 키를 가진다.
     study.setOwner(account);

     Session session = entityManager.unwrap(Session.class);
     session.save(account);
     session.save(study);
}
~~~



### 단방향 @OneToMany

- 기본값은 조인 테이블 생성
- 주인은 회원임으로 회원 엔티티에서 스터디에 키를 가진다.


~~~ java
 @Override
  public void run(ApplicationArguments args) throws Exception {
      Account account = new Account();
      account.setUsername("ryu");
      account.setPassword("1111");

      Study study = new Study();
      study.setName("Spring Data JPA");
      
      // 회원 엔티티에서 스터디에 키를 가진다.
      account.getStudies().add(study);

      Session session = entityManager.unwrap(Session.class);
      session.save(account);
      session.save(study);
  }


~~~

### 양방향
 
- A테이블에서 B정보를 조회 할 때 또는 B테이블에서 A정보를 조회 할 때 필요
- RDB에서는 테이블 키값만 서로 가지고 있으면 조인해서 모두 정보를 조회 하지만 자바단에서는 관계지향이 아닌 객체 지향이기 때문에 그럴수 없으므로 각각 맵핑정보를 넣어줘야 한다.
- @OneToMany쪽에서 mappedBy를 해줘야만 양방향 관계가 되는 것이다.
- mappedBy를 설정하지 않고 서로 @OneToMany, @ManyToOne 하게 되면 서로 다른 단방향 관계가 되는 것이다.
- @ManyToOne 쪽을 주인이라하며 주인한테 관계(주인 아닌쪽에 레퍼런스 정보 즉 객체 주솟값)를 맺어 주어야만 FK값을 가질수 있고 양방향 관계를 맺을 수 있다.

~~~ java

@Override
public void run(ApplicationArguments args) throws Exception {
   Account account = new Account();
   account.setUsername("ryu");
   account.setPassword("1111");

   Study study = new Study();
   study.setName("Spring Data JPA");

   // account는 주인이 아니기 때문에 이렇게 하면 study에서 account PK 값을 알 수 없다.
   account.getStudies().add(study);
   
   // study가 주인이기 때문에 이렇게 해줘야 account PK 값이 study에 맵핑 된다.
   study.setOwner(account);


   Session session = entityManager.unwrap(Session.class);
   session.save(account);
   session.save(study);
}


~~~
