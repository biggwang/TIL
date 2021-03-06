### ORM 이란?
ORM은 애플리케이션의 클래스와 SQL 데이터베이스의 테이블 사이의 **맵핑 정보를 기술한 메타데이터**를 사용하여, 자바 애플리케이션의 객체를 SQL 데이터베이스의 테이블에 **자동으로(또 깨끗하게) 영속화** 해주는 기술 - 백기선 강의 참고

### ORM을 왜??
자바는 객체지향적으로 코드를 작성하고 데이터 저장은 RDB에 맞게 데이터 간에 관계를 맺어주면서 넣어 주고 싶어서 ORM을 사용하는 것이다.  즉 패러다임에 불일치를 해소해 준다.  



### JPA에 역사
원래 자바 진영에 EJB 기술 그중에 초창기에 ORM도 있었는데 너무 성능도 구리고 쓰기 불편했다.  
그래서 어느 개발자가 Hibernate 라는 프레임워크를 오픈소스로 공개하였고 큰 인기를 끌게 되었다.  다시 자바진영에서는 ORM에 대한 표준이 필요하게 되었고 Hibernate를 만든 개발자를 자바 ORM 표준 인터페이스를 만들게 하였는데 그것이 JPA다.


### ORM에 장/단점

**장점**
- 생산성
+ 제일 장점이라 생각한다. 일일이 테이블 마다 만들어야 하는 쿼리를 기계적으로 만들필요가 없다.

- 유지보수성

- 성능
  + 한 트랜잭션안에서는 Account를 저장했는데 그 Account 를 변경하고 저장하면 Insert 쿼리, Update 쿼리 3번 있을때 ORM 썼다면
객체와 DB와 캐쉬가 있고 변경 사항을 감지 할 때만 쿼리가 날라감

- 밴더 독립성

**단점**
- 학습비용
  + 자바 객체지향, DB, SQL 많은 것을 알아야 한다.


하이버네이트가 만든 쿼리가 아닌 JDBC를 이용하여 쿼리를 만들어 날릴수도 있다.

### 객체와 릴레이션에 패러다임 불일치

자바는 객체지향으로 코드를 유연하고 유지보수 쉽게 하는 방향으로 RDB는 데이터간에 관계를 지향한다.  

### 자바로는 연관 관계가 단방향이지만 RDB에서는 외래키는 양방향이다.
RDB가 왜 양방향이냐면 서로 조인하면 각각에 테이블 정보 모두 조회 할 수 있기 때문이다.

