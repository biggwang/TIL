## JPA Repository에 대해서

### 상속 관계
> JpaRepository > PagingAndSortingRepository > CrudRepository > Repository

위와 같이 수퍼클래스가 존재하며 그렇기 때문에 JpaRepository를 상속 받으면 findAll, save 등 CRUD에 대한 오퍼레이션을 사용 할 수 있는것이다.

### @EnableJpaRepositories
- 스프링 부트 사용할 때는 사용하지 않아도 자동 설정 됨.
- 스프링 부트 사용하지 않을 때는 @Configuration과 같이 사용.
- Repository 를 찾아 해당 기능을 사용하게 해줌

### @Repository 애노테이션을 붙여야 하나 말아야 하나...
- 안붙여도 됨 이미 붙어 있음
- 구현체인 SimpleJpaRepository객체에 이미 붙어 있음

### 스프링 @Repository
- SQLExcpetion 또는 JPA 관련 예외를 스프링의 DataAccessException으로 변환 해준다.

### Junit 에서 @DataJpaTest 어노테이션으로 JPA를 테스트할 때

기본적으로 스프링에서 Rollback을 수행하기 때문에 JPA에서 롤백할껀데 굳이 insert하지 않는다.  
만약, 하고 싶다면 테스트 메소드에 @Rollback(false)를 주도록 한다.  


## 엔티티 저장하기

### JpaRepository의 save()는 단순히 새 엔티티를 추가하는 메소드가 아닙니다.
- Transient 상태의 객체라면 EntityManager.persist()
- Detached 상태의 객체라면 EntityManager.merge()

### Transient인지 Detached 인지 어떻게 판단 하는가?
- 엔티티의 @Id 프로퍼티를 찾는다. 해당 프로퍼티가 null이면 Transient 상태로 판단하고 id가 null이 아니면 Detached 상태로 판단한다.
- 엔티티가 Persistable 인터페이스를 구현하고 있다면 isNew() 메소드에 위임한다.
- JpaRepositoryFactory를 상속받는 클래스를 만들고 getEntityInfomration()을 오버라이딩해서 자신이 원하는 판단 로직을 구현할 수도 있습니다.


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

## 같은 save() 함수 라도 내부적으로 persist()가 될수도 있고 merge()가 될수도 있다.


###  영속성 컨텍스트에 최초!!! 저장 될 경우

#### EntityManager.persist()
- https://docs.oracle.com/javaee/6/api/javax/persistence/EntityManager.html#persist(java.lang.Object)
- Persist() 메소드에 넘긴 그 엔티티 객체를 Persistent 상태로 변경하며 EntityManager가 관리하는 상태가 된다.
- 다시 말해서 EntityManger에 관리되지 않는 Entity



### 영속성 컨텍스트에 저장 된 이력이!!! 있을 경우

#### EntityManager.merge()
- https://docs.oracle.com/javaee/6/api/javax/persistence/EntityManager.html#merge(java.lang.Object)
- Merge() 메소드에 넘긴 그 엔티티의 복사본을 만들고, 그 복사본을 다시 Persistent 상태로 변경하고 그 복사본을 반환합니다.


### 그럼 같은 save() 인데 어떤것은 insert, update 무슨 차이가 있는 것인가?

~~~ java
@Test
public void save() {
    
    // @Generated 를 제거하고 id없이 insert하므로 perist()가 호출 된다.
    Post post = new Post();
    post.setTitle("jpa");
    
    // 영속성 컨텍스트에 보관된 객체를 넘겨준다.
    Post savedPost = postRepository.save(post); // persist
    
    // return 받은 entity와 전달 파라미터 entity와 같은 참조 같은 객체이다.
    assertThat(entityManager.contatins(post)).isTrue();
    assertThat(entityManager.contatins(savedPost)).isTrue();
    assertThat(savedPost === post);
    
   
    
    
    
    
    // merge구문이 수행될 때 전달 받은 파라미터 엔티티인 postUpdate에 복사본을 만들고
    // 그 복사본을 merge하고 그 복사본이 EntityManager에 관리되고 그복사본이 return 된 것이다.
    // 그러므로 postUpdate와 updateedPost 객체는 다르다.
    Post postUpdate = new Post();
    post.setId(post.getId());
    post.setTitle("hibernate");
    Post updatedPost = postRepository.save(postUpdate); // merge
    
    assertThat(entityManager.contatins(updatedPost)).isTrue();
    assertThat(entityManager.contatins(postUpdate)).isFalse();
    assertThat(updatedPost == postUpdate).isFalse();
    
            
    // JPA insert, update를 반영하기 위해 작성 된 코드(@Test에서는 Rollback이 되니까..)
    List<Post> all = postRepository.findAll();
    assertThat(all.size()).isEqualTo(1);

}
~~~



### Best Practice
전달 받은 파라미터를 사용하지 말고 return 받은 객체를 사용한다. 

JPA, EntityManager에 소름 돋는 동작 방식을 보겠다.  
바로 위 테스트 코드를 조금 바꿔서 아래 예제를 보면

~~~ java
@Test
public void save() {
    
    Post postUpdate = new Post();
    post.setId(post.getId());
    post.setTitle("hibernate");
    Post updatedPost = postRepository.save(postUpdate); // merge
    
    // 위 merge구문 때문에 postUpdate Entity가 복사된 객체가 영속성컨텍스트에 관리 되었기 때문에
    // postUpdate Entity는 영속성 컨텍스트에 관리되지 않는다.
    // 따라서 set하여 title을 바꾸더라도 Update 구문이 DB에 날라가지 않는다.
    postUpdate.setTitle("boriswinter");
    
    // return을 updatePost로 받았기 때문에 해당 Entity는 영속성 컨텍스트에 관리된다.
    // 따라서 set하여 title이 변경 되었기 때문에 update 구문이 날라간다.
    // 정확히 말해서 아래 findAll 하는 부분이 있는데 여기서 모든 데이터를 가져오려면 방금한 
    // update 구문을 반영해서 변경된 데이터를 가져와야 하는것을 영속성 컨텍스트가 판단해서 
    // update 구문을 실행한 것이다. 
    // 바로 이러한 점이 영속성 컨텍스트에 장점이 되겠다.
    updatedPost.setTitle("boriswinter");
    
            
    // JPA insert, update를 반영하기 위해 작성 된 코드(@Test에서는 Rollback이 되니까..)
    List<Post> all = postRepository.findAll();
    assertThat(all.size()).isEqualTo(1);

}
~~~

