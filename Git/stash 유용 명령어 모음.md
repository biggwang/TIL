stash 명령어는 기본적으로 tracking 중인 녀석만 stash에 넣음  
> git stash  

이렇게 하면 tracking 된 녀석만 stash 영역까지 들어가고  
> git stash -u or git stash --include-untracked  

하게 되면 untracking  된것까지 모두 stash 영역으로 들어간다.


### git add 를 통해 이미 staging aread에 들어있는 파일을 제외한 나머지만 stash 하고 싶을 떄
> git stash save --keep-index

### stash에 어떤 것을 넣고 싶은지 판단하고 싶을떄
> git stash --patch


### 