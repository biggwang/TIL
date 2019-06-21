
### 엔티티 맵핑

**@Entity**
- 자동으로 @Table로 맵핑되며 @Table 어노테이션이 생략 된 것
- JPA 세계에서 사용하는 객체
- name 속성을 붙이지 않으면 클래명으로 한다.
- 특정 DB에 User 키워드가 있어 클래스명을 User라고 쓰지 않는게 좋다.


**@Column**
- nullable, unique 속성등을 따로 넣지 않으면 굳이 안적어 주어도 컬럼으로 인식 함

**@Transient**  
- 컬럼으로 맵핑하지 않겠다는 의미  


### spring.jpa.hibernate.ddl-auto = update

JPA에서 테이블 컬럼 타입이 Date -> DateTime 으로 바뀌고 데이터를 집어 넣으면 기존 들어갔던 컬럼 타입이 있기 때문에 오류가 발생한다.  
ddl-auto = create 하게 되면 테이블을 생성하기 때문에 오류가 발생하지 않는다.  
개발 할 때는 그래서 create 하는게 좋다.

### Value 타입 맵핑

**@Embeddable**  
Composite 한 Value 타입



### 1대다 맵핑
