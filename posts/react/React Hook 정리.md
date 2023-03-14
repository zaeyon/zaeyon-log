---
id: 3
title: "React Hook 정리"
date: "2023.03.11"
preview: "무심코 사용했던 리액트의 훅(Hook)의 종류와 올바른 사용법에 대해 알아보겠습니다."
thumbnail: "/images/posts/3/thumbnail.png"
---

<img src="/images/posts/3/thumbnail.png" width="100%"/>
<br/>
<br/>
<span>
리액트의 훅(Hook)은 아주 유용하고 손쉽게 사용가능한 도구 입니다. 하지만 무심코 잘못 사용하였다간 프로그램에 큰 문제를 일으킬 수 있습니다. 이번 게시글에선 다양한 훅의 종류와 올바른 사용법에 대해 알아 보겠습니다.
</span>
<br/>
<br/>
<h3>
1. Hook 이란?
</h3>
<br/>
<span>
Hook은 클래스형 컴포넌트에서 사용되는 <em>React state</em>와 <em>생명주기 기능(lifecycle features)</em>을 함수형 컴포넌트에서도 연동(hook into)할 수 있게 해주는 함수입니다.
Hook은 클래스형 컴포넌트에서는 동작하지 않고 함수형 컴포넌트에서만 사용할 수 있습니다.<br/> <span style="font-weight: 600">즉 클래스형 컴포넌트를 사용하지 않고 함수형 컴포넌트만으로 React를 사용할 수 있게 해주는 것입니다.</span>
</span>
<br/>
<br/>
<br/>
<h3>
2. Hook 도입 동기 - 클래스형 컴포넌트의 문제점
</h3>
<br/>
<h4>
• 생명주기 메서드의 사이드 이펙트
</h4>
<br/>
<span>
클래스형 컴포넌트에서는 <em>componentDidMount</em>와 같은 <em>생명주기 메서드</em>를 통해 상태 관련 로직을 관리하고 데이터를 가져오는 작업을 수행하였습니다.<br/>
하지만 컴포넌트가 점점 복잡해지면 각 생명주기 메서드에는 관련 없는 로직이 섞여 들어가곤 합니다.<br/>
예시로 <em>componentDidMount</em>에는 컴포넌트안에서 데이터를 가져오는 작업을 수행할 때 사용되어야 하지만 이벤트 리스너를 설정하는 것과 같은 관계없는 로직이 포함되기도 하며,
<em>componentWillUnmount</em>에서 cleanup로직을 수행하기도 합니다. 이러한 연관없는 로직들은 버그를 발생시키고 무결성(데이터를 보호하고 정상적인 상태로 유지하는 성질)을 쉽게 해칠수 있습니다.
</span>
<br/>
<br/>
<h4>
• Class구조의 어려움
</h4>
<br/>
<span>
React에서 클래스형 컴포넌트의 올바른 사용을 위해서는 JavaScript의 <em>this</em>키워드의 작동 방식을 알아야만 합니다.
하지만 Javascript의 <em>this</em>키워드는 대부분의 다른 언어와 다르게 작동함으로 사용자에게 큰 혼란을 주고 코드의 재사용성과 구성을 매우 어렵게 만들었습니다. 사용자들은 props, state, top-down 데이터 흐름을 완벽히 이해 하고도 Class의 이해에는 어려움을 겪고는 했습니다.<br/>
또한 클래스형 컴포넌트는 최근 사용되는 도구에서도 많은 문제를 일으킵니다.
<br/>예를 들어 Class는 코드를 최소화하기 힘들고 핫 리로딩을 깨지기 쉽고 신뢰할 수 없게 만듭니다.
<br/>
<span style="font-weight: 600">이러한 문제를 해결하기 위해 React의 개발진들은 Class없이 React의 기능들을 사용할수 있는 Hook을 도입하였습니다. </span>
<br/>
<br/>
<span>
React의 공식 문서에서는 아래와 같은 설명을 통해 Hook을 통한 함수형 컴포넌트의 사용을 권장합니다.
</span>
<br/>
<br/>
<blockquote>
개념적으로 React 컴포넌트는 항상 함수에 가깝습니다.<br/> Hook을 사용한 함수형 컴포넌트는 이러한 React의 개념에 적합합니다.<br/> Hook의 사용은 복잡한 문제에 직면했을때 명령형 코드로 보다 쉽게 해결책을 찾을 수 있게 해주며 복잡한 함수형 또는 반응형 프로그래밍 기술을 배우도록 요구하지 않습니다.
</blockqoute>
</span>
