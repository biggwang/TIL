## Overview
- 장황한 메소드 부터 잘 정리만 되도 리펙토링은 반이상 됬다고 생각 된다.
- 그래서 메소드 정리 리펙토링이 가장 중요 한 것 같다.

### :book: 메소드 추출
말그데로 중복 된 기능을 메소드로 빼라는 뜻

### :book: 메소드 내용 직접 삽입
메소드 추출과 반대 개념으로 메소드가 정말 간단하면 그냥 메소드 만들지 말고 그냥 코드내에서 쓰라는 뜻

### :book: 임시변수를 메서드 호출로 전환
메서드 정리 리펙토링을 실시할 때 가장 힘들고 까다로운 것이 지역변수이다.  
임시변수를 메소드로 추출한다면 여기저기서 함수내 호출로 사용 가능하여 그만큼 코드 길이도 감소 되는 효과가 있다.

#### Before
~~~java
int average = total / cnt;
if(average > 10)
    return average * 10;
else 
    return average * 0.1;
~~~

#### After
~~~java
// 지역변수를 함수로 빼서 지역변수에 대한 코드가 줄어들었음
if(getAverage() > 10)
    return getAverage() * 10;
else 
    return getAverage() * 0.1;
~~~

단, 임시변수가 1번 이상 대입 될 수 있는지 확인이 필요하며 확인을 위해 임시변수를 먼저 final 선언후 컴파일 하여 한번만 대입되는 변수인지 확인 하자

### :book: 직관적 임시변수 사용
수식이 너무 복잡하여 가독성이 떨어지면 직관적인 임시변수에 대입하여 가독성을 높인다.

#### Before
~~~java
// 조건문 가독성 떨어짐..
if(platform.toUpperCase().indexOf("MAC") > -1){

}
~~~

#### After
~~~java
final boolean isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
if(isMacOs){

}
~~~

### :book: 임시변수 분리
임시변수에 한번 대입됬는데 다른 곳에서 또 대입한다면 서로 임시변수 분리

### :book: 매개변수로의 값 대입 제거
매개변수를 메소드내에서 사용시 참조에 의한 전달인 경우에 매개변수를 재 대입하면 매개변수 객체는 완전히 다른 객체가 되어 버리기 때문에 실수 방지를 위해서라도 매개변수는 매개변수 역활만 해야 한다.

~~~ java 
void aMethod(Object obj1){
    obj1 = anotherObj();    // obj1은 완전히 다른 객체가 됨..
}
~~~

### :book: 메서드를 메서드 객체로 전환
지역변수가 너무 많이 메서드를 쪼갤수 없으면 해당 메서드를 클래스로 만들어 각 지역변수를 멤버변수로 하여 만든 클래스내에서 메서드를 쪼개는 방식

#### Before
~~~Java
int aMethod(int a, int b, int c, int d){
    int localA = (a * b * c) / d;
    int localB = (a + b) * d / c;
    if(d - localA > 10){
        localB - -= 20;
    }
    // doSomething..

    return localA - localB / 2;
}
~~~


#### After
~~~Java
class A{

    private int a;
    private int b;
    private int c;
    private int d;
    
    int aMethod(){
        int localA = (a * b * c) / d;
        int localB = (a + b) * d / c;
        
        bMethod();  // 새롭게 만든 클래스내에서 메소드 쪼개기가 맘껏 가능하다.
        // doSomething..

        return localA - localB / 2;
    }

    void bMethod(){
        if(d - localA > 10){
            localB - -= 20;
        }
    }
}

~~~
