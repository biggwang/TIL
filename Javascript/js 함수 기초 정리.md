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

var add = functio add(x, y) {
  return x + y;
};

그렇기 때문에 add()라고 사용해도 함수 호출이 되는 것이다.





### 함수 정의 방법 2 - 함수 표현식

함수를 변수에 할당 하는 방식

~~~ javascript
var add = function sum(x, y) {
  return x + y;
};
~~~

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

자바스크립트 엔진이 위 구문을 해석할 때 세미콜론이 없어 즉시실행함수가 func() 실행하라는 의미로 착각하고 즉시실행함수 마지막 () 여기에서

42(); 로 인식하여 구문 오류가 발생한다.
