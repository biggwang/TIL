## Git 사용

### Git 각 영역
- Working Tree: 현재 작업영역  
- Staging Area(Index): add 명령어로 옮겨진 commit 대상 파일
- Local Branch: Staging Area에서 commit 된 영역

### diff 명령어
$ git diff:  working tree에서 변경전 변경후 파일과 비교  
$ git diff --cached: 변경전 파일과 index에 올라간 파일과 비교  
$ git diff stash@{0}: 현재 브랜치에서 특정 stage 영역에 있는 파일과 비교  

### Stash List에 있는 특정 stash 파일 목록 보기
$ git stash show stash@{7}

### git log graph 형식 보기
$ git log --branches --graph --decorate --oneline--oneline

### 브랜치 명명법 

#### release 브랜치
- develop 브랜치로부터 생성하는 브랜치이다. 
- 명명규칙: release/X.X.X
- 브랜치 생성 후에는 버그픽스만 반영한다. 
- 최종 확정 후에는 develop와 master 브랜치에 병합한다. 
- master 브랜치에 병합 후 태그를 부여한다. 

#### hotfix 브랜치
- master 브랜치로부터 생성하는 브랜치이다. master 브랜치에 심각한 오류가 있는 경우에만 생성한다. 
- 명명규칙: hotfix/<issue_number>
- 완료 후 master, release, develop 브랜치에 병합한다. 

#### feature 브랜치
- develop 브랜치로부터 생성하는 브랜치이다. 
- 명명규칙: feature/<issue_number>/<짧은설명> 
- 완료 후 develop 브랜치에 병합한다. 

#### issue 브랜치
- develop, feature, release 브랜치로부터 생성하는 브랜치이다. 
- 명명규칙: issue/<issue_number>
- 완료 후에는 생성된 부모 브랜치로 병합한다. 

[출처](http://rumblefish.tistory.com/65)





****
### Notion 문서도구
2019년부터는 나의 모든 일정과 계획을 Notion 도구 활용해보자 계획관리에 굉장히 유용 할 것 같다.
