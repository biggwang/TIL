이런식으로 자바 함수와 URI encoding을 동시에 할 수 있다.

~~~ java
<th:block th:with="category=${#uris.unescapePath(#httpServletRequest.getParameter('category'), 'UTF-8')}">
~~~
