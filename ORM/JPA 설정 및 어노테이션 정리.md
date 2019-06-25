## JPA 설정 관련
---- 
### spring.jpa.hibernate.ddl-auto = update

- 장점은, 엔티티 클래스에 컬럼 추가하면 DB에 반영되서 편리하다.  
단점은, 추가한 컬럼이 필요없어 엔티티 클래스에서 제거해도 테이블 스키마에 적용이 안된다는 것이다.  
즉, 스키마가 지저분 할 수 있다. 개발 단계에서는 create문을 사용하는게 좋다.

- 엔티티 클래스 정보를 바꾼다고 해서 이미 생성된 테이블 스키마는 변경되지 않는다.

### spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
mysql 연동시 @Column(nullable = false, unique = true) 이 있다면 
> Error executing DDL "alter table TABLE_NAME add constraint UK_eke0p6056qepc3h537i4xgban unique (COL_NAME)" via JDBC Statement

에러가 발생하는데 그럴땐 위 설정값을 추가해 주면 된다.




## 엔티티 맵핑 관련 어노테이션
----

**@Entity**
- 자동으로 @Table로 맵핑되며 @Table 어노테이션이 생략 된 것
- JPA 세계에서 사용하는 객체
- name 속성을 붙이지 않으면 클래명으로 한다.
- 특정 DB에 User 키워드를 사용 할 수 없다면 @Entity(name="users")라고 사용하면 된다.

**@Column**
- nullable, unique 속성등을 따로 넣지 않으면 굳이 안적어 주어도 컬럼으로 인식 함

**@Transient**  
- 컬럼으로 맵핑하지 않겠다는 의미  
- 그냥 자바에서만 필요한 데이터

**@Temporal**
- 날짜 관련 
- JPA 2.1에서는 Date와 Calender 밖에 지원되지 않음 (2.2에서는 지원 하는것 같음)



## Composite Value 타입 맵핑

Address라는 Compoite한 컬럼들을 모아 놓고 
~~~ java

@Embeddable
public class Address {

    private String street;

    private String city;

    private String state;

    private String zipCode;

}
~~~

엔티티 내에서 아래와 같이 쓰게 되면 Address 하위 컬럼들이 테이블에 생기게 된다.

~~~ java
@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql 사용시 붇여줘야 한다.
    private Long id;
    
    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "street", column = @Column(name = "home_street"))
    })
    private Address address;

}

~~~



### 1대다 맵핑
