### 자바스크립트 일급 객체 특징
- 리터럴에 의해 생성
- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
- 함수의 인자로 전달 가능
- 함수의 리턴값으로 리턴 가능
- 동적으로 프로퍼티를 생성 및 할당 가능



### 변수나 프로퍼티의 값으로 할당

#### 일급객체 이므로 변수에 함수 할당 할 수 있다.
~~~ javascript
var foo = 100;
var bar = function() { return 100; };
console.log(bar());
~~~

#### 일급객체 이므로 프로퍼티에 함수 할당 할 수 있다.
~~~ javascript
var obj = {};
obj.baz = function() { return 200; }
console.log(obj.baz());
~~~


### 함수 인자로 전달 하기

~~~ javascript
var foo = function(func()) {
  func();
};

// foo() 함수 실행
foo(function()) {
  console.log('Function can be used as the argument.');
});
~~~

### 리턴값으로 활용

함수 자체가 값이기 때문에 return으로도 활용 할 수 있다.
~~~ javascript
var foo = function() {
  return function() {
    console.log('this function is the return value');
  };
};

~~~


### 함수로 동적으로 프로퍼티 할당 하기

~~~ javascript
function add(x,y) {
  return x+y;
}

add.result = add(3,2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);
~~~

add() 함수 객체 안에 code영역과 result, status 객체 프로퍼티 값이 존재한다.


### Function.prototype 

모든 자바스크립트 함수에 부모객체를 말한다. 

Function.prototype도 함수이므로 부모객체 즉, 모든 함수 객체에 조상인 Object.prototype이 존재한다. 

ECMAScript 명세서에서는 Function.prototype 객체가 가져야 하는 프로퍼티를 다음과 같이 기술하고 있다.

- construcotor 프로퍼티
- toString() 메서드
- apply(thisArg, argArray) 메서드
- call(thisArg, [, arg1 [,arg2,]]) 메서드
- bind(thisArg, [,arg1[,arg2.]]) 
