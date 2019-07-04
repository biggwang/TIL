### 쿼리 생성하기
- https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
- And, Or
- Is, Equals
- LessThan, LessThanEqual, GreaterThan, GreaterThanEqual
- After, Before
- IsNull, IsNotNull, NotNull
=- Like, NotLike
- StartingWith, EndingWith, Containing
- OrderBy
- Not, In, NotIn
- True, False
- IgnoreCase

### 쿼리 찾아쓰기
- 엔티티에 정의한 쿼리 찾아 사용하기 JPA Named 쿼리
  + @NamedQuery
  + @NamedNativeQuery
  
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

- 리포지토리 메소드에 정의한 쿼리 사용하기
  + @NamedQuery를 사용하면 Entity 클래스가 지저분 할 수 있어 Repositry에서 @Query 를 사용하는게 깔끔하다.
  + @Query
  + @Query(nativeQuery=true)

~~~ java
 public interface PostRepository extends JpaRepository<Post, Long> {
 
      List<Post> findByTitleStartsWith(String title);
      
      @Query("SELECT p FROM Post AS p WHERE p.title = ?1")
      List<Post> findByTitle(String title); // NamedQuery
 
 }
~~
### 기본 예제

List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);
// distinct
List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);
// ignoring case
List<Person> findByLastnameIgnoreCase(String lastname);
// ignoring case
List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);

### 정렬

List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
List<Person> findByLastnameOrderByFirstnameDesc(String lastname);

### 페이징

Page<User> findByLastname(String lastname, Pageable pageable);
Slice<User> findByLastname(String lastname, Pageable pageable);
List<User> findByLastname(String lastname, Sort sort);
List<User> findByLastname(String lastname, Pageable pageable);

### 스트리밍

Stream<User> readAllByFirstnameNotNull();
try-with-resource 사용할 것. (Stream을 다 쓴다음에 close() 해야 함)

출처: 인프런 백기선 Spring Data JPA
