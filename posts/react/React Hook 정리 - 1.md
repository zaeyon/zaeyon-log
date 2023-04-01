---
id: 3
title: "React Hook 정리 - 1"
date: "2023.03.11"
description: "React Hook의 정의와 도입동기, 클래스형 컴포넌트의 문제점에 대해 알아보고 가장 중요한 useState, useEffect의 사용법을 알아보겠습니다."
preview: "무심코 사용했던 리액트의 훅(Hook)의 종류와 올바른 사용법에 대해 알아보겠습니다."
thumbnail: "/images/posts/3/thumbnail.png"
reference:
  [
    {
      title: React 공식 문서 - Hook 소개,
      url: https://ko.reactjs.org/docs/hooks-intro.html,
    },
    {
      title: React Docs - State A Component's Memoray,
      url: https://beta.reactjs.org/learn/state-a-components-memory,
    },
  ]
---

<img src="/images/posts/3/thumbnail.png" width="100%">
<br/>
<br/>
<span>
리액트의 훅(Hook)은 손쉽게 사용가능한 유용한 도구 입니다. 하지만 무심코 잘못 사용하였다간 프로그램에 큰 문제를 일으킬 수 있습니다. 이번 게시글에선 다양한 훅의 종류와 올바른 사용법에 대해 알아 보겠습니다.
</span>
<h3>
1. Hook 이란?
</h3>
<span>
Hook은 클래스형 컴포넌트에서 사용되는 <em>React state</em>와 <em>생명주기 기능(lifecycle features)</em>을 함수형 컴포넌트에서도 연동(hook into)할 수 있게 해주는 함수입니다.
Hook은 클래스형 컴포넌트에서는 동작하지 않고 함수형 컴포넌트에서만 사용할 수 있습니다.<br/> <b>즉 클래스형 컴포넌트를 사용하지 않고 함수형 컴포넌트만으로 React의 주요 기능을 사용할 수 있게 해주는 것입니다.</b>
</span>
<h3>
2. Hook 도입 동기 - 클래스형 컴포넌트의 문제점
</h3>
<h4>
생명주기 메서드에서의 관련 없는 로직
</h4>
<br/>
<span>
클래스형 컴포넌트에서는 <em>componentDidMount</em>와 같은 <em>생명주기 메서드</em>를 통해 상태 관련 로직을 관리하고 데이터를 가져오는 작업을 수행하였습니다.<br/>
하지만 컴포넌트가 복잡해지면 각 생명주기 메서드에는 관련 없는 로직이 섞여 들어가곤 합니다.<br/>
예시로 <em>componentDidMount</em>는 컴포넌트안에서 데이터를 가져오는 작업을 수행할 때 사용되어야 하지만 이벤트 리스너를 설정하는 것과 같은 관계없는 로직이 포함되기도 하며,
<em>componentWillUnmount</em>에서는 cleanup로직을 수행하기도 합니다. 이러한 연관없는 로직들은 버그를 발생시키고 무결성(데이터를 보호하고 정상적인 상태로 유지하는 성질)을 해칠수 있습니다.
</span>
<br/>
<h4>
Class구조의 어려움
</h4>
<br/>
<span>
React에서 클래스형 컴포넌트의 올바른 사용을 위해서는 JavaScript의 <em>this</em>키워드의 작동 방식을 알아야만 합니다.
하지만 Javascript의 <em>this</em>키워드는 대부분의 다른 언어와 다르게 작동함으로 사용자에게 큰 혼란을 주고 코드의 재사용성과 구성을 매우 어렵게 만들었습니다. 개발자들은 props, state, top-down 데이터 흐름을 완벽히 이해 하고도 Class의 이해에는 어려움을 겪고는 했습니다. 또한 클래스형 컴포넌트는 최근 사용되는 도구에서도 많은 문제를 일으킵니다.
<br/>예를 들어 Class는 코드를 최소화하기 힘들고 핫 리로딩을 깨지기 쉽고 신뢰할 수 없게 만듭니다.
<br/>
<br>
<b>
이러한 문제를 해결하기 위해 React의 개발진들은 Class없이 React의 기능들을 사용할수 있는 Hook을 도입하였습니다. </b>
<br/>
<span>
React의 공식 문서에서는 아래와 같은 설명을 통해 Hook을 통한 함수형 컴포넌트의 사용을 권장합니다.
</span>
<blockquote>
개념적으로 React 컴포넌트는 항상 함수에 가깝습니다.<br/> Hook을 사용한 함수형 컴포넌트는 클래스형 컴포넌트보다 이러한 React의 개념에 적합합니다.<br/> Hook의 사용은 복잡한 문제에 직면했을때 명령형 코드로 보다 쉽게 해결책을 찾을 수 있게 해주며 복잡한 함수형 또는 반응형 프로그래밍 기술을 배우도록 요구하지 않습니다.
</blockquote>
</span>
<h3>
3. useState - 상태(state) 관리 Hook
</h3>
<span>
컴포넌트는 상호작용의 결과에 의해 화면에 보이는 상태를 변경해야 됩니다. <br/>
예를 들면 사용자가 input field에 문자를 입력하거나 image carousel의 순서를 조작하여 화면에 표시되는 이미지가 변경되는 경우가 있습니다. 이러한 상황에 컴포넌트는 변경된 값을 기억해야 됩니다. 이러한 경우와 같이 컴포넌트만의 상태를 React에서는 state라고 일컫습니다. <b>useState는 컴포넌트에 state를 추가하고 관리하는 역할의 Hook입니다.</b>
</span>
<h4>
useState 사용법
</h4>
<br/>
<span>
먼저 파일의 상단에서 react로부터 useState를 import 합니다.
</span>

