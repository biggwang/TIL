아래에서 결정적인 답을 얻게 되었다.

[Request Body로 보내지는 JSON의 행방 불명](https://github.com/HomoEfficio/dev-tips/blob/master/Request%20Body%EB%A1%9C%20%EB%B3%B4%EB%82%B4%EC%A7%80%EB%8A%94%20JSON%EC%9D%98%20%ED%96%89%EB%B0%A9%20%EB%B6%88%EB%AA%85.md)  


JSON.stringfy 로 보내주지 않으면 아래와 같은 오류가 발생 함
> org.springframework.http.converter.HttpMessageNotReadableException: JSON parse error: Unrecognized token 'json': was expecting ('true', 'false' or 'null');

Spring @RequestBody로 Dto 객체에 담길때 Key값을 못찾는 오류라 한다.  

아래와 같이 하면 해결!

~~~ javascript
$.ajax({type:"POST", contentType: "application/json", url:"<c:url value='/exchangeRates'/>", dataType:"json", data:JSON.stringify({"source":"AUD"}),
~~~