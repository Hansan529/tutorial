# 타입스크립트

## 자바스크립트의 문제

JavaScript는 Array에 Boolean을 더하는 행위,  
즉 말도 안되는 행위에 대해 오류를 리턴하지 않고, 개발자가 시도하는 그대로 실행시킨다.

`[1,2,3,4] + true` 라고 하면, 결과가 어떻게 될 까? 배열에 참을 더할 순 없는데, 자바스크립트에서는  
"1,2,3,4true" 배열을 지우고, string으로 만들어 버린다.

```js
function divide(a, b) {
  return a / b;
}

const txt = { name: "hxan" };
```

divide에 1개의 인수만 입력해서 함수를 사용해보면

```js
divide("xxxxx");
NaN;
```

애초에 실행이 되면 안되는 요소인데 일단 실행시킨다...

`txt.hello()` 라고 호출하면 유저의 콘솔에서 에러(런타임 에러)를 확인 할 수 있다. 에러가 발생 했다고 알려주지만,  
이는 txt의 hello를 실행 헀는데, 없어서 발생하는 오류이기 때문에, 실행하기 전에 이를 막기 위해서

타입을 지정한, 타입스크립트를 사용한다.

---

## 타입스크립트가 하는 일

브라우저는 자바스크립트를 이해하기 때문에, 타입스크립트에 작성된 코드를 자바스크립트로 변환한다.

여기서 타입스크립트가 하는 일에 대해 알 수 있다.

오류가 생기는 부분에 대해서는 컴파일을 하지 않아 개발자에게 오류를 알려 준다.

예를 들어

```js
const txt = {
  name: "ABC",
};

txt.name;
txt.hello;
```

txt.hello의 밑줄로 "Property 'hello' does not exist on type '{name: string; }" 이라고,
객체의 요소에 없다는 말을 해준다. 자바스크립트였다면 일단 실행시키고, 없다는 오류를 리턴 했을 텐데 말이다.

```js
// let a: any
let a;
// let b: string
let b = "";
// let c: boolean
let c = false;

// let d: any[]
let d = [];
// let e: number[]
let e = [1];
// let f: number[]
let f: number[] = [];
```

기본적으로, TypeScriipt가 알아서 추론을 하기 때문에 명시적으로 선언을 해주지 않아도 된다.  
물론 빈 배열에 특정한 타입만 가능하도록 하려면 명시적으로 표기해주어야 한다.
