쿼리 메소드 마다 연관 관계의 Fetch 모드를 설정 할 수 있습니다.

### @NamedEntityGraph
@Entity에서 재사용할 여러 엔티티 그룹을 정의할 때 사용.

### @EntityGraph
- @NamedEntityGraph에 정의되어 있는 엔티티 그룹을 사용 함.
- 그래프 타입 설정 가능
  + (기본값) FETCH: 설정한 엔티티 애트리뷰트는 EAGER 패치 나머지는 LAZY 패치.
  + LOAD: 설정한 엔티티 애트리뷰트는 EAGER 패치 나머지는 기본 패치 전략 따름.


~~~ java
@Entity
public class Comment {
    
    @Id @GeneratedValue
    private Long id;
    
    private String comment;
    
    // LAZY로 설정하였기 때문에 실제 사용 될 때 Post 데이터를 조회한다.
    // 단, Comment 객체가 영속성 컨텍스트에서 관리 되어져야 한다.
    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;  
}
~~~
