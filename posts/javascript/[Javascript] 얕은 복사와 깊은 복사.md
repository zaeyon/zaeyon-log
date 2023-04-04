---
id: "4"
title: "[JavaScript] 얕은 복사와 깊은 복사"
date: "2023.04.01"
preview: "javascript에서의 객체 복사 방법인 얕은 복사와 깊은 복사를 비교해 봅시다."
thumbnail: "/images/posts/logo/javascript.png"
reference:
  [
    {
      title: "mdn web docs - JavaScript의 타입과 자료구조",
      url: "https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures",
    },
    {
      title: "스스로 하는 개발 공부 - 얕은 복사 vs 깊은 복사",
      url: "https://suzzeong.tistory.com/107",
    },
    {
      title: "th0566.log - [Javascript] 얕은 복사, 깊은 복사",
      url: "https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC",
    },
  ]
---

<img src="/images/posts/4/thumbnail_detail.png" width="100%"/>
<br/>
<h3>
1. 자바스크립트의 데이터 타입
</h3>
<span>
객체 복사 방법을 알기 전에 먼저 자바스크립트의 데이터 타입에 대해 알아봅시다.<br/>
자바스크립트의 데이터 타입은 <b>원시 타입</b>과 <b>객체 타입</b>으로 나뉩니다. <br/><br/>
• 원시 타입은 값에 의한 전달(pass-by-value)이며 변경할 수 없는 값(immutable value)입니다.<br/>원시 타입에는 <em>Boolean, Null, Undefined, Number, BigInt, String, Symbol</em>이 있습니다.<br/><br/>
• 객체 타입은 참조에 의한 전달(pass-by-reference)이며 식별자로 참조할 수 있는 메모리 상의 값입니다.<br/> 원시 타입을 제외한 모든 값은 객체 타입으로 대표적으로 <em>Object, Array, Function</em>이 있습니다.
</span>
<h3>
2. 원시, 객체 타입의 복사 방법
</h3>
<span>
원시 타입은 값을 복사할 때 기본적으로 복사된 값을 다른 독립적인 메모리에 할당하기 때문에 기존의 값과 복사된 값이 서로에게 영향을 미치지 않습니다. 이렇게 <b>실제 값을 복사하는 것을 <em>깊은 복사</em></b>라고 합니다.
</span>
<br/>
<span>
하지만 객체 타입의 값은 객체의 주소를 가리키므로 복사된 객체의 값과 기존의 객체의 값이 똑같은 객체가 저장된 메모리 공간을 참조하고 있는 경우 복사된 객체의 값을 수정하게 되면, 기존의 객체의 값에도 영향을 끼치게 되어 예기치 않은 문제가 생길 수 있습니다. 이렇게<b> 객체의 주소값을 복사하는 것을 <em>얕은 복사</em></b>라고 합니다.
</span>
<h3>
3. 얕은 복사 (Shallow Copy)
</h3>
<span>
<b>얕은 복사란 객체를 복사할 때 복사된 값과 기존 값이 같은 주소(참조)값을 가르키고 있는 것</b>을 말합니다. <br/>
얕은 복사된 값과 기존 값은 서로 종속되어 영향을 줍니다.
</span>
</br>
<h4>
• 기본적인 변수 할당 방법
</h4>

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr1[0] = 4;
console.log(arr2); // [ 4, 2, 3 ]
```

<br/>
<span>
새로운 arr2 변수를 선언하고 arr1값을 복사하였지만 얕은 복사가 되어 같은 주소값을 가르키고 있으므로 arr1의 값을 변경하면 arr2값도 변경됩니다.
</span>

<br/>
<h4>
• 배열 복사 방법(1차원 깊은 복사) - slice(), concat(), Array.from(), spread 연산자 
</h4>

<h4>
1. slice()
</h4>

```javascript
const arr1 = [1, 2, ["a", "b", "c"]];
const arr2 = arr1.slice();

arr1[0] = 3;
console.log(arr2); // [ 1, 2, [ 'a', 'b', 'c' ] ]
arr1[2][0] = "d";
console.log(arr2); // [ 1, 2, [ 'd', 'b', 'c' ] ]
```

<br/>
<h4>
2. concat()
</h4>

```javascript
const arr1 = [1, 2, ["a", "b", "c"]];
const arr2 = [].concat(arr1);

