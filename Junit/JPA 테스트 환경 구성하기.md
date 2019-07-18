# 메인메소드 확인하기

> Unable to find a @SpringBootConfiguration, you need to use @ContextConfiguration or @SpringBootTest(classes=...) with your test

Spring Boot 기준 메인 메소드 하위 디렉토리에 테스트 Java 파일을 위치 시켜야 한다.


# @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

인메모리가 아닌 실제 DB 테스트 할 때 사용하면 된다. 안 붙여 주면 아래와 같은 오류가 발생한다.  

> Failed to replace DataSource with an embedded database for tests. If you want an embedded database please put a supported one on the classpath or tune the replace attribute of @AutoConfigureTestDatabase.
