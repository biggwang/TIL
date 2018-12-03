## Git 명령어 이어 쓰기
$ git status |
>   > git add . |
>   > git commit -m 'test'


## .gitIgnore
- .gitIgnore 파일에 추가만 해도 ignore 된다. 다만 git rm --cached 하는 이유는 이미 remote 저장소에 올려지 파일을 삭제하기 위함이다.

특정 파일 여기서 a.txt로 가정하고 업데이트 하고 싶으면
- vim 편집기로 수정후
- git rm --cached a.txt (git rm --cached . 하게 되면 모든 파일이 delete 되서 특정 파일만 지정함, --cached 옵션은 로컬은 삭제 않고 remote 저장소에 파일을 삭제하겠다는 의미 )
- git commit, push 하기


## stash
### git stash show stash@{index}
> stash List에 있는 특정 stash 파일 목록 보기

### git stash show -p | git apply -R 
> stash apply 한거 되돌리기 [참고](https://goo.gl/6tVzeY)


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

