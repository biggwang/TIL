## .gitIgnore
- .gitIgnore 파일에 추가만 해도 ignore 된다. 다만 git rm --cached 하는 이유는 이미 remote 저장소에 올려지 파일을 삭제하기 위함이다.

특정 파일 여기서 a.txt로 가정하고 업데이트 하고 싶으면
- vim 편집기로 수정후
- git rm --cached a.txt (git rm --cached . 하게 되면 모든 파일이 delete 되서 특정 파일만 지정함, --cached 옵션은 로컬은 삭제 않고 remote 저장소에 파일을 삭제하겠다는 의미 )
- git commit, push 하기


## stash
### git stash -u
> untracked 한 파일까지 stash 하기

### git stash show stash@{index}
> stash List에 있는 특정 stash 파일 목록 보기

### git stash show -p | git apply -R 
> stash apply 한거 되돌리기 [참고](https://goo.gl/6tVzeY)

### git stash --patch
> stash 할 목록 선택하기

### git stash show stash@{index}
> stash List에 있는 특정 stash 파일 목록 보기

### git stash branch [이동할 브랜치명]
> 해당 브랜치에서 충돌 나지 않고 다른 브랜치 생성하여 그 브랜치에서 소스 확인하고 싶을 


stash 명령어는 기본적으로 tracking 중인 녀석만 stash에 넣음  
> git stash  

이렇게 하면 tracking 된 녀석만 stash 영역까지 들어가고  
> git stash -u or git stash --include-untracked  

하게 되면 untracking  된것까지 모두 stash 영역으로 들어간다.


### git add 를 통해 이미 staging aread에 들어있는 파일을 제외한 나머지만 stash 하고 싶을 떄
> git stash save --keep-index

### stash에 어떤 것을 넣고 싶은지 판단하고 싶을떄
> git stash --patch


## diff

### git diff --name-status 
> 변경된 파일 리스트 출력

### git diff --name-status branch_name1 branch_name2 
> 서로 다른 브랜치 간 변경 파일 리스트 출력

### git checkout -p stash@{index} filepath
> 특정 stash에 있는 파일과 비교 후 병합, 덮어쓰기

### git diff
> working tree에서 변경전 변경후 파일과 비교

### git diff --cached
> 변경전 파일과 index에 올라간 파일과 비교

### git diff stash@{index}
> 현재 브랜치에서 특정 stage 영역에 있는 파일과 비교

### git diff --color-words
### git diff --word-diff
### git diff log -p --word-diff
### git diff commit id1: commit id2:


## log

### git log -p --word-diff filepath
> commit 별 특정 파일 히스토리 라인별 바뀐부분 조회

### git log --branches --graph --decorate --oneline--oneline
> git log graph 형식 보기

### git log --oneline --grep 찾을내용
> 커밋 로그 간편 조회 후 키워드 탐색

## reflog
Git은 없어지는것이 없다. branch나 commit을 되돌리고 싶으면 reflog를 통해 되돌릴 수 있다.

## show

### git show branch_name:file_path
> 특정 branch에 있는 파일 내용 보기

### git stash show stash@{8}
> 특정 index영역에 파일 내용 보기

## 충돌시

### 특정 커밋으로 파일 되돌리기
> git checkout commitId file_path

