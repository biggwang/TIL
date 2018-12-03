# 조사 필요
## Quartz getScheduler() null 
![getScheduler() null 경우](https://user-images.githubusercontent.com/13635334/49379376-562d7a00-f752-11e8-961d-181277d2ff1e.jpg)


### 상황
- Spring 버전을 4로 업그레이드 하였더니 기존에 되는 schedulerFactoryBean.getSchedler() 함수가 null이 반환 되었고 왼쪽 처럼 @Autowired scheduler가 null이되어 quartz 함수를 사용 할 수 없는 상황

- AdminEventListener에서 @Autowired를 schedulerFactoryBean 하고 해당 메소드에서 getSchedler() 하였더니 잘된다.

- Spring @bean이 어떻게 관리고 되고 있는지 조사가 필요