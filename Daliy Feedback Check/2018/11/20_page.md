## 웹월드 컨퍼런스 2018을 다녀와서

### Front-end 관련

#### Javascript Framework and Library
- 오랫동안 지배했던 기술 jQuery는 DOM 커터칼 처럼 직접 자르고 DOM 렌더링하는 성능이슈가 있음
- 위와 다르게 Angular.js React.js View.js 등장으로 개발방식을 컴포넌트화 하여 개발함
- React.js DOM을 직접 건드리지 않고 Virtual DOM 을 통해 기존 DOM과 비교하여 바뀐부분만 적용하는 개념으로 성능향상 도모
- EcmaScript는 Annual release로 인해 해마다 릴리즈 됨

#### 브라우저 밖 영역 node.js
- 번들러/빌드도구 webpack이 있지만 이또한 사용에 어려움이 있음..configpack 이라 불릴정도로
- 무설정 번들링 PARCEL 등장

#### 빠르게 변하고 있는 Front-end 영역에서 그럼 어떻게 공부해야 하나?
- 어차피 기술을 하루가 멀다하고 홍수 처럼 쏟아지고 그걸 다알필요도 다 공부 할 필요도 없음 그러니 스트레스 받을 필요 없음
- 대신 눈과 귀는 열어두고 동향을 살피는 관심은 중요함
  + github trend
  + 컨퍼런스(최소 제목만이라도 도움됨)
  + Stack Overflow Annual Developer Survey
  + Medium's javascript posts

## 브라우저 동작 원리(Chromium)
- 렌더링엔진(HTML, CSS) + JS엔진 + Skia(그래픽) 엔진
- 거의 모든 브라우저는 Chromium을 기반으로 만듬(소스만 13GB, IMAC 5K 기준 빌드 3시간)
- Multi-process Achitecture
  + 하나의 프로세스가 죽어도 다른 프로세스 영향을 받지 않는다.
  + Site Isoloation - 프로세스간 데이터를 공유하지 않기 때문에 오직 하나의 사이트만 동작(피싱사이트 방지)
- Blink Rendering
> Parsing > Style > Layout > Layerization > Paint

- DOM - HTML을 브라우저가 **DOM Parsing** 을 거쳐 트리구조에 DOM 모델로 데이터를 가지고 있음
- DOM Parsing이 일어나는 동안
  + <link ~ 태그
  + <Style ~ 태그
  + inline css  

  를 만나면 DOM 생성을 중단하고 먼저 **CSS Parsing** 을 진행한다.

- DOM Parsing과 CSS Parsing이 모두 끝나면 다시 DOM을 Style값을 업데이트 한다.
- 그리고 나머지 Layout > Layerization 하고 최종적으로 Paint(Skia 엔진) 하여 브라우저에 컨텐츠를 표시하게 된다.
- 이모든 것은 Main Thread에서 이루어지며 곧 성능 문제로 Frame-drop이 발생하는 문제 발생
  + Main Thread는 명령만 내리고 다른 Thread로 위임(할일)하자 - Recording 단계 (Main Thread)
  + 위임받은 각 스레드에서 작업을 수행한다. - Playback 단계 (Raster Threads)
  + 각 수행한 스레드 결과를 하나로 합친다. - Compositing 단계 (Compositor Thread)

#### GPU 가속
- Painting 을 담당하는 skia 엔진 대신 OpenGL을 이용하여 GPU 가속을 수행함
- GPU 가속, Compositing을 이용하면 일반 skia로 그리는것보 훨씬 렌더링이 빠름


### Machine Learning (TensorFlow.js) 관련
- 하드웨어를 학습? No!! 데이터를 사용하여 수학적 알고리즘으로 반복하고 데이터를 업데이트(학습과정)하여 얻고자 하는 결과(근사치)를 이끌고자 하는 개념
- 수학과 달리 딱 떨어지는 답이 아닌 +/- buffer를 두고 **추론** 을 하여 결론 및 판단을 이끌어내는데 필요한 개념
  + AI 암 판단
  + 자율주행
- AI, Data Scientist 는 미래 유망 직업
- TesorFlow.js
  + 구글에서 2018.04 발표한 오픈소스
  + 자바스크립트로 만들어져 있기 때문에 Front, Back 모두 사용가능
  + Front-end에서의 TensorFlow.js는 서버단에서 Machine Learning결과를 취합하여 실제 사용자에게 결과를 뿌려주는 역활


### Block Chain 관련
- 가상화폐로 인해 급속하게 인기있다 현재 거품이 빠져있는 단계
- 하지만 Block Chain에 탈중앙화를 통한 신뢰/인증 메커니즘은 다른 서비스 모델로 활용가치가 무궁무진하여 Dapp을 통하여 시장이 커지고 있는중
- Dapp (A decentralized application): Block Chain 생태계 기반으로 동작하는 애플리케이션
- Block Chain에 기술적 문제
  + 낮은 속도: 신뢰가 중요한 만큼 데이터 정합성/무결성을 위해 트랜잭션 Serial 방식
  + 이더리움에서 만든 게임 CryptoKitties 있었으나 사용자 증가 많은 성능저하를 일으킨 사례가 있음
- 도약하려면?
  + 기술적 문제 해결 필요: 낮은 속도, Serial Transaction
  + Killer Dapp


## 그래서 앞으로 나는??
- AI, Machine Learning 개념은 괴장히 매력적으로 느껴졌다. 서비스에 적용 해보고 공부해보자
- 관련 서비스 하는 회사 알아보는것도 공부가 될 것 같다.
- 더 많은 컨퍼런스와 소식에 대해서 귀기울이고 참여하자
