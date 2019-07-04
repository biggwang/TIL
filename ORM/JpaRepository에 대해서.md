### JpaRepository

> JpaRepository > PagingAndSortingRepository > CrudRepository > Repository

위와 같이 수퍼클래스가 존재하며 그렇기 때문에 JpaRepository를 상속 받으면 findAll, save 등 CRUD에 대한 오퍼레이션을 사용 할 수 있는것이다.


### Junit 에서 @DataJpaTest 어노테이션으로 JPA를 테스트할 때

기본적으로 스프링에서 Rollback을 수행하기 때문에 JPA에서 롤백할껀데 굳이 insert하지 않는다.  
만약, 하고 싶다면 테스트 메소드에 @Rollback(false)를 주도록 한다.  

### H2 DB를 테스트에서만 사용하고자 할 때

H2 디펜던시를 테스트 할 때만 동작 하게하고 @DataJpaTest 어노테이션을 붙여주면 DataSource는 H2를 사용하게 된다.
