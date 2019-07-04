### 조건절을 스펙으로 정의 할 수 있다.
- 베스트 코멘트
- 좋아요 10개 이상 코멘트
- 베스트 이면서 좋아요 10개 이상 코멘트 등등..


에릭 에반스의 책 DDD에서 언급하는 Specification 개념을 차용 한 것으로 QueryDSL의 Predicate와 비슷합니다.

### 설정 하는 방법
- https://docs.jboss.org/hibernate/stable/jpamodelgen/reference/en-US/html_single/
  + 의존성 설정
  + 플러그인 설정
  + IDE에 애노테이션 처리기 설정
  + 코딩 시작
- build를 하게 되면 컴파일된 클래스가 만들어진다.

### 셋팅 참고 
https://docs.google.com/document/d/1IjSKwMEsLdNXhRLvFk576VTR03AKTED_3jMsk0bHANg/edit#


~~~ java
 public interface CommentRepository extends JpaRepository<Comment, Long>, JpaSpecificationExecutor<Comment> {
 
 
 }
~~~

~~~ java
pubilc class CommentSpecs {
    
    public static Specification<Comment> isBest() {
        return new Spectification<Comment>() {
            @Override
            public Predicate toPredicate(Root<Comment> root,
                                         CriteriaQuery<?> query,
                                         CriteriaBuilder builder) {
            
                return builder.isTrue(root.get(Comment_.best));
            }
        };
    }
    
     public static Specification<Comment> isGood() {
        return new Spectification<Comment>() {
            @Override
            public Predicate toPredicate(Root<Comment> root,
                                         CriteriaQuery<?> query,
                                         CriteriaBuilder builder) {
            
                return builder.greaterThanOrEqualTo(root.get(Comment_.up), 10);
            }
        };
    }
  
}
~~~


~~~ java
@Test
public void specs() {
    Page<Comment> page = comments
            .findAll(isBest().or(isGood()), PageRequest.of(0, 10));

}
~~~
