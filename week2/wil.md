# 프론트 엔드 스터디 2주차
## 1. button 태그
버튼 모양을 만들 수 있는 태그. 다른 태그 사용법과 동일하게 `<button>버튼 내용</button>` 으로 만들어준다. 

## 2. 속성 id 
태그의 고유한 이름을 부여하는 기능이다. HTML 파일에서 태그에 고유한 id가 있다면 JAvaScript로 명령할 때 명칭하기 편리하다. 
`<p id="id이름">0</p>` 혹은 `<button id="increase">+1</button>` 이런 방식으로 속성을 적는 칸에 적으면 된다.

## 3. Java Script 코드
HTML 파일은 문서라는 특징에 충실하게, 작동(script)은 JavaScript 파일에서 관리하도록 분리하는 것이 편리하다. 이를 '마이그레이션했다' 라고 표현하기도 한다.
이를 위해선 `<script src="연결하고 싶은 JS 파일 이름"></sctipt>` 로 적는다. 이때 이 코드의 위치는 body 태그 마지막 부분에 적는다. 브라우저는 HTML파일을 한줄씩 읽다가 script 발견시 js파일을 읽기 때문에  js 파일을 읽는 문장을 중간에 삽입하면 코드가 꼬이거나 실행이 늦어질 수 있기 때문이다. 

## 4. JS 코드에서 숫자를 코드로 바꾸는 법
예시 코드로 `const number = document.getElementById("counting-num");`
`number.textContent = 100;`가 있다. 
1) document는 연결된 html 파일을 의미한다.
2) document에서 요소의 아이디가 "counting-num"인 무언가를 number라는 변수로 정의하겠다는 의미. 
3) number 변수에 100을 대입한다.

## 5. 숫자가 바뀌는 행위를 버튼으로 핸들링하기
1) 위와 같은 방법으로 버튼을 가리키는 변수를 만든다. 예를 들어 아이디가 "increase"인 것을 incButton이라는 변수로 정의한다. 
`const incButton = document.getElementById("incerase");`
2) 작동하는 함수를 만든다. 예를 들어 increaseCount()는 count를 증가시킨다. 
3) addEventListener: 변수에 무언가 중요한 사건이 발생하면 잘 듣다가 실행하라는 의미. 예시 코드로 
`incButton.addEventListener("click", increaseCount);`
이는 incButton 변수에 click이라는 이벤트가 발생하면 increaseCount함수를 실행하라는 의미이다. 
