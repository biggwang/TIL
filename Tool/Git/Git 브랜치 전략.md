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
