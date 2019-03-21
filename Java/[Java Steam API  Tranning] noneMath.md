코딩 문제 풀 때 Java Stream API를 의식적으로 사용하여 코드를 깔끔하게 하고 싶은 마음에 Steam API사용한 상황을 정리한다.


### 상황
2개의 문자 배열이 있을 때 겹치지 않는 하나의 문자열을 리턴하는 방법


### noneMatch
모든 조건을 만족하지 않을 때 true를 반환

### 데이터 
~~~ java
String[] a = new String[]{"1", "2", "3"};
String[] b = new String[]{"2","3"};
~~~

### Stream API 사용 코드
~~~ java
String answer = Arrays.stream(a)
                    .filter(item -> Arrays.stream(b).noneMatch(x -> item.equals(x)))
                    .collect(Collectors.joining());
~~~

### 일반 코드
~~~ java
String answer = "";
for(String x : a){
    boolean isExist = true;
    for(String y : b){
        isExist = (!x.equals(y)) ? false : true;
    }
    if(!isExist) {
        result = x;
        break;
    }
}
~~~

무조건 Stream API를 선호하는 것은 아니지만 개발중 for문 처리하는 로직이 많아 Stream API로 조회 -> 필터 -> 결과 생성 -> 결과 할 때 깔끔하게 코드를 작성 할 수 있다면 아주 유용 할 것 같다.