```jsx
import { useState } from "react";
```

<br/>
<span>
컴포넌트의 상단에서 useState를 호출하면서 <em>배열 구조 분해</em>를 통해 state 변수와 해당 state 변수를 갱신하는 함수를 선언합니다.
useState의 첫번째 인자를 통해 state 변수의 기본값을 할당할 수 있습니다.
</span>

```jsx
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return ();
};

export default App;
```

<br/>
<span>
state 값을 사용할 땐 직접 호출하면 됩니다.
</span>

```jsx
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return <p>개수 : {count}</p>;
};

export default App;
```

<br/>
<span>
state값을 갱신할 땐 세터 함수인 setCount()의 인자에 원하는 값을 넣어 호출하면 됩니다. 세터 함수가 호출되어 state값이 변경되면 컴포넌트는 변경된 state값을 보여주기 위해 리렌더링됩니다.
</span>

```jsx
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <div>
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
      개수 : {count}
    </p>
  );
};

export default App;
```

<br/>
<h4>
useState 사용시 주의 사항
</h4>
<br/>
<span>
• state값은 변경될때마다 컴포넌트가 리렌더링되기 때문에 화면에 영향을 주지 않는 값에 useState를 남용한다면 앱의 성능과 사용자 경험에 부정적 영향을 끼칠 수 있습니다.<br/>
• state값은 선언된 컴포넌트만의 고유의 값이므로 다른 컴포넌트에서 같은 이름의 state값을 선언하더라도 두개의 state값은 독립적으로 작동합니다.
</span>
<h3>
4. useEffect - 렌더링이후 부수 효과(side effect) 관리 Hook
</h3>
<span>
어떤 컴포넌트는 외부의 데이터와 동기화되어야 합니다. 예를 들어 React state와 관련있는 외부 컴포넌트를 조작하기를 원하거나 서버와 연결을 위해 API 호출하기와 같은 경우가 있습니다. <b>useEffect는 컴포넌트를 외부 시스템과 동기화 시키거나 렌더링 이후의 작업을 수행하는 역할의 Hook입니다.</b>
</span>
<br/>
<h4>
useEffect 사용법
</h4>
<br/>
<span>
먼저 파일의 상단에서 react로부터 useEffect를 import 합니다.
</span>

```jsx
import { useEffect } from "react";
```

