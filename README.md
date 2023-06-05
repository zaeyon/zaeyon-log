# 🌐 ZAEYON LOG - 개인 블로그
![Home](./public/images/pages/home.png)

## 📝 프로젝트 개요
### • 주제
마크다운 문법으로 작성된 게시글을 볼 수 있는 개인 블로그 웹 서비스입니다. <br/>
카테고리 별로 작성된 게시글을 확인할 수 있고 댓글 기능을 통해 사람들과 소통할 수 있습니다.

### • 기간
2023.3.1 ~ 2023.4.7

### • 참여
혼자 진행한 토이프로젝트 입니다.

|이름|담당|
|----|---|
|이재연 [(zaeyon)](github.com/zaeyon)|기획 & 디자인 & 개발|

### • 웹 링크
[zaeyon.com](zaeyon.com) 

<br/>

## 🛠️ 기술 스택
### •  플랫폼 - Web
React 기반의 웹 서비스로 데스크탑/모바일 반응형 디자인을 적용하였습니다.
### •  프로그래밍 언어 - JavaScript, TypeScript
JavaScript를 사용해 사용자와의 상호작용을 구현하고 이후 정적 타입지정을 위해 TypeScript로 리팩토링하였습니다.
### •  UI 라이브러리 - React.js
사용자 경험을 높이기 위해 React를 사용하여 SPA으로 개발하였습니다.
### •  서버사이드 렌더링(SSR) 프레임워크 - Next.js
기존의 React기반의 CSR 방식을 SEO를 위해 SSR 방식의 Next.js로 마이그레이션하였습니다.
### •  전역상태 관리 라이브러리 - Redux
전역 상태 관리를 위해 Redux를 사용하였습니다.
### •  클라우드 데이터베이스 - Firebase firestore
댓글 기능을 위해 Firestore를 사용하여 서버 구축없이 댓글 DB를 구현하였습니다.

<br/>

## ⭐️ 주요 기능
### 1. 홈 화면
전체 게시글 목록을 확인 할 수 있습니다. <br/>
메뉴를 통해 원하는 카테고리에 작성된 게시글 목록을 볼 수 있습니다. <br/>
<br/>
![Home_menu](./public/images/pages/home_menu.png)

<br/>

### 2. 게시글 상세 화면
마크다운 문법으로 작성된 게시글의 상세 내용을 확인 할 수 있습니다. <br/>
또한 클라우트 데이터베이스 Firestore를 연동하여 댓글 기능을 구현하였습니다.
<br/>

![Post](./public/images/pages/post.png)
<br/>
![Post_comment](./public/images/pages/post_comment.png)

<br/>

### 3. 검색 엔진 최적화(SEO)
기존의 React기반의 CSR 프로젝트를 Next.js로 마이그레이션하여 SSR 방식을 적용하고 <br/> 
작성된 게시글의 정적 사이트에 대한 sitemap을 생성하고 meta태그에 게시글의 정보를 추가하여 검색 엔진 최적화하였고 검색 엔진에 노출되게 하였습니다.
<br/>
<br/>
![SEO](./public/images/pages/seo.png)

<br/>

### 4. 모바일 반응형 디자인
CSS에 미디어 쿼리를 통해 모바일 반응형 디자인을 적용해 모바일 디바이스에 지원되게 하였습니다. <br/>
<br/>
<img width="30%" src="https://user-images.githubusercontent.com/49143255/243292887-b3e577d8-8ffd-4f9b-b7f7-82536cd75e9b.jpeg"/>
<img style="margin-left:300px" width="30%" src="https://user-images.githubusercontent.com/49143255/243292897-aa8163d1-789d-4181-850d-ace4a06edcd3.jpeg"/>

<br/>

## 🚀 발생한 문제와 해결 방법
### ❗️ 검색 엔진 최적화(SEO)를 위한 Next.js로 마이그레이션
→ 기존의 프로젝트를 React의 CRA 방식으로 시작하면서 거의 완성되어 갈때 웹사이트가 검색 엔진에 노출이 안되는 문제가 있었습니다.<br/> 
이를 해결하기 위해 기존의 CRA 방식의 프로젝트를 Next.js으로 마이그레이션을 진행하여 SSR 방식으로 전환하고 정적사이트에 대한 sitemap 생성, meta태그 추가를 통해 검색 엔진 최적화 문제를 해결하였습니다.<br/>

### ❗️ Next.js에서 React-Router 사용 못함
→ 기존의 CRA 프로젝트는 React-Router를 이용하여 라우팅을 적용하였습니다. <br/>
하지만 마이그레이션을 진행하면서 Next.js에서는 React-Router를 사용하지 못하는걸 알게되었고 기존의 코드를 Route별로 pages 폴더안에 컴포넌트를 생성하 next/link를 사용하여 연결하는 방식으로 코드를 리팩토링하여 해결하였습니다.<br/>

### ❗️ 서버 구축 없이 댓글 기능 구현하기
→ 작성한 글에 대해 사람들의 반응을 확인하고 싶어 댓글 기능을 생각하였습니다. 하지만 댓글을 저장하기 위해선 DB와 DB를 연동하기 위한 서버가 필요하였습니다. 서버를 항상 켜놓는게 부담이 되어 서버 구축없이 Firebase의 클라우드 데이터베이스인 Firestore를 사용하여 댓글 기능을 구현하였습니다.
