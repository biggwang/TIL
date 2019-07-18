### Repository 직접 구현하기

#### 특정 리포지토리 당
~~~ java
@RepositoryDefinition(domainClass = Comment.class, idClass = Long.class)
public interface CommentRepository {

    Comment save(Comment comment);

    List<Comment> findAll();
    
}
~~~

#### 공통 인터페이스 정의

위 내가 구현한 save, findAll 기능을 모든 리파지토리에서 쓰고 싶다면 아래와 같이 작성한다.  
또는 Spring Data가 제공해주는 JpaRepository에 모든 기능중에 골라 정의하여 공통으로 쓰고 싶을때도 사용해도 좋다.

~~~ java
@NoRepositoryBean
public interface MyRepository<T, ID extends Serializable> extends Repository<T, ID> {

    <E extends T> E save(E entity);

    List<T> findAll();

}
~~~

그리고 이렇게 쓰면 된다.

~~~ java
public interface CommentRepository extends MyRepository<Comment, Long> {
 
}
~~~
