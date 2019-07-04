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
~~~

### 기본 예제
- List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);
- List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);  // distinct
- List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);
- List<Person> findByLastnameIgnoreCase(String lastname); // ignoring case
- List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);  // ignoring case

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


## Update 쿼리 메소드 만들기

### @Modifying 사용 자제 이유는

~~~ java
private Post savePost() {
    Post post = new Post();
    post.setTitle("Spring");
    return postRepository.save(post);   // persist
}


@Test
public void updateTitle() {
    // Persist 상태가 됬으며 1차 캐쉬중이다.
    Post spring = savePost();
    
    // update가 발생했다.
    String hibernate = "hibernate";'
    int update = postRepository.updateTitle(hibernate, spring.getId();
    assertThat(update).isEqualTo(1);
    
    // find해도 아직 트랜잭션 상태이기 때문에 조회해도 hibernate가 아니라 spring이 된다.
    // 잊지말자!!! 트랜잭션 중이라는 것을!!!!!
    
    // 만약 트랜잭션 중간에 업데이트를 반영하려면
    // 관리되고 있는 해당 Entity를 Persist Context를 비워줘야 한다.
    
    // 해당 Repository에서 
    // @Modifying(clearAutomatically = true, flushAutomatically = true) 하면 된다.
    // @Query("SELECT p FROM Post AS p WHERE p.title = ?1")
    // List<Post> findByTitle(String title); // NamedQuery
    
    
    Optional<Post> byId = postRepository.findById(spring.getId());
    assertThat(byId.get().getTitle()).isEqualTo(hibernate);
}
~~~

즉 저렇게 @Modifying하지 않고 아래와 같이 하는게 낫다.

~~~ java
@Test
public void updateTitle() {
    Post spring = savePost();
    spring.setTitle("hibernate"); // 값이 바뀌었다!!, Update가 일어난게 아님
    
    // findAll 하면 전체 데이터를 가져오는것이기 때문에 
    // 현재까지 있었던 트랜잭션 상황을 반영함
    List<Post> all = postRepository.findAll();    
    assertThat(all.get(0).getTitle()).isEqualTo("hibernate");
}
~~~





출처: 인프런 백기선 Spring Data JPA
