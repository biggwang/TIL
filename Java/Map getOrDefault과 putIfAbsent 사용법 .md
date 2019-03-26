### Map getOrDefault과 putIfAbsent 사용법 


~~~ java
Map<String, Object> map = new HashMap<>();
map.put("a", map.getOrDefault("a", 0));
map.entrySet().stream().forEach(System.out::println);      // key:a 가 없다면 default값 0이 들어간다.

System.out.println(map.putIfAbsent("b", "1"));             // key:b 가 없다면 반환값은 null이되고 key:b value:1이 입력된다.
System.out.println(map.putIfAbsent("b", "2"));             // 같은 key값 이라면 이전 value:1 값을 가져온다.
~~~  

주로 중복 검사 할 때 사용하면 유용 할 것 같다.