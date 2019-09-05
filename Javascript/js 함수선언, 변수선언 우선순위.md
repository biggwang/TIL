변수와 함수가 같은 이름으로 되어 있을 때 어느것이 우선이 될까?

### 변수 할당이 되지 않으면 함수 선언이 우선이 된다.

~~~ javascript
var test1;
test();

function test1() {
  console.log("안녕!!");
}

console.log(typeof test1);  // function
~~~


### 변수 할당 되었으면 함수 선언이 우선이 된다.

~~~ javascript
var test2 = "변수할당!";
function test2() {
  console.log("안녕!!");
}

console.log(typeof test2);
~~~

javascript 엔진에서는 아래와 같이 해석 하게 된다.

~~~ javascript
var test2;
test2();
test2 = "변수할당!";

function test2() {
    console.log("안녕!!");
}

console.log(typeof test2);
~~~