<br/>
<span>
그리고 컴포넌트의 상단에서 useEffect를 호출한다음 렌더링 이후 수행되어야할 작업들을 작성합니다.
</span>

```jsx
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // 렌더링 이후 수행되어야할 코드를 작성합니다.
  });

  return <div />;
};

export default App;
```

<br/>
<span>
useEffect에서 렌더링 이후 수행되는 작업중 하나가 외부 서버와 API 통신을 통해 컴포넌트를 업데이트 하는 것입니다. <br/>이번 예제에서는 Youtube Data API를 통해 인기있는 유튜브 동영상 목록을 불러와 보겠습니다.
</span>

```jsx
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  useEffect(() => {
    // 렌더링 이후 수행되어야할 코드를 작성합니다.
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos
        ?chart=mostPopular&key=YOUR_API_KEY
        &part=snippet,contentDetails,statistics,status
        &regionCode=KR`
      )
      .then((response) => {
        console.log("한국에서 인기있는 유튜브 영상 목록", response.data.items);
      });
  });
  return <div />;
};

export default App;
```

<br/>
<span>
개발자 도구에서 콘솔을 확인해보면 아래와 같이 JSON형태의 인기 동영상 목록을 확인할 수 있습니다.
</span>
<br/>
<br>
<img src="/images/posts/3/youtube_list.png" width="100%">
<br/>
<br/>
<span>
영상 목록 state를 선언해주고 간단히 영상 썸네일과 제목 목록을 보여주기 위한 코드를 작성합니다.
</span>

```jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    // 렌더링 이후 수행되어야할 코드를 작성합니다.
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos
        ?chart=mostPopular&key=YOUR_API_KEY
        &part=snippet,contentDetails,statistics,status
        &regionCode=KR`
      )
      .then((response) => {
        console.log(response.data.items);
        setVideoList(response.data.items);
      });
  });

  return (
    <div className="container">
      {videoList.map((item, index) => (
        <div className="videoItem" key={index}>
          <img
            className="thumbnail"
            src={item.snippet.thumbnails.maxres.url}
            alt=""
          />
          {item.snippet.title}
        </div>
      ))}
    </div>
  );
};

export default App;
```

<br/>
<span>
이렇게 인기 동영상 목록이 화면에 표시됩니다!
</span>
<img src="/images/posts/3/3.png" width="100%">
<br/>
<br/>
<h4>
useEffect에 의존성 추가
</h4>
<br/>
<span>
하지만 위의 예시 처럼 useEffect안에서 state를 업데이트하면 문제가 발생합니다.<br/>
기본적으로 useEffect는 모든 렌더링후에 실행됩니다. 따라서 useEffect안에서 state를 업데이트하면 리렌더링을 발생시켜 다시 useEffect가 실행되어 무한루프가 발생됩니다.
<br/>
위의 예제에서 개발자 도구의 콘솔을 확인해보면 API가 끊임없이 호출되는걸 확인할 수 있습니다.
<br/>
이렇게 useEffect안에서 API가 무한히 호출되면 성능이 떨어지고 API사용이 제한될수 있습니다.
<br/>
위 문제를 해결하기 위해선 useEffect에 의존성을 지정해줘야 합니다.
<br/>
useEffect의 두번째 인자에 의존성 배열을 추가할 수 있습니다.
빈 배열인 []을 두번째 인자에 추가하면 useEffect는 오직 컴포넌트가 처음 마운트되는 순간에만 살행됩니다.
</span>

