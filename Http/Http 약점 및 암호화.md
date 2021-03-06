### 평문이므로 도청 될 수 있다.

- TCP/IP는 도청 가능한 네트워크 
- 패킷 캡처나 스니퍼라는 툴을 이용해 패킷을 까봐서 http 정보를 볼 수 있음
- 중간자 공격을 하면 클라이언트 수신한 내용이 다를 수 있다.
- 대안으로 PGP 서명, MD5, https를 이용하는 방법이 있다.

### 통신 상대를 확인하지 않는다.

- 누구나 리퀘스트 날릴수 있다.
- 서버 입장에서는 어떤 클라이언트든 상관없이 받는다 (단, 서버가 IP주소나 포트 체크를 하지 않을 경우)
- 그래서 SSL을 사용함
- 그러면 제 3자 인증기관에서 서버나 클라이언트가 사전 약속된 또는 안전 하다는 것을 보증해기 때문이다.

### 암호화로 도청을 방지

- 통신 암호화, https를 이용하여 암호화 한다.
- 콘텐츠 암호화, http 콘텐츠를 암호화 한다.


### 암호화 방식 - 공통키 

- 클라이언트가 서버에게 키를 반드시 넘겨줘야 서버가 인증함
- 그러면 키를 네트워크를 타고 이동하는데 
- 악의적으로 누가 키를 획득하는 순간 보안은 깨짐

### 암호화 방식 - 공개키

- 공통키에 단점을 보안함
- 클라이언트 서버 모두 키를 가지고 있는 형태 (공개키, 비밀키)
- 암호를 보내는 쪽은 공개키를 이용해 암호화 하여 보내고
- 받는 쪽은 비밀키를 이용해 복화한다.
- 비밀키는 공유 되지 않게된다.

### SSL - 공통키 + 공개키

- 하지만 공개키도 허점이 있는데 공개키가 정말 진짜인지 모른다는것
- 클라이언트 입자에서 수신한 공객키가 정말 서버에서 넘어온 것인지 어떻게 알까?
- 이를 위해, 인증 기간(CA)에서 발핸한 공개키 증명서를 
