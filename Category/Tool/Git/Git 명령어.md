# 영역
- Working Tree: 현재 작업영역
- Staging Area(Index): add 명령어로 옮겨진 commit 대상 파일
- Local Branch: Staging Area에서 commit 된 영역


# 브랜치 명명법

## release 브랜치
- develop 브랜치로부터 생성하는 브랜치이다.
- 명명규칙: release/X.X.X
- 브랜치 생성 후에는 버그픽스만 반영한다.
- 최종 확정 후에는 develop와 master 브랜치에 병합한다.
- master 브랜치에 병합 후 태그를 부여한다.

## develop  브랜치 (다음버전 개발)

## hotfix 브랜치 (버그수정)
- master 브랜치로부터 생성하는 브랜치이다. master 브랜치에 심각한 오류가 있는 경우에만 생성한다.
- 명명규칙: hotfix/<issue_number>
- 완료 후 master, release, develop 브랜치에 병합한다.

## feature 브랜치 (기능개발)
- develop 브랜치로부터 생성하는 브랜치이다.
- 명명규칙: feature/<issue_number>/<짧은설명>
- 완료 후 develop 브랜치에 병합한다.

## issue 브랜치
- develop, feature, release 브랜치로부터 생성하는 브랜치이다.
- 명명규칙: issue/<issue_number>
- 완료 후에는 생성된 부모 브랜치로 병합한다.

[출처](http://rumblefish.tistory.com/65)



# 명령어 모음

## .gitIgnore
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
