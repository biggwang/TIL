~~~ java
<script>
        // mss.ui.config 내의 기본 속성값을 대치하기 위한 Object
        // 서버쪽에서 출력해 줘야 합니다.

        var uiConfig = {
            service : '[[${isMusinsaGNB} ? 'musinsa' : 'wusinsa']]',
            magazineHost : '[[${@environment.getProperty("magazine.url")}]]',
            storeHost : '[[${@environment.getProperty("store.url")}]]',
            wusinsaHost : '[[${@environment.getProperty("wusinsa.url")}]]'
        };

        mss.ui.config.set(uiConfig);
    </script>
~~~
