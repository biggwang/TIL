## JPA Repository에 대해서.md

### @EnableJpaRepositories
- 스프링 부트 사용할 때는 사용하지 않아도 자동 설정 됨.
- 스프링 부트 사용하지 않을 때는 @Configuration과 같이 사용.
- Repository 를 찾아 해당 기능을 사용하게 해줌

### @Repository 애노테이션을 붙여야 하나 말아야 하나...
- 안붙여도 됨 이미 붙어 있음
- 구현체인 SimpleJpaRepository객체에 이미 붙어 있음

### 스프링 @Repository
- SQLExcpetion 또는 JPA 관련 예외를 스프링의 DataAccessException으로 변환 해준다.

## 엔티티 저장하기

업데이트 용도로도 쓸수 있음

~~~ java
@Test
public void save() {
    Post post = new Post();
    post.setId(1l);
    post.setTitle("jpa");
    postRepository.save(post); // insert
    
    Post postUpdate = new Post();
    post.setId(1l);
    post.setTitle("hibernate");
    postRepository.save(postUpdate); // upate
    
    
    // JPA insert, update를 반영하기 위해 작성 된 코드(@Test에서는 Rollback이 되니까..)
    List<Post> all = postRepository.findAll();
    assertThat(all.size()).isEqualTo(1);

}
~~~


EntityManager.persist()
https://docs.oracle.com/javaee/6/api/javax/persistence/EntityManager.html#persist(java.lang.Object)
Persist() 메소드에 넘긴 그 엔티티 객체를 Persistent 상태로 변경합니다.

EntityManager.merge()
https://docs.oracle.com/javaee/6/api/javax/persistence/EntityManager.html#merge(java.lang.Object)
Merge() 메소드에 넘긴 그 엔티티의 복사본을 만들고, 그 복사본을 다시 Persistent 상태로 변경하고 그 복사본을 반환합니다.

