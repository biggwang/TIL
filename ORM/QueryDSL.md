### 쿼리메소드가 보기 너무 어려울때..
findByFirstNameIngoreCaseAndLastNameStartsWithIgnoreCase(String firstName, String lastName) 


### 여러 쿼리 메소드는 대부분 두 가지 중 하나.
- Optional<T> findOne(Predicate): 이런 저런 조건으로 무언가 하나를 찾는다.
- List<T>|Page<T>|.. findAll(Predicate): 이런 저런 조건으로 무언가 여러개를 찾는다.
- QuerydslPredicateExecutor 인터페이스

### QueryDSL
- http://www.querydsl.com/
- 타입 세이프한 쿼리 만들 수 있게 도와주는 라이브러리
- JPA, SQL, MongoDB, JDO, Lucene, Collection 지원
QueryDSL JPA 연동 가이드

### 스프링 데이터 JPA + QueryDSL
- 인터페이스: QuerydslPredicateExecutor<T>
- 구현체: QuerydslPredicateExecutor<T>

### 연동 방법
- 기본 리포지토리 커스터마이징 안 했을 때. (쉬움)
- 기본 리포지토리 커스타마이징 했을 때.



### 출처
인프런 백기선 Spring JPA
