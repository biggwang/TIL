### 기본타입
숫자, 문자열, 불린값, undefined, null

### 참조타입
위 기본타팁을 제외한 모든것은 객체(배열, 함수, 정규표현식) 임


### 숫자

- 자바스크립트 숫자 타입 크기는 기본 자체가 64비트 부동 소수점으로 저장함.  
- 숫자는 실수형으로 인식하며 때문에 5/2 연산은 2.5가 된다.  

### null과 undefined

null의 typeof는 null이 아니라 object이다.  
때문에 undefined와 비교 할 때 === 비교시 false가 발생한다.

~~~ javascript
var nullValue = null;
var emptyValue;

console.log(emptyValue == nullValue);     // true
console.log(emptyValue === nullValue);    // false
console.log(typeof emptyValue);           // undefined
console.log(typeof nullValue);            // object
~~~

### 객체 프로퍼티 접근하기

객체 프로퍼티 접근을 대괄호 접근시 문자열 '' 표시를 해줘야 함  
또한 중간에 객체 프로퍼티를 추가해도 동적으로 생성되고 사용 할 수 있음

~~~ javascript
var obj = {
    name : 'ryu',
    age : '31'
}

console.log(obj.name);    // ryu
console.log(obj[name]);   // undefined
console.log(obj['name']); // ryu

obj.height = 174;
console.log(obj.height);  // 174

obj.fn = function () {
    return "함수도 프로퍼티 값으로 가능함";
}
console.log(obj.fn());    // 함수도 프로퍼티 값으로 가능함
~~~

### 객체는 참조 타입

선언된 객체 objA, objB는 객체 값을 가지고 있는 것이 아닌 객체 참조 값을 가지고 있는 것이다.  
var objB = objA; 연산으로 같은 주소값을 가지고 있기 때문에 둘중 하나라도 값이 변경되면 모두 변경된다.

~~~ javascript
var objA = {
    val : 40
}
var objB = objA;

console.log(objA.val);      // 40
console.log(objB.val);      // 40

objB.val = 100;
console.log(objA.val);      // 100
console.log(objB.val);      // 100
~~~

### 객체 비교

객체 비교는 참조값으로 하기 때문에 값이 같더라도 참조값이 다르면 다른것이다.
~~~ javascript
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);          // true
console.log(objA == objB);    // false
console.log(objB == objC);    // true

~~~
