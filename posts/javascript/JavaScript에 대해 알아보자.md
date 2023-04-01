---
id: "2"
title: "JavaScript에 대해 알아보자"
date: "2023.03.01"
description: "Javascript의 정의, java와 javascript의 관계, javascript와 HTML,CSS의 관계와 사용법,웹 브라우저에서 javascript의 역할, javascript 생태계에 대해서 알아보겠습니다."
preview: "자바스크립트가 무엇인지, 어떤 역할을 하는지 알아보겠습니다."
thumbnail: "/images/javascript_logo.png"
reference:
  [
    {
      title: MDN WEB docs - JavaScript 첫걸음,
      url: https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript,
    },
  ]
---

<img src="/images/posts/javascript_logo.png" width="100%">
<br/>
<h3>
1. JavaScript가 무엇인가요?</h3>
<span>
자바스크립트(JavaScript)는 웹사이트에서 사용자와의 상호작용성(버튼 클릭, 자료 입력)과 동적인 스타일링, 애니메이션과 같은 복잡한 기능을 구현할 수 있도록 하는 <em>동적 클라이언트 사이드 스크립트 언어(Dynamic Client-Side Script Language)</em>입니다.
즉 자바스크립트는 살아있는 페이지를 만들기 위해 개발되었습니다.<br/>
<br/>
<blockquote>Javascript was initially created to "make web pages alive"</blockquote>
</span>
<br/>
<span>
자바스크립트는 클라이언트(웹 브라우저)에서 실행되고, 웹 페이지에서 이벤트가 발생할 때 어떻게 작동하는지 디자인 or 프로그래밍할 수 있습니다. 자바스크립트는 강력한 스크립트 언어로 웹 페이지 동작을 제어하는데 널리 사용하고 있습니다.
</span>
<br/>
<br/>
<h4>• 자바와 자바스크립트</h4>
<br/>
<span
style="color: #000000; font-size: 16.5px">
자바(Java)와 자바스크립트(Javascript)는 비슷한 이름때문에 서로 관련이 있다고 생각할 수 있습니다. 자바스크립트가 만들어질 때 초기 이름은 "LiveScript"였습니다. 그 당시에 자바는 인기 있는 언어였는데 자바 인기의 도움을 얻고자 자바스크립트로 이름을 변경 하였다고 합니다.
자바스크립트가 발전하면서 <em>ECMAScript</em>라는 표준화된 명칭도 얻게되어 현재 자바와 전혀 관련이 없습니다. 
</span>
<h3>
2. HTML과 CSS와의 관계
</h3>
<br/>
<span>
표준 웹 브라우저는 HTML, CSS, JavaScript의 3개의 층으로 구성되어 있습니다. 이 중 JavaScript는 세 번째 층을 담당합니다.
</span>
<br/>
<center>
<img src="/images/posts/web_cake.png" width="70%">
</center>
<br/>
<span>
1. <em>HTML</em>은 웹 콘텐츠의 구조를 짜고 의미를 부여하는 마크업 언어입니다. 예를 들어 페이지의 어디가 문단이고, 헤딩이고, 데이터 표와 외부 이미지/비디오인지 정의합니다.<br/>
<br/>
2. <em>CSS</em>는 HTML 콘텐츠에 스타일을 적용할 수 있는 스타일 규칙 언어입니다. 배경색을 추가하고, 글꼴을 바꾸고, 콘텐츠를 다양한 레이아웃으로 배치할 수 있습니다.<br/>
<br/>
3. <em>JavaScript</em>는 동적으로 콘텐츠를 바꾸고, 멀티미디어를 제어하고, 애니메이션을 추가, 사용자와 상호작용하는 등 복잡한 기능을 구현할 수 있는 스크립팅 언어입니다.
<br/>
<br/>
이렇게 세개의 층은 서로 긴밀히 연결되어 웹 브라우저에서 작동됩니다. 연습 삼아 간단한 텍스트 레이블을 만들어 봅시다.<br/> <br/>
</span>

<h4>
1. HTML로 텍스트에 구조와 목적을 부여할 수 있습니다.
</h4>
<br/>

```html
<p>name : zaeyon</p>
```

<br/>
<img src="/images/posts/html1.png" width="30%"/>
<br/>
<h4>
2. CSS를 사용해 디자인할 수 있습니다.
</h4>
<br/>

```css
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 3px solid rgba(225, 0, 0, 0.6);
  background: rgba(255, 255, 0, 0.3);
  color: black;
  box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
  border-radius: 10px;
  padding: 7px 14px;
  display: inline-block;
  cursor: pointer;
}
```

```html
<link rel="stylesheet" href="style.css" />
<p>name : zaeyon</p>
```

<br/>
<img src="/images/posts/html2.png" width="30%"/>
<br/>
<h4>3. 마지막으로 JavaScript로 동적인 기능을 추가할 수 있습니다.</h4>
<br/>

