### 기본타입
숫자, 문자열, 불린값, undefined, null

### 참조타입
배열, 함수, 정규표현식


### 숫자

- 자바스크립트 숫자 타입 크기는 기본 자체가 64비트 부동 소수점으로 저장함.  
- 숫자는 실수형으로 인식하며 때문에 5/2 연산은 2.5가 된다.  

### null과 undefined

null의 typeof는 null이 아니라 object이다.

~~~ javascript
var nullValue = null;
var emptyValue;

console.log(emptyValue == nullValue);     // true
console.log(emptyValue === nullValue);    // false
console.log(typeof emptyValue);           // undefined
console.log(typeof nullValue);            // object
~~~

