# 프론트 엔드 스터디 4주차
## 1. React의 등장
페이지에 HTML부터 JS를 전부 주고 받으면(특히, DOM 조작이 빈번하면) 한 상호작용이 일어날 때마다 데이터 운송이 발생하고 서버 비용 및 전환되는 시간이 길어진다. 이러한 문제를 해결하기 위해 '전환되는 HTML' 부품을 따로 관리하고, 기능별로 HTML 파일을 구분하여 작업할 수 있다. 또한 잦은 DOM 조작 대신 보다 가벼운 가상의 DOM을 만들어 조작하고 이 결과들을 모아 실제 DOM에 반영하는 방식을 취한다.


## 2. React Hook
자바스크립트의 HTML 태그를 넣어서 작업한다면 생산성이 증가할 것이다. 다만 React는 컴포넌트의 상태(state)가 바뀌었는지 알 수 없으므로, React가 컴포넌트의 상태를 알 수 있도록 Hook을 설치한다. 

먼저, `import { useState } from 'react';` 를 선언한다.
이후 변화하는 컴포넌트 함수에 적절한 상태값과 가상의 값을 넣는다. Counter 함수에서는 `const [count, setCount] = useState(0);` 코드를 삽입했다. 이때 count는 변수, setCount는 상태값을 변화시키는 함수, useState의 0은 초기값이다. 

## 3. Props
속성(property)를 이르는 말. 상위 컴포넌트의 state가 바뀌면 하위 컴포넌트도 새롭게 랜더링된다. 

Counter.js(상위 컴포넌트)에서 CountNumber 태그의 count prop에 state의 count값을 넣고, CountNumber.js(하위 컴포넌트)는 prop 중 count 값을 반환한다고 하면 Counter에서 조작이 되어 count값이 변경되면 CountNumber도 새롭게 랜더링된다.

## 4. 컴포넌트의 생애
크게 탄생(Mount), 변화(Update), 죽음(UnMount) 3단계로 구분된다. 컴포넌트가 화면에 추가될 때 탄생, 상호작용으로 인해 새로운 props나 state를 수신하면 업데이트, 컴포넌트가 화면에서 제거될 때 죽음을 의미한다. 
