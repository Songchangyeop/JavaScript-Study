## CORS?

Cross-Origin Resource Sharing 교차 출처 리소스 공유

여기서 말하는 교차 출처란 통신하는 URL의

- 호스트가 다른경우 → `navar`.com
- 프로토콜이 다른경우 → `https`://
- 포트 번호가 다른 경우 → localhost:`3000`

<br />

**해결법**

1. ACAO (**`Access-Control-allow-origin`)**

서버에서 `Access-Control-Allow-Origin` 헤더에 접근을 허용하는 출처를 등록해서 응답해주어야한다

1. 프론트엔드와 백엔드 사이에 프록시 서버를 두어 우회하여 리소스에 접근하는 방법도 존재
2. CRA로 개발된 환경이라면 package.json에 proxy설정을 해줄 수도 있음

<br />
<br />

## 브라우저 렌더링 원리

1. 주소를 입력하여 웹페이지에 접근
2. HTML 문서를 읽는다
3. HTML문서를 `파싱`하여 `DOM Tree`를 만든다
4. CSS를 파싱하여 `CSSOM Tree`를 만든다
5. CSSOM Tree와 DOM Tree를 결합하여 `렌더트리`를 만든다 → display: none, head 태그등은 포함되지 않는다
6. **`레이아웃 단계`**에서는 뷰포트 내에서 각 요소들에게 위치와 크기를 결정
7. 실제 화면에 요소들을 배치하여 그리는 `페인팅 단계`

<br />

`파싱` (parsing or parse)

→ 브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것

<br />

`Reflow` → 레이아웃 단계가 다시 일어나는 것 → 요소의 레이아웃이 변경이 되면 발생함 **성능상 이슈가 많다 → Virtual Dom이 이를 해결하기위해 만들어짐**

`RePaint` → 페인트 단계가 다시 일어나는 것

<br />

## 쿠키와 웹스토리지

**쿠키**

4kb의 작은 용량의 저장소

`문자열만 저장` 가능

**`만료 쿠키`**와 `세션 쿠키`로 분류

만료 쿠키는 만료 시간을 설정하여 시간이 만료되면 해당 데이터 삭제

세션 쿠키는 브라우저 종료시 삭제

<br />

### 웹스토리지

`key: value` 형식으로 저장

5mb의 큰 용량

<br />

**세션 스토리지**

key: value 형식

브라우저, 탭 종료시 데이터 삭제

비회원 장바구니 등?

<br />

**로컬 스토리지**

데이터의 영구 저장 직접 삭제해야한다

자동 로그인, 작성 글 임시저장 등이 있지 않나 생각

<br />

### 콜백, 프로미스, async await등 비동기 처리

비동기 처리를 위해 콜백을 사용

→ 콜백지옥 발생

콜백 지옥 해결위해 프로미스로 비동기 처리를 한다

`resolve`, `reject`로 성공, 실패 시의 프로미스를 수행

`then`으로 프로미스 체이닝을 하여 비동기 처리도 가능하다

→ then 프로미스 체이닝이 길어지면 가독성, 에러의 탐색이 어려워 지기 때문에 `async`, `await` 발생

함수앞에 async를 붙이면 await으로 비동기 처리가 가능해진다

<br />

### 비동기 함수를 병렬적으로 즉, 한번에 실행하는 방법

Promise.all, Promise.allSettled

Promise.all은 실행하는 비동기 함수의 배열에 하나라도 실패하면 catch문으로 빠지게 되는데 allSettled는 response값에 status와 value 형식으로 진행됨

<br />

## 빌드시스템 이해

<br />

### 바벨

바벨(babel)은 `트랜스파일러(transpiler)`로, 모던 자바스크립트 코드를 '구 표준'(es5)을 준수하는 코드로 변환해준다

es6 이후의 문법을 es5이전의 문법으로 바꾸어 모든 브라우저에 호환될 수 있도록 한다

<br />

### 폴리필

ES6 이후의 함수 (Map, Promise, Object.assign) 등과 같은 함수를 ES5 이전의 문법에서 사용할 수 있도록 해준다. → `문법 자체를 트랜스파일링` 하는 바벨과는 비슷하지만 다른 개념

<br />

### Node.js

자바스크립트의 `런타임 환경` → 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미

<br />

### NPM

NPM(Node Package Manager)는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저

전 세계 자바스크립트 개발자들이 모두 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 편하게 다운로드 받을 수 있다.

<br />

### Yarn

Yarn은 Javascript 패키지 매니저

<br />

### `NPM` VS `Yarn`

<br />

### **속도 → Yarn이 더 빠르다**

npm과 yarn의 주요 차이점 중 하나는 패키지 설치 프로세스를 처리하는 방법입니다. npm은 패키지를 한 번에 하나씩 순차적으로 설치합니다. 그에 비해 yarn은 여러 패키지를 동시에 가져오고 설치하도록 최적화되어 있어 패키지 설치 속도 측면에서 yarn이 npm보다 빠릅니다.

<br />

### **보안 → Yarn이 더 안전하다**

