#프론트 엔드 스터디 1주차
##1. html 파일
팀 버너스리가 인터넷에서 정보의 교환과 저장의 용이성을 위해 양식을 통일하였고, 해당 양식을 HTML이라고 한다. 

HTML은 HyperText MarkupLanguage의 준말이다.
HyperText는 문서를 넘어 다른 페이지로 넘어갈 수 있는 텍스트를 의미한다. 

Markup은 양식을 통일 즉, 문서를 구조적으로 만든 것을 의미한다.
문서는 단순 텍스트 뿐만 아니라 위치나 크기 등 부가적인 의도로 정보를 전달하기 때문에 마크업이 필요하다. 

##2. Tag
html 파일의 주요 특징은 tag를 사용하는 것이다.
<tagname>content<tagname/> 이 주요 형태로
현재 배운 주요 tag는 h1(head), p(paragraph), a(anchor) 등이 있다.
e.g. <h1>양은정<h1/>

이번 과제에서 추가로 img tag에 대하여 학습하였다.
<img src="주소이름/이미지.jpg" alt="이미지가 보이지 않을 때 들어갈 내용"/> 이런 방식으로 적으면 된다. 부가적으로 width나 height를 통해 크기를 지정할 수 있다.

##3. a tag
해당 태그는 텍스트를 클릭하면 다른 페이지로 넘어가게끔 돕는 기능을 제공한다.
<a href="주소이름/파일이름">텍스트</a> 의 형태이다.
e.g. <a href="./father.html">아빠</a>

##4. index.html
페이지의 시작점은 index.html로 저장한다.
네이버도 사실 naver.com/index.html 즉, index.html을 생략한 구조이다.