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

### Q1. 객체에 선택적 요소에 대한 타입 지정은?

객체에 있을 수도 있으면서, 없을 수도 있는 요소에 대한 설정이다.

```js
const player = {
  name: string,
  age?: number
} = {
  name: "First Name"
}
```

player 객체는 `name: string, age? : number | undefined` 로 타입이 지정된다.

`if(player.age && player.age < 10){}` 과 같이 undefined인지 체크한 뒤에 사용할 수 있다.

<br>

### Q2. 여러개를 사용하려면 명시적 타입 선언을 계속 해야 하나?

반복되는 타입 명명은 Alias (별칭) 타입을 생성 할 수 있다.

```js
type Player = {
  name: string,
  age?: number,
};

const first: Player = {
  name: "First Name",
};
const last: Player = {
  name: "Last Name",
  age: 11,
};
```

객체의 이름의 첫번째는 대문자로 한 뒤에 생성시켜준다. 코드의 반복을 줄이고, 가독성이 좋아진다.

```js
function playerMaker(name: string): Player {
  return { name };
}

const player = playerMaker("hxan");
player.age = 21;
```

함수에도 마찬가지로, 매개 변수는 string 타입을 받으면서, return하는 객체의 타입은 Player 타입으로 설정했다. (name String, age number)

- 함수를 많이 사용하는 Arrow Function으로 변경해보면 다음과 같다.

```js
const playerMaker = (name: string): Player => ({ name });
```

return을 하기 위해서 {} 객체 밖에 ()로 한번 더 감싸줘야 값을 얻을 수 있다.

<br>

### Q3. 객체 요소를 수정할 수 없도록 하는 방법이 있는가?

readonly Property를 추가하면 수정이 불가능하고, 읽기만 가능하도록 할 수 있다.

```js
type Player = {
  readonly name: string,
  age?: number
}

const userName = playerMaker("hxan");
userName.age = 15;
userName.name = "xxan";
```

name은 변경 할 수 없다는 오류를 리턴해준다.

<br>

### Q4. 배열 요소마다 타입이 다른 경우에는 어떻게 명시해야하는지?

Tuple을 이용해서 타입을 명시해준다.

Tuple은 배열을 생성 할 수 있는데, 최소한의 길이와 특정 위치에 특정 타입이 있어야한다.

```js
const a: [string, number, boolean] = ["text", 1, false];
```

3개의 argument가 필요하면서, 순서대로 string, number, boolean이어야 오류가 없이 return 된다.

<br>

---

## 타입스크립트 타입

타입에서 여러개가 있지만 any, void, never, unknown를 설명하자면

any는 TypeScript를 벗어나 자바스크립트처럼 성립되지 않는 요소를 그냥 실행시킬 수 있도록 한다.

```js
const a: any[] = [1, 2, 3, 4];
const b: any = false;

a + b;
```

다음과 같이 올바르지 않은 타입인데도 오류가 없다. 물론 이렇게 되면, Typescript를 사용하지 않기 때문에 비추천

<br>

unknown은 예를 들어 API를 요청했을 경우, response 되는 값의 타입을 모를 경우에 사용한다.

type을 체크한 후에 그에 따라 실행하는 함수를 다르게 한다.

```js
let a: unknown;

if (typeof a === "number") {
  let b = a + 2;
}
if (typeof a === "string") {
  a.toUpperCase();
}
```

<br>

void return 하지 않는 요소에 대한 타입이다.

```js
// function hello(): void
function hello() {
  console.log("a");
}
```

Typescript가 자동으로 void라고 지정한다.  
void이기 때문에, `a.toUpperCase()`와 같이 코드를 작성하면 오류가 발생한다.

<br>

nerver 절대로 return을 하지 않는다.

```js
function hello(name: string | number) {
  if (typeof name === "string") {
    // name: string
    name;
  } else if (typeof name === "number") {
    // name: number
    name;
  } else {
    // name: never
    name;
  }
}
```

2가지의 매개변수 타입으로 인수를 받는데, if 함수로 이미 string과 number에 대한 조건을 마쳤기 때문에,  
마지막은 never가 된다.

**void는 함수가 실행되고 반환을 하지만 값이 없는 경우이고, never는 함수가 반환되지 않는 경우에 사용된다.**

<br>

## 타입스크립트 Call Signature

함수를 hover 했을 경우 나오는 텍스트, 인수의 타입, 반환 타입에 대해 알려주는 요소이다.

```js
// Call Signature
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

add의 타입이 `(number, number) => number`가 된다.

<br>

## 타입스크립트 overloading(오버로딩)

하나의 타입에 여러개의 Call Signature가 있는 경우를 뜻한다.

```js
type Add = {
  (a: number, b: number) : number
  (a: number, b: string) : number
};
```

`(a: number, b: string|number ) number` 가 된다.

```js
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
```

서로 다를 수 있는 타입이니, + 연산자는 사용할 수 없어서, typeof를 통해 string인지 체크하고 true일 경우  
a를 return 시킨다. number일 경우 "a + b"를 한다.

```ts
// string과 object가 있어야 함
type Config = {
  path: string;
  config: object;
};

type Push = {
  // (push 함수에서 별도로 return 하는 요소가 없기 때문에 return을 void로 지정함)
  // string이 들어오면
  (path: string): void;
  // Object가 들어오면 Config 타입으로
  (config: Config): void;
};

// string | Config(object) - return 하는 요소 없음
const push: Push = (config) => {
  // config가 string일 경우
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config);
  }
};
```

유저에게 정보를 return할 필요가 없을 때 타입을 void로 지정하고, return하는 요소가 있다면 타입을 지정해준다.