yarn은 보안 측면에서 npm보다 더 안전한 것으로 알려져 있습니다. npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행합니다. 이로 인해 보안 시스템에 몇 가지 취약성이 발생하며 나중에 심각한 문제가 발생할 수 있습니다. 반면에 yarn은 yarn.lock 또는 package.json파일에 있는 파일만을 설치합니다. 보안은 yarn의 핵심 기능 중 하나이지만 최근 npm의 업데이트에서 npm의 보안 업데이트도 크게 향상되었습니다.

둘 다 지속적으로 관리되고 있으며 폭넓은 사용자 커뮤니티를 가지고 있고, 업데이트를 통해 추가된 기능 덕분에 `거의 차이 나지 않게 되었습니다`. 결론적으로 둘 중에 무엇을 선택해야 할지는 개인의 **취향**, 성능(패키지 설치 속도), 커뮤니티에 따라 달라질 수 있을 것

<br />

### ESLint

ESLint는 코드를 분석해 문법적인 오류나 안티 패턴을 찾아주고 일관된 코드 스타일로 작성하도록 도와준다

<br />

### Prettier

Prettier는 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 코드 포멧터(Code Formatter) 다

<br />

### 웹팩

빌드 시 여러개의 파일들을 하나의 번들로 묶어주는 `모듈 번들러`

<br />

### 프론트엔드 성능최적화

1. `Reflow`/`Repaint` 최적화

→ 윈도우 크기 리사이징, Reflow 일으키는 스타일 방지, DOM의 동적변화 등

➕ 이미지의 width, height등 크기를 지정하지 않으면 `reflow` 발생

2. 이미지 최적화

이미지의 lazyLoading

용량이 적은 포맷 사용 `webp`, `avif`

→ avif를 지원하지 않는 브라우저의 경우 ? 기본 포맷을 avif로 하고 지원하지 않는 브라우저라면 webp로 fallback

<br />

```tsx
// picture 태그를 활용
<picture>
	<source srcset="supercar.avif" type="image/avif" />
	<source srcset="supercar.webp" type="image/webp" />
	<img src="supercar.jpeg" alt="Fast red car" />
</picture>
```

<br />

3. 코드스플리팅

초기 렌더링시에 필요없는 코드는 잘라놓고 초기 렌더링에 필요한 코드들만 모아서 빌드하는것

LazyLoading은 동적으로 렌더링된다.

LazyLoading - `Dynamic Import, React.lazy`

<br />

## 검색엔진 최적화 (SEO)

1. `title` 태그와 올바른 `meta`태그 사용
2. 의미가 있는 태그로 마크업 (시맨틱 마크업)
3. 웹페이지의 성능도 중요

<br />

## 프론트엔드 기본 지식

- 프론트엔드 `성능최적화`에 대한 이해
- `Rest` vs `GraphQL`에 대한 이해 → [https://hwasurr.io/api/rest-graphql-differences/](https://hwasurr.io/api/rest-graphql-differences/)
- `CI/CD`에 대한 이해 (웹서비스 배포에 대한 이해) → [https://velog.io/@ash3767/CICD](https://velog.io/@ash3767/CICD)
  - AWS S3, CloudFront에 대한 이해 + Vercel배포 이해
- 검색엔진 최적화 SEO에 대한 이해 → [https://velog.io/@hsecode/최적화-검색엔진-최적화SEO-이유와-방법-10가지](https://velog.io/@hsecode/%EC%B5%9C%EC%A0%81%ED%99%94-%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94SEO-%EC%9D%B4%EC%9C%A0%EC%99%80-%EB%B0%A9%EB%B2%95-10%EA%B0%80%EC%A7%80)
- `SSR과 CSR`의 차이 → [https://velog.io/@vagabondms/기술-스터디-SSR과-CSR의-차이](https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4)
  - Next.js는 SSR, CSR을 혼합하여 사용
    ## Next.js의 작동방식
    1. 사용자가 초기에 server에 페이지 접속을 요청한 경우 SSR방식으로 렌더링 된 정적페이지를 클라이언트에 보낸다.

       > next.js의 경우 자동으로 code splitting을 해주는 기능을 제공한다. 이는 해당 페이지에서 필요한 부분만 페이지가 렌더링될때 로드하며, 이로 인해 수백개의 페이지가 있는 경우에도 페이지가 빠르게 보여진다.

    2. 클라이언트에서 js를 다운로드 받고 React를 실행한다.

       > React를 로딩하는 동안 사용자는 pre-rendering된 페이지를 보게되고, React가 로딩이 되면 pre-rendering된 페이지와 연결되어 일반적인 React app 처럼 작동하게 된다. 이를 hydration 이라고 한다.

    3. 사용자가 페이지와 상호작용을 하며 다른 페이지로 이동할 경우 CSR방식으로 server가 아닌 클라이언트에서 처리한다.
    따라서 next.js를 이용하면 **초기로딩 시간도 짧고, SEO도 유리하고, 페이지 간 전환 속도도 빠르다.**
