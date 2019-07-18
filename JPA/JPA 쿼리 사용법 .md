## JPA에서 사용하는 쿼리 종류

### JPQL(HQL)
Java Persistence Query Language / Hibernate Query Language
데이터베이스 테이블이 아닌, **엔티티 객체 모델 기반**으로 쿼리 작성.
JPA 또는 하이버네이트가 해당 쿼리를 SQL로 변환해서 실행함.
https://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html#hql

        TypedQuery<Post> query = entityManager.createQuery("SELECT p FROM Post As p", Post.class);
        List<Post> posts = query.getResultList();

### Criteria
타입 세이프 쿼리
https://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html#criteria

        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Post> criteria = builder.createQuery(Post.class);
        Root<Post> root = criteria.from(Post.class);
        criteria.select(root);
        List<Post> posts = entityManager.createQuery(criteria).getResultList();

### Native Query
SQL 쿼리 실행하기
https://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html#sql

List<Post> posts = entityManager
                .createNativeQuery("SELECT * FROM Post", Post.class)
                .getResultList();






## 스프링 데이터가 쿼리를 만드는 방식

### CREATE (메소드 이름 분석)
스프링 데이터 JPA가 Repository에 있는 메소드 이름을 분석해서 쿼리를 만들어줌

### USE_DECLARED_QUERY (미리 정의한 쿼리)
메소드에 붙어있는 쿼리 어노테이션 정보를 가지고 쿼리를 실행함  

- @Query("SELECT c FROM Comment AS c")
- @Query("SELECT c FROM Comment AS c", nativeQuery=true)


### CREATE_IF_NOT_FOUND (기본 설정 값)
미리 정의한 쿼리 찾아보고 없으면 만들기


### 설정방법
~~~ java
@SpringBootApplication  
@EbableJpaRepositories(queryLookupStrategy = QueryLookupStrategy.Key.CREATE_IF_NOT_FOUND)
~~~

## 스프링 데이터 JPA로 쿼리를 사용하는 방법

### 언제 사용하는가
- 메소드 이름으로 쿼리를 표현하기 힘든 경우에 사용.
- 메소드 이름을 파싱하여 쿼리를 만들 때 오류가 발생하면 Runtime 오류가 발생함 (PropertyReferenceExectpion: No Property....)
- 메소드 이름데로 쿼리가 잘 만들어졌는지는 테스트 코드 작성하면서 확인 하면 됨



### 쿼리 생성 방법
- https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation


### 쿼리 지정해서 사용하기
엔티티에 정의한 쿼리 찾아 사용하기 JPA Named 쿼리
  - @NamedQuery
  - @NamedNativeQuery
  
 ~~~ java
 @Entity
 @NamedQuery(name = "Post.findByTitle", query = "SELECT p FROM Post AS p WHERE p.title = ?1"
 Public class Post {
 ...
 }
 ~~~
 
 ~~~ java
 public interface PostRepository extends JpaRepository<Post, Long> {
 
      List<Post> findByTitleStartsWith(String title);
      List<Post> findByTitle(String title); // NamedQuery
 
 }
 ~~~

### 리포지토리 메소드에 정의한 쿼리 사용하기
  - @NamedQuery를 사용하면 Entity 클래스가 지저분 할 수 있어 Repositry에서 @Query 를 사용하는게 깔끔하다.
  - @Query
  - @Query(nativeQuery=true)

~~~ java
 public interface PostRepository extends JpaRepository<Post, Long> {
 
      List<Post> findByTitleStartsWith(String title);
      
      @Query("SELECT p FROM Post AS p WHERE p.title = ?1")
      List<Post> findByTitle(String title); // NamedQuery
 
 }
~~~

## 커리 메소드 예제

### 기본
- List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);
- List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);  // distinct
- List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);
- List<Person> findByLastnameIgnoreCase(String lastname); // ignoring case
- List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);  // ignoring case

### 정렬
- List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
- List<Person> findByLastnameOrderByFirstnameDesc(String lastname);

### 페이징
- Page<User> findByLastname(String lastname, Pageable pageable);
- Slice<User> findByLastname(String lastname, Pageable pageable);
- List<User> findByLastname(String lastname, Sort sort);
- List<User> findByLastname(String lastname, Pageable pageable);

### 스트리밍
- Stream<User> readAllByFirstnameNotNull();
- try-with-resource 사용할 것. (Stream을 다 쓴다음에 close() 해야 함)