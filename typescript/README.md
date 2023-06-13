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

### Q5. 비슷한 값들끼리 묶기위해선 어떻게 해야 하는지?

```ts
enum Os {
  Window,
  Ios,
  Android,
}
```

`(enum member) Os.Window = 0`, `... Ios = 1`, `... Android = 2`과 같이 사용이 가능하다.

임의의 number로 지정해 줄 수 있고, string으로 할 수도 있다.

```ts
enum Os {
  Window = 3,
  Ios = 10,
  Android,
}

enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}
```

`console.log(Os[3])` `Window` / `console.log(Os['Ios'])` `10` 처럼 지정이 가능하다.  
이를 타입으로 지정도 가능하다.

```ts
let myOs: Os;

myOs = Os.Window;
```

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

<br>

## 타입스크립트 Polymorphism / generic

### generic type

타입에 대해 Placeholder를 사용할 수 있다. 이는 Call Signature를 작성할 때, 받을 타입을 모를 경우 사용한다.

```ts
type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

// const superPrint: <number>(arr: number[]) => number
superPrint<number>([1, 2, 3, 4]);

// const superPrint: <string>(arr: string[]) => string
superPrint(["1", "2", "3"]);

// const superPrint: <boolean>(arr: boolean[]) => boolean
superPrint([true, false, true]);

// const superPrint: <string | number | boolean>(arr: (string | number | boolean)[]) => string | number | boolean
superPrint([1, "2", true]);
```

임의의 이름으로 지정한 후, Type에도 설정해주면, Typescript에서 추측한 타입으로 변경한다.  
return한 값이 있기 때문에, **generic type**에서 return 타입을 일치시켜준다.

- 결국 다음과 같은 코드를 작성하지 않아도 된다는 것이다.

```ts
type SuperPrint = {
  (arr: number[]): number;
  (arr: boolean[]): boolean;
  (arr: string[]): string;
};
```

**Generic Type**에서도 마찬가지로 여러개의 인수를 설정할 수 있다.

`<T,M>(a: T[], b:M) => T`

<br>

---

## 타입스크립트 Class

추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.

```ts
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

class Player extends User {}

const hxan = new Player("han", "san", "산");

hxan.nickname;
```

추상 클래스를 사용하지 않았다면 Player class에서 `consturctor`를 입력해야 했지만, `abstract` 추상 클래스를 사용해서 상속받아 사용하였다.  
단, 추상 클래스는 새로운 인스턴스를 만들 수는 없다.

`const hxan = new User("han","san","산")` 이라고 변경해보면, 추상 클래스는 만들 수 없다고 나온다.

클래스에 `private, public`의 차이는 **참조가 가능한지, 불가능한지**에 대한 속성이다. private로 지정했으면, 참조가 안된다.  
`hxan.firstName` 을 하면, typescript는 오류를 리턴할 거다.

property 만이 아니라 method에서도 작동한다.

```ts
abstract class User {
  constructor(
    ...
  ) {}
  private getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

// hxan.getFullName()
```

getFullName을 사용할 수 없다. 상속을 받았는데도 해당 요소를 사용할 수 없다.

그래서 상속을 받은 클래스에서는 사용 할 수 있도록 하려면 `protected` 를 사용하면 된다.

| 구분      | 선언한 클래스 내 | 상속받은 클래스 내 | 인스턴스 |
| --------- | ---------------- | ------------------ | -------- |
| private   | O                | X                  | X        |
| protected | O                | O                  | X        |
| public    | O                | O                  | O        |

<br>

배열에 대해 특수 타입만 지정한다.

```ts
type Words = {
  [key: string]: string;
};
```

**몇 개를 받을지는 모르는 상태에서 사용한다. n개만큼 타입을 만드는건 코드가 너무 길어지기 때문에 다음과 같이 사용한다.**

```ts
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender? : string;
  readonly birthYear: number;
  [key: number]: Score;
}

let user: User = {
  name: "hxan",
  age: 23,
  birthYear: 2001,
  1: 'A'
  2: 'F'
  3: 'C'
}
```

여러개의 number 값을 받아 작성할 수 있다.

<br>

다른 메소드에서도 사용하려면 class 안에 constructor 안에 지정하지 않고,  
initializer 없이 선언하고 constructor를 수동으로 초기화시켜준다.

```ts
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
}
```

---

- 사전

