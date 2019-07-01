### 서로 다른 모듈 의존환경에서 Junit JPA Repository 테스트 하기

- @SpringBootTest 로 하면 Invalid bean definition with name 'orderRespository' defined in null 발생
- @DataJpaTest 로 하면 잘 동작함 @DataJpaTest 조사 필요
- @EntityScan @EnableJpaRepositories 으로 해결 함
    - Entity와 JpaRepositories 가 다를 때 각각 패키지를 지정해 주니 Entity Not a managed type 오류가 발생하지 않았다.
