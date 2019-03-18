### Stream 을 사용하면서 깔끔하게 Exception 처리하는 방법 

일단 제일 쉬운 방식은 그냥 try ~ catch 구문을 사용하는 것이다.
~~~ java
Arrays.stream(StringUtil.getArray(commandMap, "applyInfoArr"))
    .forEach(item -> {
        try {
            // TODO...
        } catch (Exception e) {
            throw new RuntimeException(e);      // 왜 Exception 하면 오류가 날까?
        }
    });
~~~

