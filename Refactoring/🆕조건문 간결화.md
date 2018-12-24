### :mag: OVERVIEW
메소드를 길게 하는 주된 요인중에 하나  
분기문으로 인해 메소드 하나에 한가지의 기능을 해야 하는 원칙을 위배하게 됨.  
분기문에 대한 리펙토링은 메소드를 더욱 간결화 하고 가독성을 높이게 해주는 효과가 있음


### :book: 조건문 쪼개기
분기가 된다는 것은 서로 다른 기능이 있다는 것  
그 다른 코드 조각을 용도에 맞는 이름의 메소드 호출로 바꾸면 가독성 증가

#### Before
~~~ java
if(conditionA || conditionB)
  a = b * c / d;
else
  a = c + d;
~~~

#### After
~~~ java
if(conditionMethod())
  a = methodA();
else
  a = methodA();
~~~

### :book: 제어 플래그 제거
