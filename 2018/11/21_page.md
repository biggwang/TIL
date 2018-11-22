## 오늘의 생각

### 갑작스런 상황? 문제? 임기응변 어떻게??

- 우선 당황하지 않는것이 중요, 당황하면 머리가 안돌아감
- 임기응변도 어쨌든 배경지식, 경험 등이 쌓여야 생기는 것
- 운동선수가 이미지 트레이닝 하는 것처럼 평소에 발생 할 수 있는 상황(케이스)을 생각하여 미리 어떻게 할지 구상해 보는 습관 들여보자

****

## Git flow - 브랜치 전략

### master: 언제든지 반영해도 되는 브랜치

### develop: 다음 버전을 개발하는 브랜치

### feature: 기능 개발 브랜치

### release: 병합된 develop 브랜치에서 생성된 브랜치로 QA를 거쳐 다시 develop 브랜치와 master branch로 병합된다.

### hotfix: 버그 수정 브랜치

### 참고
[우형, 우린 Git-flow를 사용하고 있어요](https://goo.gl/ad4frD)


## Git 경험 정리

### A 브랜치에 특정 파일을 B 브랜치 같은 파일과 merge 방법
> $ git add . (먼저 stage 올려 놔야 병합하든 비교하든 할 수 있음)
> $ git checkout -p stress src/main/java/com/coopnc/migrator/job/BatchJob.java  (stress 브랜치 특정파일과 현재 브랜치 파일 merge)

### 서로 다른 브랜치에 특정 파일 비교 방법
커밋기준(index) 기준으로 비교하는듯..
