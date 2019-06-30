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

