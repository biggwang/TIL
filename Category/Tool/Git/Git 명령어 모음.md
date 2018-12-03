## .gitIgnore
- .gitIgnore 파일에 추가만 해도 ignore 된다. 다만 git rm --cached 하는 이유는 이미 remote 저장소에 올려지 파일을 삭제하기 위함이다.

특정 파일 여기서 a.txt로 가정하고 업데이트 하고 싶으면
- vim 편집기로 수정후
- git rm --cached a.txt (git rm --cached . 하게 되면 모든 파일이 delete 되서 특정 파일만 지정함, --cached 옵션은 로컬은 삭제 않고 remote 저장소에 파일을 삭제하겠다는 의미 )
- git commit, push 하기


## stash
### git stash show stash@{index}
> Stash List에 있는 특정 stash 파일 목록 보기

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
### git log --branches --graph --decorate --oneline--oneline
> git log graph 형식 보기

### git log --oneline --grep 찾을내용
> 커밋 로그 간편 조회 후 키워드 탐색