```html
<link rel="stylesheet" href="style.css" />
<p>name : zaeyon</p>

<script>
  const para = document.querySelector("p");

  para.addEventListener("click", updateName);

  function updateName() {
    const name = prompt("Enter a new name");
    para.textContent = `name : ${name}`;
  }
</script>
```

<br/>
<img src="/images/posts/html4.gif" width="100%"/>
<br/>
<br/>
<span>
para 변수를 선언한 후 p태그를 할당시켜주었고 click 이벤트 발생시 updateName함수가 실행되도록 하였습니다.<br/>
updateName함수에는 새로운 창에서 이름을 입력받고 기존 이름을 입력받은 이름으로 변경하도록 코드를 작성하였습니다.
</span>
<h3>
3. JavaScript가 하는일
</h3>
<span>
클라이언트 사이드 자바스크립트 언어는 다른 프로그래밍언어와 같이 기본적으로 변수에 값을 할당하고 문자열(string)을 조작하고 발생한 이벤트에 대해 응답하는 기능들을 수행합니다.<br/><br/>
브라우저가 웹 페이지를 불러오면 어떤 일이 발생하는지 간단하게 알아보겠습니다.<br/>
<br/>
<img src="/images/posts/execution.png" width="100%">
<br/><br/>
웹 페이지를 브라우저로 불러오면, 브라우저는 여러분의 코드(HTML, CSS, JavaScript)를 실행 환경(브라우저 탭)에서 실행합니다. <br/>
자바스크립트는 <em>DOM (Document Object Model) API</em>를 통해 HTML과 CSS를 동적으로 수정하고 사용자 인터페이스를 업데이트 하는 기능을 주로 수행합니다.
</span>

<h3>
4. JavaScript 생태계
</h3>
<img src="/images/posts/javascript_ecosystem.png" width="100%" height="1%" object-fit="contain"/>
<br/>
<span>
오늘날 자바스크립트는 브라우저 뿐만 아니라 서버, 다양한 디바이스에서도 실행될 수 있도록 생태계를 넓혀가고 있습니다.
자바스크립트의 생태계에서 중요한 역할을 하고있는 몇가지 도구들을 간추려봤습니다.
</span>
<br/>
<br/>
<p>
<span style="font-weight: 600">AJAX</span>  :  Asynchronous JavaScript and XML의 약자로, 자바스크립트와 XML을 이용한 비동기적 정보 교환 기법이다. SPA(싱글 페이지앱)의 기반이 되었다.
<br/>
<br/>
<span style="font-weight: 600">JQuery</span>  :  웹사이트에 자바스크립트를 쉽게 활용할 수 있도록 도와주는 오픈소스 기반의 자바스크립트 라이브러리이다.2세대 UI 라이브러리(React, Vue, Angular)의 등장으로 하락세를 보이고 있다.
<br/>
<br/>
<span style="font-weight: 600">Node.js</span>  :  자바스크립트로 브라우저 밖에서 서버를 구축하거나 다양한 자바스크립트 애플리케이션을 실행할 수 있는 런타임 환경이다.
<br/>
<br/>
<span style="font-weight: 600">React</span> : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리이다. 현재 가장 많이 쓰이는 UI 라이브러리중 하나이다.
<br/>
<br/>
<span style="font-weight: 600">React Native</span>  :  React기반으로 모바일 크로스 플랫폼(iOS, Android) 어플리케이션의 UI을 만들기 위한 자바스크립트 라이브러리이다.
<br/>
<br/>
<span style="font-weight: 600">Angular</span>  :  타입스크립트 기반의 개발 플랫폼으로 확장가능한 컴포넌트 구조의 웹 애플리케이션을 만드는 프레임워크 이다.
<br/>
<br/>
<span style="font-weight: 600">Vue</span>  :  사용자 인터페이스를 만들기 위한 자바스크립트 프레임워크이다. React와 함께 현재 가장 많이 쓰인다.
<br/>
<br/>
<span style="font-weight: 600">Electron</span>  :  자바스크립트 기반의 데스크탑 크로스 플랫픔(Window, macOS, Linux) 어플리케이션을 만들기 위한 프레임워크이다.
<br/>
<br/>
<span style="font-weight: 600">TypeScript</span>  :  자바스크립트에 정적 타입을 명시할 수 있는 프로그래밍 언어로 자바스크립트의 타입 에러들을 미리 해결 할 수 있다.
</p>
<br/>
<span>
이렇게 자바스크립트가 무엇인지, 어떤 기능을 수행하는지, 어떤 생태계를 가지고 있는지에 대해 가볍게 알아보았습니다. 프론트엔드 개발자에게 자바스크립트는 매우 중요한 언어이므로 앞으로 자바스크립트에 대해 더 깊이 있는 게시글을 많이 작성하도록 하겠습니다.
</span>
