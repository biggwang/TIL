~~~ java
@Test
public void temp() {
    boolean isPass = false;

    isPass = isNatureNumber(-10);

    /**
    * 이부분이 항상 헷갈린다.
    * 쉽게 생각해서 if (true) 이면 안에 로직이 수행된다.
    * if (!(false)) 이면 true 이므로 안에 로직 수행된다.
    **/
    if (!isPass) {
        System.out.println("자연수");
    } else {
        System.out.println("자연수 아님");
    }
}

private boolean isNatureNumber(int num) {
    return num < 0 ? false : true;
}
~~~

