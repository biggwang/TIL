## TCP/IP

### 배송을 담당하는 IP (전송계층)
- 패킷을 상대방에게 전달 하는 프로토콜
- 패킷을 전달 할 때 사용되는 것은 IP와 MAC 주소가 필요하다
- IP 주소는 각 노드에 부여된 주소를 가리키고
- MAC 주소는 컴퓨터의 랜카드 주소를 말한다.
- IP 주소는 MAC 주소를 의존하는데 상대방 서버로 바로 가는 것이 아니라 라우터끼리 거쳐가는데 그때 사용되는 프로토콜이 ARP이며
각 이동은 MAC주소를 보고 라우팅 하게 된다.

### 신뢰성을 담당하는 TCP (전송계층)
- 보내기만 하는 UDP와 달리 TCP는 서버와 3way 핸드쉐이킹 하여 데이터를 확실하게 보낼수 있는지 확인한다.
- 끊기면 재전송 한다.


## StringBuilder vs StringBuffer

### 공통점
문자열 + 연산 할 때 객체를 매번생성하지 않고 길이를 가변하여 문자연산에 오버헤드가 적다

### 차이점
- StringBuffer syncronized하여 멀티 스레드 환경에서 안전 하지만 StringBuiler는 안전하지 않다.
- StringBuffer가 Thread-Safe 하는 대신에 속도가 StringBuilder보다 느리다.

## HashMap vs HashTable

### 공통점
map 자료구조로 key, value를 가지고 있다.

### 차이점
- HashTable은 null을 허용하지 않는다.
- HashTable은 멀티 스레드 환경에서 안전하지만 HashMap은 안전하지 않으며 그래서 ConcurrentHashMap으로 대체 되기도 한다.
- HashTable이 Thread-Safe 하는 대신에 속도가 HashMap보다 느리다.


## 조각지식

### 세션트래킹
Http 프로토콜 특성상 상태값을 유지하지 못하여 생겨난 방안 즉, 쿠키나 세션등을 말한다.

### XSS (Cross Site Scripting)
브라우저에서 입력 받을수 있는 항목에서 강제로 Javascript를 실행시키게 하여 사이트를 공격하는 방식
