### javascript에서 함수란?

일급객체 이므로 함수 또한 변수처럼 할당 할 수 있다.

### 함수 정의 방법 1 - 함수 선언문

반드시 함수명을 적어야 한다.

~~~ javascript
function sum(x, y) {
  return x + y;
};

console.log(add(3,4));
~~~

#### 자바스크립트 엔진에 의해서 다음과 같이 변경 된다.

~~~ javascript
var add = functio add(x, y) {
  return x + y;
};
~~~

그렇기 때문에 add()라고 사용해도 함수 호출이 되는 것이다.




### 함수 정의 방법 2 - 함수 표현식

함수를 변수에 할당 하는 방식

~~~ javascript
var add = function sum(x, y) {
  return x + y;
};
~~~

### sum() 호출하면 안되고 함수 변수 add()를 호출해야 한다.

sum()은 내부적 호출(재귀호출) 방식으로 사용 가능하다.

#### 함수표현식은 세미콜론을 붙여주는게 관습이다.

~~~ javascript
var func = function () {
    return 42;
}
(function () {
    console.log("function called");
})();
~~~

안그러면 오류가 발생하고 어디서 오류를 찾기 어렵다. 

자바스크립트 엔진이 위 구문을 해석할 때 세미콜론이 없어 즉시실행함수가 func() 실행하라는 의미로 착각하고 즉시실행함수 마지막 () 여기에서 42(); 로 인식하여 구문 오류가 발생한다.


### 함수 호이스팅 - 함수 표현식을 사용 권고 하는 이유 

함수 표현식은 먼저 선언되지 않은 함수를 호출하면 오류가 발생한다.

**함수를 사용하기전에 반드시 함수부터 사용 할 수 있게 해준다.**
~~~ javascript
add(2, 3);  // uncaught type error

var add = function add(a, b) {
    return console.log(a + b);
}

add(1, 9);  // 10
~~~

하지만 아래 함수 선언식은 함수를 먼저 선언하지 않아도 함수를 호출해서 사용 할 수 있다.

이것은 코드의 구조가 위에서 아래부터 자연스럽게 읽히지 않게 한다.
~~~ javascript
add(2, 3);  // 5

function add(a, b) {
    return console.log(a + b);
}

add(1, 9);  // 10
~~~

이런 호이스팅 발생 원인은 자바스크립트의 변수 생성과 초기화 작업이 분리되기 때문인다. 5장 실습이 끝나면 여기 적도록 하자


js에서는 선언과 할당이 각각 별개로 동작하는데,

호이스팅으로 변수,함수는 선언된 부분이 함수 스코프라면 함수 스코프 맨위 함수외 영역이라면 글로벌 영역 맨 위로 올라가서 변수 초기화 부터 한다.
