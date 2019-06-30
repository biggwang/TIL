### Java Optional 객체 
~~~ java
@NoRepositoryBean
public interface MyRepository<T, ID extends Serializable> extends Repository<T, ID> {

    <E extends T> E save(E entity);

    List<T> findAll();
    
    <E extends T> Optional<E> findById(Id id);
    
}
~~~ 
