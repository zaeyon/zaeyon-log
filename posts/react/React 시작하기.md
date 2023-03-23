---
id: "1"
title: "React 시작하기"
date: "2023.02.28"
description: "React의 정의와 특징에 대해 알아보고 React 앱을 만들기 위한 환경설정후 React앱을 만들어보겠습니다."
preview: "리액트에 대해 알아보고 리액트 앱을 만들어 보겠습니다."
thumbnail: "/images/posts/react_logo.png"
---

<img src="/images/posts/react_logo.png" width="100%">
<br/>
<br/>
<span>
이번 게시글에선 리액트(React)에 대해 알아보고  리액트 앱을 만들어 보겠습니다.</span>
<br/>
<br/>
<h3>
1. React가 무엇인가요?</h3>
<br/>
<span>
리액트는 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리입니다.<br/>
메타(전 페이스북)에서 개발하였으며 현재 가장 많이 쓰이는 프론트엔드 라이브러리중 하나입니다.<br/>
리액트의 가장 큰 장점은 스스로 상태를 관리하는 <em>컴포넌트</em>를 만들고 이러한 각각의 컴포넌트를 조합해 복잡한 UI를 만들 수 있다는 것입니다.
</span>
<br/>
<br/>
<br/>
<h3>
2. React 특징</h3> <br/>
<span>
리액트에서는 엘리먼트(element)를 생성하고 UI가 어떻게 생겨야 하는지 설명하기 위해 <em>JSX(JavaScript XML)</em>라 하는 Javascript를 확장한 문법을 사용합니다.
JSX를 사용하여 하나의 파일에 자바스크립트와 HTML을 동시에 작성할 수 있습니다. 또한 JSX는 HTML 문법을 완벽히 포함하고 있어 자바스크립트를 HTML 작성하듯이 할수 있어 가독성이 좋습니다.
</span>
<br/>
<br/>
<br/>

<span style="font-weight: 600">
• JSX를 사용해 컴포넌트 로직을 구현한 예시</span>

```jsx
import React from 'react';
import Header from "../components/Header";
import Body from "../components/Body";
import Menu from "../components/Menu";
import PostList from "../components/PostList";

const Example = () => {
    return (
        <Container>
            <Header>Title</Header>
            <Menu />
            <Body>
                <PostList />
            </Body>
        </Container>;
    )
}

export default Example
```

<br/>
<span>
위 예시 처럼 리액트에서는 UI를 구성하는 각 부분들을 다른 파일로 분리하여 각각 컴포넌트로 선언한 다음, 전체 페이지에 해당하는 컴포넌트에서 각각의 컴포넌트들을 불러와 조립하듯이 UI를 구성 할 수 있습니다. 이러한 특징은 API를 호출하고 데이터를 관리하는 <em>부모 컴포넌트(Container Component)</em>와 직접 UI를 구성하고 부모 컴포넌트로부터 받아온 데이터를 보여주는 <em>자식 컴포넌트(Presentational Component)</em>로 나누어 관리 할 수 있어 데이터를 관리하고 UI를 수정하기 편하게 하여 코드 생산성을 높여 줍니다.
</span>

<br/>
<br/>
<br/>

<h3>3. React앱 만들기</h3>
<br/>
<span>
리액트로 개발을 하기 위해선 Node.js 14.0.0 상위 버전 그리고 npm 5.6 상위 버전이 필요합니다.

<p>Node.js  :  자바스크립트로 브라우저 밖에서 서버를 구축하거나 다양한 자바스크립트 애플리케이션을 실행할 수 있는 런타임 환경이다.
<br/>
<br/>
npm  :  Node.js의 패키지를 관리할 수 있는 도구로 일반적으로 Node.js를 설치하면 자동으로 설치된다.</p>
</span>

<span>
아래의 링크를 통해 최신 Node.js LTS 버전을 설치하면 npm도 같이 설치 됩니다.
<br/>
<br/> 
<a href="https://nodejs.org/ko/download/"
target="_blank"> • Node.js & npm 설치 링크</a>
<br/>
<br/>
정상적으로 설치가 완료됐으면 리액트 앱을 만들기 위한 준비가 끝났습니다! <br/>
<em>CRA(Create React App)</em>를 통해 새로운 리액트 앱을 만들어 봅시다. CRA은 최신 자바스크립트를 사용하게 해주고 좋은 개발 경험과 프로덕션 앱 최적화를 해줘 리액트를 배우기에 좋은 환경을 설정해줍니다.<br/> 터미널에서 새로운 리액트 앱을 만들 디렉터리로 이동한 후 아래의 명령어를 실행해 봅시다.
</span>

```shell
$ npx create-react-app react-test-app
$ cd react-test-app
$ npm start
```

<img src="/images/posts/1_initial_screen.png" width="100%"/>

<br/>
<br/>
<span>
새로운 브라우저 창이 열리고 위와 같은 화면이 보이면서 새로운 리액트 앱이 만들어졌습니다!
<br/>
리액트를 좋아하는 프론트엔드 개발자로서 앞으로 자주 리액트 게시글을 작성하겠습니다. <br/>
첫 게시글 읽어주셔서 감사합니다.