```ts
// 타입: 문자열, 문자열
type Words = {
  [key: string]: string
}

class Dict = {
  // 타입을 Words로 설정
  private words: Words
  // words 초기화
  constructor(){
    this.words = {}
  }
  // 매개변수는 term, def 모두 string으로 2가지가 필수
  add(word: Word){
    // words에서 word.term이 없다면 word 추가
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def
    }
  }
  // words에서 term을 찾아서 반환
  def(term: string){
    return this.words[term]
  }
  // undefined가 아닐 경우(일치) 해당 단어 삭제
  del(word: Word){
    if(this.words[word.term] !== undefined){
      delete this.words[word.term]
    }
  }
  // words를 업데이트
  update(word: Word){
    if(this.words[word.term] !== undefined){
      this.words[word.term] = word.def
    }
  }
}

class Word = {
  constructor(
    public term: string,
    public def: string,
  ){}
}

const bibimbap = new Word("Bibimbap", "밥에 각종 나물을 넣고 장을 넣어서 비벼 먹는 요리")

const dict = new Dict()
```

`words`에서 `[key:string]`은 `term`이 되고, `string`은 `def`가 된다.

```ts
dict.add(bibimbap);

/* 
Dict: {
  "words": {
    "Bibimbap": "밥에 각종 나물을 넣고 장을 넣어서 비벼 먹는 요리"
  }
}
*/

dict.del(bibimbap);

/* 
Dict: {
  "words": {}
} */

const bibimbapUpdate = new Word("Bibimbap", "나물 비벼먹는 요리");
dict.update(bibimbapUpdate);

/* 
Dict: {
  "words": {
    "Bibimbap": "나물 비벼먹는 요리"
  }
} */

dict.def("bibimbap");
// "밥에 각종 나물을 넣고 장을 넣어서 비벼 먹는 요리"
```

<br>

### Static

자바스크립트에 있는 기능이다.

```ts
class Dict = {
  static x = 0;
  ...
}

// 0
Dict.x
```

<br>

---

## 타입스크립트 특정 값

기존에는 타입만 지정했지만, 특정 값 이어야만 가능하도록 설정이 가능하다.

```ts
type Group = "A" | "B" | "C";

type TeamPlay = {
  name: string;
  group: Group;
};

const hxanPlayer: TeamPlay = {
  name: "hxan",
  group: "A",
};
```

group이 A, B, C중 1개여야만 가능하도록 설정이 가능하다. `number` 처럼 다른 타입도 가능하다

<br>

---

## 타입스크립트 Interfaces

type은 옵션을 설정하거나, 오브젝트의 모양을 설명하는데, 오브젝트의 모양을 설명하는 다른 방법인 `interfaces`가 있다.

```ts
interface TeamPlay {
  name: string;
  group: Group;
}
```

오로지 오브젝트의 모양을 설명하는 용도이다.

`interface`는 extends가 가능하다.

```ts
interface User {
  name: string;
}

interface Player extends User {
  os: string;
}

const hxan: Player = {
  name: "hxan",
  os: "Mac OS",
};
```

상속되어 `Player`에서도 `name`을 사용할 수 있다. 마치 `Class` 처럼  
type도 가능은 하지만 약간 다르다.

```ts
type User = {
  name: string;
};

type Player = User & {
  os: string;
};
```

하나의 인터페이스 이름으로 여러번 작성해도 타입스크립트가 알아서 합쳐준다.

```ts
interface User {
  name: string;
}
interface User {
  firstName: string;
}

const hxan: User = {
  firstName: "han"
  name: "san",
};
```

또한 추상 클래스인 `abstract class`는 생성하면, 인스턴스로 만들 수 없지만 JS에서는 `class`로 변환된다  
청사진을 만들었는데, 이를 코드로 변환시키는 것이다. 이 때 `interface`를 사용한다.

`interface`는 컴파일 하면 JS로 변경되지 않고 사라진다.

```ts
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

<br>

### interface가 클래스를 정의하는법

```ts
interface User {
  firstName: string;
  lastName: string;
  fullName(): string;
}

class Player implements User {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

`Player`가 `User`를 상속받는다는 걸 타입스크립트에게 알려주기 위해서 `implements`를 사용한다.  
`interface`를 상속하려면 `private, property`가 아닌 `public`으로 지정해주어야 한다.

return 요소를 인터페이스로 하면 `new ClassName`이 아닌, 인터페이스에 있는 요소를 입력해주면 된다.

```ts
function addUser(user: User): User {
  return {
    firstName: "han",
    lastName: "san",
    fullName: () => "xx",
  };
}
```

interface끼리 상속받을때는 `extends`를 사용하며, class에 상속 받을 때는 `implements`를 사용한다.

<br>

### interface로 함수를 만들기

```ts
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  return x + y;
};
```

add의 x,y는 `number` 가 된다. 즉 num1, num2라고 지정해도 다르게 사용해도 된다.
