## 제어 플래그 줄이고 return, break로 대체하기

~~~ java

boolean flag = false;
while(!flag) {
    tmp = r2.readLine();
    if(tmp == null){
        flag = true;
    }else {
        boolean flag2 = true;
        ...

        for(..){

            if(flag2){
                if(tmp2 == ''){
                    flag2 = false;
                }
            }
        }
    }
}

~~~

어떤가? 보기만해도 복잡하지 않은가?? if~else 문에 중첩으로 계속 신경쓰면서 끝까지 파악하려고 노력해야 한다... 또한 제어 플래그에 알 수 없는 명명으로 가독성을 더 떨어진 상태이다. 이것을 개선해 보면  

~~~ java

while(true) {
    String line = r2.readLine();
    if(line == null){
        break;
    }
    int equalIndex = line.indexOf("=");
    if(equalIndex > 0){
        ....
    }
}

~~~

어떤 느낌인지 알겠는가? 미리 함수를 빠져나갈 조건이 있다면 미리 break, return 문을 사용하자 그러면 아래 코드는 읽지 않아도 되지 않는가?  
제어 플래그 대신 break, return문을 쓰면 코드 가독성이 높아진다.