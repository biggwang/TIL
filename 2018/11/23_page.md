## Git 사용

### 현재 브랜치에서 특정 stage 영역에 있는 파일과 비교 방법
$ git diff stash@{0}  
$ git diff stash@{0} branch name

### Stash List에 있는 특정 stash 파일 목록 보기
$ git stash show stash@{7}