arr1[0] = 3;
console.log(arr2); // [ 1, 2, [ 'a', 'b', 'c' ] ]
arr1[2][0] = "d";
console.log(arr2); // [ 1, 2, [ 'd', 'b', 'c' ] ]
```

<br/>
<h4>
3. Array.from()
</h4>

```javascript
const arr1 = [1, 2, ["a", "b", "c"]];
const arr2 = Array.from(arr1);

arr1[0] = 3;
console.log(arr2); // [ 1, 2, [ 'a', 'b', 'c' ] ]
arr1[2][0] = "d";
console.log(arr2); // [ 1, 2, [ 'd', 'b', 'c' ] ]
```

<br/>
<h4>
4. spread 연산자
</h4>

```javascript
const arr1 = [1, 2, ["a", "b", "c"]];
const arr2 = [...arr1];

arr1[0] = 3;
console.log(arr2); // [ 1, 2, [ 'a', 'b', 'c' ] ]
arr1[2][0] = "d";
console.log(arr2); // [ 1, 2, [ 'd', 'b', 'c' ] ]
```

<br/>
<span>
위와 같은 방법으로 배열을 복사하면 1차원 배열까진 깊은 복사가 허용되지만 2차원부턴 얕은 복사가 되어 기존의 값을 변경할때 복사된 값에 영향을 줍니다.
</span>

<br/>
<h4>
• 객체 복사 방법(1차원 깊은 복사) - Object.assign(), spread 연산자
</h4>

<br/>
<h4>
1. Object.assign()
</h4>

```javascript
const obj1 = { a: 1, b: { c: 1, d: 2 } };
const obj2 = Object.assign({}, obj1);

obj1.a = 3;
console.log(obj2); // { a: 1, b: { c: 1, d: 2 } }
obj1.b.c = 3;
console.log(obj2); // { a: 1, b: { c: 3, d: 2 } }
```

<br/>
<h4>
2. spread 연산자
</h4>

```javascript
const obj1 = { a: 1, b: { c: 1, d: 2 } };
const obj2 = { ...obj1 };

obj1.a = 3;
console.log(obj2); // { a: 1, b: { c: 1, d: 2 } }
obj1.b.c = 3;
console.log(obj2); // { a: 1, b: { c: 3, d: 2 } }
```

<br/>
<span>
위와 같은 방법으로 객체를 복사하면 배열과 마찬가지로 1차원 객체까진 깊은 복사가 허용되지만 2차원부턴 얕은 복사가 되어 기존의 값을 변경할때 복사된 값에 영향을 줍니다.
</span>

<h3>
4. 깊은 복사 (Deep Copy)
</h3>
<span>
깊은 복사란 객체를 복사할 때 복사된 값과 기존 값이 다른 주소(참조)값을 가르키고 있는 것을 말합니다. <br/> 
깊은 복사된 값과 기존 값은 완전히 독립적인 값을 가집니다.
</span>

<br/>
<h4>
• 재귀 함수 사용
</h4>

```javascript
const obj1 = { a: 1, b: { c: 1, d: 2 } };

const copyObj = (obj) => {
  const copiedObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copiedObj[key] = copyObj(obj[key]);
    } else {
      copiedObj[key] = obj[key];
    }
  }

  return copiedObj;
};

const obj2 = copyObj(obj1);

obj1.b.c = 3;
console.log(obj2); // { a: 1, b: { c: 1, d: 2 } }
```

<br/>
<h4>
• JSON.stringify()와 JSON.parse() 사용
</h4>

```javascript
const arr1 = [1, 2, [1, 2, 3]];
const arr2 = JSON.parse(JSON.stringify(arr1));

arr1[2][0] = 200;
console.log(arr2); // [ 1, 2, [ 1, 2, 3 ] ]
```

<br/>
<h4>
• lodash 라이브러리 사용
</h4>

```javascript
const _ = require("lodash");

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = _.cloneDeep(obj1);

obj1.b.c = 300;
console.log(obj2); // { a: 1, b: { c: 2 } }
```

<br/>
<span>
위와 같은 방법을 통해 깊은 복사를 하면 2차원 이상의 객체에 대해서도 깊은 복사가 되어 기존의 값을 변경해도 복사된 값에 영향을 주지 않습니다.
</span>
