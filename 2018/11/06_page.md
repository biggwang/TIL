### CPU 구조  


#### Execution Unit (EU)
- Arithmetic Logic Unit (ALU)
  + 산술논리연산 장치
- Control Unit (CU)
  + 명령을 순서데로 제어하는 장치
- Register
  + CPU 고속 기억 장치

#### Addressing Unit (AU)
- CPU가 메모리, 입출력 장치로부터 데이터를 fetch 할 때 입출력 어드레스를 만들어 주는 곳

#### Bus Interface Unit (BIU)
외부데이터(메모리, 입출력장치 로부터 읽은 데이터) 이동하는 통로이며 BIU에서 CPU가 데이터를 fetch한다.



### CPU 동작 순서
BIU -> Fetch -> 명령해석 -> Register -> 데이터 획득 -> 명령실행 -> BIU
