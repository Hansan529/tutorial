# Javascript

script 사용 방법

1. &lt;HEAD&gt; 안에 &lt;script&gt;&lt;/script&gt;
2. &lt;body&gt; 안에 &lt;script&gt;&lt;/script&gt;
3. &lt;body&gt; 안에 &lt;script src="경로"&gt;&lt;/script&gt;

<br>

#### 기본 코드

```js
// 작업 화면에 () 추가
document.write("text");

// 작업 중지 창 - 해당 경고창이 닫히기 전에는 그 뒤에 있는 코드를 실행하지 않음
window.alert("text");

// 콘솔창에 결과 값 도출하기
console.log("text");
console.log(function);
console.log(function, "text");
```

## #02 Variable (변수)

- 변수: 변할 수 있는 데이터를 저장하는 공간

변수 선언

1. var 이름
2. let 이름
3. const 이름

기존에는 1번밖에 없지만 ES6에서 2,3 번이 추가되었고, var를 세분화한 것이다.

```
var = 재할당 가능, 변수 변경 가능

let = 새롭게 정의가 가능한 변수, 재할당 불가능

const = 새롭게 정의가 불가능한 변수 (고정)
```

```js
// text, number
let userName = "홍길동";
let userAge = 18;

// Boolean
let gender = true;

// undefined
let hobby;

// null
userName = null;

/* 
변수 재할당 (var만 가능, const 불가)
var userName = null;  정상
let userName = null;  에러
*/
```

## #03 연산자

+: 더하기 (하나가 문자일 경우 연결연산자로 변경)  
-: 빼기  
\*: 곱하기  
/: 나누기  
%: 나머지

```js
// 숫자 변수
let num1 = 10,
  num2 = 3,
  num3 = 5;

// 결과 변수
let result;

// 더하기 연산자
result = num1 + num2 + num3; /* 18 */

// 빼기 연산자 - (재선언이기에 더하기 연산자 값은 해당 없음)
result = num1 - num2 - num3; /* 2 */

// 곱하기 연산자
num1 = num1 * num2; /* 30 */

// 나누기 연산자
result = num1 / num3; /* 6 */

// 나머지 연산자
result = num1 % 7; /* 30/7 = 2 */
```