```jsx
useEffect(() => {
  // 두번째 인자에 빈배열 []을 추가하여 오직 컴포넌트가 처음 마운트되는 순간에만 실행
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos
        ?chart=mostPopular&key=YOUR_API_KEY
        &part=snippet,contentDetails,statistics,status
        &regionCode=KR`
    )
    .then((response) => {
      console.log(response.data.items);
      setVideoList(response.data.items);
    });
}, []);
```

<br/>
<span>
또한 특정 값이 업데이트될때마다 useEffect가 실행되기 원한다면 원하는 값이 추가된 배열을 두번째 인자에 넣어주면 됩니다.
이번 예제에서는 국가 state를 선언하여 선택한 국가가 변경될때마다 해당 국가의 인기 유튜브 영상 목록을 불러와 보겠습니다.
</span>
<br/>

```jsx
const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [regionCode, setRegionCode] = useState("KR");

  useEffect(() => {
    // 렌더링 이후 수행되어야할 코드를 작성합니다.
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyBZfFVPoRFRmy7Xrt0DykLeng2VKr1mMh0
        &part=snippet,contentDetails,statistics,status
        &regionCode=${regionCode}`
      )
      .then((response) => {
        console.log(response.data.items);
        setVideoList(response.data.items);
      });
  }, [regionCode]);

  const selectRegion = (e) => {
    setRegionCode(e.target.value);
  };

  return (
    <div className="container">
      <select onChange={selectRegion}>
        <option value="KR">한국</option>
        <option value="US">미국</option>
        <option value="JP">일본</option>
        <option value="BR">브라질</option>
        <option value="PH">필리핀</option>
      </select>
      <div className="listContainer">
        {videoList.map((item, index) => (
          <div className="videoItem" key={index}>
            <img
              className="thumbnail"
              src={item.snippet.thumbnails.high.url}
              alt=""
            />
            {item.snippet.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
```

<br/>
<span>
이렇게 API 호출할때 url의 regionCode쿼리 부분을 선언한 state변수명인 regionCode로 변경해주고 useEffect의 의존성배열에 regionCode을 추가해줍니다.<br/>
select, option 태그로 나라 목록 드롭다운을 만들어 줍니다.<br/>
<br/>
그럼 아래와 같이 드롭다운에서 원하는 국가를 선택하면 영상 목록이 변경되는걸 확인할 수 있습니다! 
</span>
<br/>
<br/>
<img src="/images/posts/3/change_regionCode.gif" width="100%"/>
<br/>
<br/>
<h4>
useEffect 사용시 주의 사항
</h4>
<br/>
<span>
• useEffect안에서 state값을 변경한다면 무한루프를 발생시키지 않게 의존성을 추가해야 합니다.<br/>
• 만약 컴포넌트를 외부 시스템과 동기화 시킬 필요가 없고 state값에 의해 변경되는 작업만을 수행한다면 useEffect가 필요하지 않을 수 있습니다.
</span>

<h3>
5. Hook 사용 규칙
</h3>
<h4>
1. 컴포넌트 최상단에서만 Hook을 호출해야 합니다.
</h4>
<br/>
<span>
Hook은 항상 React 함수의 최상단에서만 호출해야 하고 반복문, 조건문 혹은 중첩된 함수 내에서 호출하면 안됩니다. <br/>
이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장됩니다.<br/> 
이러한 점은 useState 와 useEffect 가 여러 번 호출되는 중에도 컴포넌트의 상태를 올바르게 유지할 수 있도록 해줍니다.
</span>
<br/>
<h4>
2. 오직 React 함수 내에서 Hook을 호출해야 합니다
</h4>
<br/>
<span>
Hook을 일반적인 JavaScript 함수에서 호출하면 안됩니다. 대신 React 함수 컴포넌트 혹은 Custom Hook에서 호출해야 합니다.
이 규칙을 따르면 컴포넌트의 모든 상태 관련 로직을 소스 코드에서 명확히 보이도록 할 수 있습니다.
</span>
<h3>
6. 마무리
</h3>
<span>
이번 게시글에선 React Hook의 도입 동기와 가장 중요한 Hook인 useState와 useEffect에 대해 알아봤습니다.
<br/>
React를 사용하여 개발을 하면서 Hook이 도입된 배경에 대해 생각해보지 않고 무심코 Hook을 사용하였는데 이번 게시글을 작성하면서 Hook이 도입된 배경, 클래스형 컴포넌트의 문제점, 함수형 컴포넌트를 권장하는 이유에 대해 알게 되었습니다.  
다음 React Hook 정리 2편에서는 더 다양한 Hook의 종류와 사용자 정의 Hook에 대해 알아보겠습니다.
</span>
