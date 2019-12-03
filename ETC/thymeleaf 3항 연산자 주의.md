아래와 같이 있다고 할 때 3항 연산자만 사용하면 Class 값이 들어가지 않는다.

~~~ html
<li th:class="${item eq 'Y' ? 'true' : 'false'}"></li>
~~~

이렇게 뭐라 앞에 있어야 동작 한다...

~~~ html
<li th:class="'test' + ${item eq 'Y' ? 'true' : 'false'}"></li>
~~~