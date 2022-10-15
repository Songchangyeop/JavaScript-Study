## useMemo

memoization된 값을 반환한다. useMemo는 값을 memoization하고 dependency 배열에 지정된 값이 변하지 않는다면 다시 실행되지 않고 값이 변하게 되면 실행됩니다. useMemo는 값비싼 연산을 하는 값을 저장하기에 유용합니다

<br />
     
## useCallback

useMemo와 비슷하지만 useCallback은 memoization된 함수를 반환합니다. 리액트 공식문서에 따르면 하위 컴포넌트가 react.memo와 같은 걸로 최적화 되어있고 상위 컴포넌트에서 props로 함수를 내려 보낼 때 useCallback으로 래핑하여 내려줄 때 유용하다고 기재되어 있습니다. 적절한 상황에 사용을 해야하며, 무분별한 사용은 useCallback의 이전의 함수와 비교하는 연산이 최적화하는 것보다 더 많은 비용을 초래하기 때문에 별로 좋지 않습니다.

<br />

## React 특징 정리

<aside>
💡 spa는 기존 웹페이지는 페이지 내에 어떤 상호작용이 일어나면 페이지가 새로고침 되는 문제가 있었는데 spa를 사용함에 따라 한 페이지 내에서 모든 처리를 할 수 있도록 해줍니다.

</aside>

<br />

컴포넌트로 이루어진 UI 라이브러리

<br />

**VirtualDom**

컴포넌트가 렌더링 되면 이전 DomTree와 비교해서 실제로 변경된 부분만 DomTree에 반영한다

렌더링이 많이 되어도 성능을 크게 걱정하지 않아도 되는 이유

<br />

## React에 대한 이해

<br />

<aside>
💡 얕은 복사는 복사하고자 하는 값의 레퍼런스 주소를 복사하는 것이고 깊은 복사는 복사하고자 하는 값의 실제 값을 복사하는 것입니다.

</aside>

<br />

- useCallback, useMemo를 통한 `최적화 기법` → [useMemo, useCallback 정확하게 사용하고 있을까](https://yceffort.kr/2022/04/best-practice-useCallback-useMemo)
- React18 `Suspense`등 이해하기 → [https://blog-songchangyeop.vercel.app/blog/React-Suspense](https://blog-songchangyeop.vercel.app/blog/React-Suspense)

<aside>
💡 React18의 Suspense는 SSR의 문제점을 해결하기 위해 유용합니다 SSR은 서버에서 이미 그려진 html을 클라이언트로 내려주고 js파일을 다운받은 다음에 클라이언트에 내려준 이후 hydration을 거치게 되는데 이 때 문제점은 하이드레이션 과정에서 웹페이지의 한 요소가 큰 사이즈라서 오래걸리는 경우 모든 웹페이지가 동작되기 까지 시간이 걸릴 수 있는데 Suspense를 사용하여 오래걸리는 부분은 Suspense로 래핑하고 다른 로딩 엘리먼트 등으로 대체할 수 있습니다. 다른 요소들과 독립적으로 로드된다고 보면 될 것 같습니다. 그리고 오래걸리던 부분의 로드가 완료되면 로딩 엘리먼트의 html과 실제 html을 변환하여 보여줍니다

</aside>

<br />

### 불변성을 지켜야하는 이유

불변성은 값이나 상태를 변경하지 않는것을 의미합니다

<br />

**지켜야하는 이유 1**

리액트에서 상태 값을 업데이트 할 때는 얕은비교를 수행합니다. 그렇기 때문에 객체의 값을 통해 비교를 하는 것이 아닌 참조값을 통해 변경을 감지합니다

만약 배열을 가지는 State가 있다고 가정했을 때, 해당 배열에 array.push(10) 등으로 배열에 직접 값을 추가하여 변경하게 되면 참조값이 바뀌는게 아닌 실제 값이 변경이 된 것이기 때문에 얕은 비교를 하는 리액트는 리렌더링을 할 수 없다 그러므로 Spread Operator나 map, filter등을 이용하여 새로운 배열을 만들어 업데이트 해주어야한다 .

**지켜야하는 이유 2**

사이드 이펙트를 방지

- `Virtual Dom`에 대한 이해 (동작 원리 등) → [https://velog.io/@mollog/React에서의-가상돔-개념](https://velog.io/@mollog/React%EC%97%90%EC%84%9C%EC%9D%98-%EA%B0%80%EC%83%81%EB%8F%94-%EA%B0%9C%EB%85%90)
- `useRef`의 올바른 사용법
  - DOM요소에 접근할 때 사용
  - 컴포넌트가 리렌더링 되어도 변하지 않는 변수를 관리할 때 사용 (useState와 상황에따라 달리 사용 )
- React에서 state의 `불변성` → [https://hsp0418.tistory.com/171](https://hsp0418.tistory.com/171)
  - `깊은 복사`와 `얕은 복사`의 이해 → [https://velog.io/@th0566/Javascript-얕은-복사-깊은-복사](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

<br />

### 리덕스

`Store`는 전역 상태의 저장소

1. 디스패치가 액션을 발생
2. 액션이 발생하면 리듀서가 state와 액션 상태를 객체를 받음
3. 어떤 액션이 실행되었는지 확인하고 그에 따른 처리
4. 상태 변경

리덕스 단점 → boiler plate가 너무 많은 비용을 초래함

Redux toolkit 사용하면 slice만으로 액션 리듀서를 한번에 사용가능

recoil → atom으로 분류하고 각 상태의 key로 ~~~
