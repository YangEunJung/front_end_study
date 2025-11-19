# 프론트 엔드 스터디 5주차
## 1. 서버와 API
서버는 클라이언트(일반적으로 인터넷을 사용하는 각 컴퓨터)와 상호작용을 한다. 클라이언트가 데이터를 '요청(request)'하면 서버는 그에 맞는 데이터를 '응답(response)'한다. API(Application Programming Interface)는 클라이언트와 서버 간의 데이터를 주고 받는 통로 역할을 한다. 

## 2. fetch 함수
서버 데이터를 받아오는 JavaScript 표준 API 함수. fetch 함수는 비동기로 처리한다. 
따라서 then 처리도 필요.
`fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
 .then((response) => response.json())
 .then((json) => console.log(json))` 와 같이 사용한다. 

## 3. useEffect
서버로부터 받은 todo 데이터를 useState를 통해 화면에 꽂는다고 하자. 이렇게 되면 API 데이터를 가져오면 이를 state에 넣고, state가 바뀌면 업데이트하고, 업데이트가 되면 컴포넌트 코드를 다시 시작하고, 그럼 다시 API 코드를 가져오고... 이러한 무한 루프에 빠지게 된다. \\
외부의 영향을 받아 컴포넌트 랜더링 이후에 딱 1번만 동기화하고 싶은 경우, react가 외부의 영향을 알 수 있도록 useEffect를 사용한다.\\
`import {useEffect} rom 'react';`문장이 필요하며 `useEffect(()=>{원하는 함수 내용}, []);`와 같이 사용한다. 이때 안의 함수 내용은 '외부 효과'이다. 즉, 외부 효과를 랜더링과 분리시켜 딱 1번만 동기화시키는 것이다.

## 4. 리팩토링
결과의 변경 없이 코드의 구조를 재조정하는 작업. App.js 파일을 컴포넌트화하여 단순화하는 등 주로 구조를 단순화하는 작업을 말한다. 
