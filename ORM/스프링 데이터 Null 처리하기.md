### Java Optional 객체 
~~~ java
@NoRepositoryBean
public interface MyRepository<T, ID extends Serializable> extends Repository<T, ID> {

    <E extends T> E save(E entity);

    List<T> findAll();
    
    <E extends T> Optional<E> findById(Id id);
    
}
~~~ 

주로 단일 값을 가져올 때 사용한다. List 같은 경우는 비어있는 객체가 List로 나오기 때문이다.  
그것은 Spring Data에서 Repository 사용 할 때 null을 List로 받을때 빈 객체를 List로 만들어 주기 때문이다.


### 스프링 5.0 부터 지원하는 @Null, @NonNullApi, @Nullable 사용
~~~ java
@NoRepositoryBean
public interface MyRepository<T, ID extends Serializable> extends Repository<T, ID> {

    <E extends T> E save(@NonNull E entity);

    List<T> findAll();
    
    @Nullable
    <E extends T> E findById(Id id);
    
}
~~~ 
