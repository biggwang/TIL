### 방법 1 - Alert만 띄우는 html을 만들고 다시 returnUrl을 Controller로 날린다.

~~~ java
model.addAttribute("alertMsg", "비밀번호를 입력해주세요.");
model.addAttribute("returnUrl", "/loginForm");
~~~

~~~ 
<body>
<script type="text/javascript">
var alertMsg = '${alertMsg}';
var returnUrl = '${returnUrl}';

alert(alertMsg);
document.location.href = returnUrl;
</script>
</body>
~~~

### 방법 2 - Spring RedirectAttributes 사용
[참고](https://ifuwanna.tistory.com/9)
