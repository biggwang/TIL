## Java8 parallStream 사용으로 속도 개선 
- 5000 insert 8초 걸렸으나 parallStream을 사용하여 forkJoinPool(50) 하여 3~4초 걸렸다.
하지만 시스템에 어떤 영향을 미치는지 현재는 전혀 알지 못하기 때문에 검증이 필요하다.

- 정확히 ForkJoinPool이 무엇이며 테스트를 통해 검증 작업이 필요하다.
