### 렉시컬 스코프

스코프는 함수가 실행 할 떄가 아닌 선언 할 때 스코프가 생긴다.

### 스코프체인 - 선언된 변수를 찾을 때 까지 글로벌(window)까지 올라단다.

~~~ javascript
var name = '나는 글로벌 변수입니다.';
function outer() {
    console.log('outer 메소드 입니다. name 변수 있나요? : ', name);        // 나는 글로벌 변수입니다.
    function inner() {
        var enemy = 'nero';
        console.log('inner 메소드 입니다. name 변수 있나요? : ', name);    // 나는 글로벌 변수입니다.
    }
    inner();
}
outer();
console.log(enemy); // undefined
~~~


~~~ javascript
var name = 'zero';
function log() {
  console.log(name);
}

function wrapper() {
  name = 'nero';
  log();
}
wrapper();
~~~


~~~ javascript
var name = 'zero';
function log() {
  console.log(name);
}

function wrapper() {
  var name = 'nero';
  log();
}
wrapper();
~~~
