## Git 명령어

### diff
- git diff --color-words  
- git diff --word-diff
- git diff <filename>
- git diff log -p --word-diff <filname>
- git diff commit id1:<filname> commit id2:<filname>

### .gitIgnore 업데이트
특정 파일 여기서 a.txt로 가정하고 업데이트 하고 싶으면
- vim 편집기로 수정후
- git rm --cached a.txt (git rm --cached . 하게 되면 모든 파일이 delete 되서 특정 파일만 지정함, --cached 옵션은 로컬은 삭제 않고 remote 저장소에 파일을 삭제하겠다는 의미 )
- git commit, push 하기




### vim 편집기

#### .gitIgnore 파일을 편집해보자
- vim <filename>
- i or a (입력모드 전환)
- 해당 위치 클릭하고 작성
- wq!



## 오늘의 생각

- 얇지만 그래도 넓게 지식 체화와 경험이 필요하다. 평소 다른 방법 다른 도구는 없는지 열린 사고를 가지려고 노력하자.
- 안그러면 익숙함에 빠져 생각이 멈춰버려 다른것 시도조차 할 생각을 안한다.
