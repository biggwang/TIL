## 생각

## 컴퓨터 공학 강의

## 독서

## 오늘 새롭게 시도해 본 것

## 책임감있게 일 한 일

## 오늘의 짤막 지식

### Spring 배포 환경 별 설정값 스위칭 방법
[참고](http://enjoydev.tistory.com/1)

~~~ xml
<bean id="config"

		class="org.springframework.beans.factory.config.PropertiesFactoryBean">

		<property name="locations">

			<list>

				<value>classpath:/config/config-common.properties</value>

				<value>classpath:/config/config-#{systemProperties['spring.profiles.active']}.properties

				</value>

			</list>

		</property>

	</bean>
~~~


이클립스 설정  
서버 설정 > open launch configuration > Arguments탭 > VM argument -Dspring.profiles.active=live


## 오늘의 문제 해결 경험
