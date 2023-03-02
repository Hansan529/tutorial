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
console.log("text", function);
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
var = 재선언 가능, 변수 변경 가능

let = 변할 수 있는 변수, 재선언 불가능

const = 고정 상수, 변경 불가능
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
변수 재선언 (var만 가능, const 불가)
var userName = null;  정상
let userName = null;  에러
*/
```

## #03 연산자

### 사칙연산자

+: 더하기
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

### 연결연산자

+: 연결연산자 (문자 + 숫자)

```js
let nation = "korea";
let city = "seoul";
let year = 2023;
let month = 2;

console.log(nation + city); /* koreaseoul */

// 문자 + bollean 일 경우 문자로 변경
console.log(nation + true); /* koreatrue */

// 숫자 + 문자 일 경우 숫자끼리 더하기가 된 후 연결
console.log(year + month + city); /* 2025seoul */
// 괄호를 이용해 해결
console.log(year + (month + city)); /* 20232seoul */
```

### 증감연산자

++: 1씩 증가  
--: 1씩 감소

```js
let num1 = 5;
let num2 = 10;

// num1++ 나중에 계산
num1++; /* 5 */
num1; /* 6 */
// ++num1 미리 계산
++num1; /* 6 */
```

### 대입연산자

오른쪽에 있는 결과값을 왼쪽의 연산자에 할당할 때 사용함  
 a = b : a에다 b를 넣어라  
`a += b` : a = a + b  
`a -= b` : a = a -b  
`a *= b` : a = a \* b  
`a /= b` : a = a / b  
`a %= b` : a = a % b

```js
let num1 = 10;
let num2 = 3;
let num3 = 5;

//  +=  : num1: 10
num1 = num1 + num2; /* 13 */
num1 += num2; /* 13 */

// -=  : num1: 13
num1 -= num3; /* 8 */

// *=  : num1: 8
num1 *= num2; /* 24 */

// /=  : num1: 24
num1 /= num2; /* 8 */

// %=  : num1: 8
num1 %= num2; /* 2 */
```

```js
// 숫자 변수
let count = 1;

// 테이블 변수
let myTable = "<table>";

myTable += "<tr>";
myTable += "<td>" + count + "</td>";
myTable += "<td>" + ++count + "</td>";
myTable += "<td>" + ++count + "</td>";
myTable += "</tr>";
myTable += "</table>";

document.write(myTable);
```

<table>
  <tr>
  <td style="border: 1px solid">1</td>
  <td style="border: 1px solid">2</td>
  <td style="border: 1px solid">3</td>
  </tr>
</table>

```html
<!-- 작성된 html 코드 -->
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
```

### 비교연산자

a&gt;b : a가 b보다 크냐? true, false  
a&gt;=b : a가 b보다 크거나 같냐?  
a&lt;b : a가 b보다 작으냐?  
a&lt;= : a가 b보다 작거나 같냐?  
a==b: a와 b가 같으냐? (값만 비교)  
a===b: a와 b가 같으냐? (타입 비교)  
a!=b: a와 b가 다르냐?  
a!==b: a와 b가 다르냐? (타입비교)

```js
let num1 = 10;
let str1 = "10";
let num2 = 20;

// num1이 num2보다 크냐?
num1 > num2; /* false: 크지 않음 */

// num2가 num1보다 크거나 같냐?
num2 >= num1; /* true: 크거나 같음 */

// num1이 str1과 값이 같냐?
num1 == str1; /* true: 같음*/

// num1과 str1이 타입과 값이 같냐?
num1 === str1; /* false: 다름 */

// num1과 str1의 값이 다르냐?
num1 != str1; /* false: 같음 */

// num1과 str1의 타입과 값이 다르냐?
num1 !== str1; /* true: 다름 */
```

### 논리연산자

! : 부정 반대(not)  
&& : 논리곱(and)  
 false && false ==> false 0 && 0 ==> 0  
 false && true ==> false 0 && 1 ==> 0  
 true && false ==> false 1 && 0 ==> 0  
 true && true ==> true 1 && 1 ==> 1

|| : 논리합(or)  
 false || false ==> false 0 || 0 ==> 0  
 false || true ==> true 0 || 1 ==> 1  
 true || false ==> true 1 || 0 ==> 1  
 true || true ==> true 1 || 1 ==> 1

```js
let num1 = 10;
let num2 = 5;
let num3 = 3;
let text = true;

text; // true: 1
!text; // false: 0

/* &&: AND 연산자 */
// false && false [0 && 0]
num2(5) > num1(10) && num3(3) > num1(10); // false: 0

// true && true [1 && 1]
num1(10) > num2(5) && num1(10) > num3(3); // true: 1

// true && false [1 && 0]
num1(10) > num2(5) && num3(3) > num1(10); // false: 0

// false && true [0 && 1]
num2(5) > num1(10) && num1(10) > num3(3); // false: 0

/* ||: OR 연산자 */
// false || false [0 || 0]
num2(5) > num1(10) || num3(3) > num1(10); // false: 0

// true || true [1 || 1]
num1(10) > num2(5) || num1(10) > num3(3); // true: 1

// true || false [1 || 0]
num1(10) > num2(5) || num3(3) > num1(10); // true: 1

// false || true [0 || 1]
num2(5) > num1(10) || num1(10) > num3(3); // true: 1
```

### 삼향조건연산자

조건문 ? 조건의 결과가 true일 때 실행할 문장 : 조건의 결과가 false일 때 실행 할 문장

a = 5  
b = 3

a >= b ? "b보다 크거나 같음": "b보다 크거나 같지 않음";

```js
let userAge = prompt("당신의 나이는?");
userAge >= 30 ? document.write("30 up") : document.write("30 down");

// 차비(a), 식비(b), 간식비(c) 총합(d) >= 15,000 true : false
let a = prompot("a");
let b = prompot("b");
let c = prompot("c");
let d = Number(a) + Number(b) + Number(c);

d >= 15000 ? document.write(true) : document.write(false);
```

## #04 제어문

### 조건문

조건에 따라서 프로그램의 흐름을 제어할 때 사용한다.

1. if: 비교 연산, 조건이 적은 경우에 사용한다.

- branch statment 기반 원하는 조건이 나올 때 까지 순차적으로 모든 경우를 비교한다.
- 실행을 할건지 말건지 판단

<br>

- 단일 if: 조건이 참일때만 실행된다.

```js
if(조건문){
  조건이 참일때 실행할 문장
}
```

```js
// 50보다 크면 진행하세요, 작을 경우에는 무시하세요
let userAge = prompt("당신의 나이를 입력하세요"); /* 51 */

if (userAge > 50) {
  document.write("50 이상입니다"); /* 50 이상입니다 */
}
```

- if~else: 조건이 참, 거짓일때

```js
if(조건문){
  조건이 참일때 실행할 문장;
} else {
  조건이 거짓일때 실행할 문장;
}
```

```js
// 60점 이상이면 합격, 미만이면 불합격
let score = prompt("당신의 점수를 입력하세요"); /* 70 */

if (score >= 60) {
  document.write("합격"); /* true */
} else {
  document.write("불합격");
}

// 짝수, 홀수인지 구별하기
let num = Number(prompt("숫자를 입력하세요"));

if (num % 2 == 0) {
  document.write("홀수");
} else {
  document.write("짝수");
}

// 1과목, 2과목, 3과목 점수 평균 60점 이하 불합격, 미달이 없으면서 60점 이상일 경우 합격
let num1 = Number(prompt("1과목 점수를 입력하세요"));
let num2 = Number(prompt("2과목 점수를 입력하세요"));
let num3 = Number(prompt("3과목 점수를 입력하세요"));

let avg = (num1 + num2 + num3) / 3;

if (avg < 60) {
  document.write("불합격"); /* 50, 40, 60 */
} else {
  if (num1 >= 40 && num2 >= 40 && num3 >= 40) {
    document.write("합격"); /* 100, 100, 100 */
  } else {
    document.write("불합격"); /* 20, 100, 100 */
  }
}
```

- 다중 if: 조건이 많을 경우 사용함

```js
if(조건문1){
   조건문1이 참일때 실행할 문장;
}
else if(조건2){
  조건1이 거짓이고, 조건2가 참일때 실행할 문장;
}
else if(조건3){
    조건1이 거짓이고, 조건2가 거짓이고, 조건3일때 실행할 문장;
}
else{
   조건1,조건2, 조건3을 모두 만족못했을 경우 실행할 문장;
}
```

```js
// 90~100 A, 80~89 B, 70~79 C, 60~69 D, ~59 F
let score = Number(prompt("점수를 입력하세요"));

if (score >= 90) {
  document.write("A등급");
} else if (score >= 80) {
  document.write("B등급");
} else if (score >= 70) {
  document.write("C등급");
} else if (score >= 60) {
  document.write("D등급");
} else {
  document.write("F등급");
}
```

<br>

2. switch~ case: 조건이 많은경우, 값을 체크할때 사용한다.

- jump statement 기반으로 if와 다르게 순차적으로 비교하지 않고 한번에 이동한다.
- jump 하는데 그 위치 찾기
- 어떤 코드를 실행할 것인지 판단

```js
switch(조건식){
     case 값1:
        값1을 만족할때 실행할 문장;
        break;
    case 값2 :
      값2를 만족할때 실행할 문장;
      break;
   default : 위의 조건을 만족하지 않을때 실행할 문장;
}
```

```js
// 여러 조건, 다른 답
let num = prompt("1~7 숫자");

switch (num) {
  case "1":
    console.log("빨강");
    break;
  case "2":
    console.log("주황");
    break;

  // 생략

  case "7":
    console.log("보라");
    break;
  default:
    console.log("1~7 숫자만 가능");
}

// 여러 조건, 같은 답
let browser = prompt("이용하시는 브라우저를 입력하세요");

switch (browser) {
  case "Chrome":
  case "Firfox":
  case "Safari":
  case "Opera":
    console.log(browser + "는 지원하는 브라우저입니다.");
    break;
  default:
    console.log(browser + "는 지원하지 않는 브라우저입니다");
}
```

<br>

## #05 반복문

여러번 반복하고자 할 때 사용한다.

1. for  
   for(초기값; 조건문; 증감식){  
    반복할 문장(함수);
   }

```js
// i = integer(숫자), 증감
for (i = 1; i <= 10; i++) {
  document.write(`${i} for문<br>`);
}

// 구구단
let number = Number(prompt("구구단"));
for (i = 1; i <= 9; i++) {
  document.write(`${number}*${i}=${number * i}<br>`);
}
```

```js
// 이중 for문
for (i = 2; i <= 9; i++) {
  document.write(`<h1>*** ${i}단 ***</h1>`);
  for (j = 1; j <= 9; j++) {
    document.write(`${i}*${j}=${i * j}<br>`);
  }
}

// i와 j가 1씩 증가, j가 i보다 작거나 같을 경우 반복
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write(`★`);
  }
  document.write(`<br>`);
}

// 피라미드 형식 for문
for (i = 0; i < 5; i++) {
  /* 5번 반복: <br> */
  for (j = 4; j > i; j--) {
    document.write("&nbsp");
  }
  for (j = 0; j <= i; j++) {
    document.write("*");
  }
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
```

for 문 안에서 변수 선언하기 (재선언이 불가능한데 반복하면 재선언 하는 것인데, 안되지 않을까? 확인해보자)

```js
for(let i=0; i<10; i++){
  console.log(i);
  }

// for뒤에 오는 ()안에 있는 것은 3가지 부분으로 나뉜다.
// 첫번째는 for문의 조건식에서 사용할 변수를 선언하는 let i = 0
// 두번째는 조건식인 i < 10
// 세번째는 증감문인 i++
// 위 세가지 중에서 첫번째 변수를 만드는 let i = 0 은 for 문이 실행되면 처음에 단 한번만 실행됨.
// 두번째 조건식을 확인하여 조건식의 값이 true일 경우 코드 블록 안의 console.log(i);가 실행

let i = 0;
i= i + 1;
i= i + 1;
.
.
.
```

코드블록을 실행한뒤에는 세번째 증감문을 실행한다  
위 코드에서 증감문은 i의 값을 1씩 더한뒤에 i에 재할당을 하고 있다.  
중복 선언을 하는 것이 아니라 아래 코드와 같이 진행되며 재할당을 한다고 표현한다.

    for ([initialization]; [condition]; [final-expression])
       statement

for문 순서 → initialization 변수 값 확인 → condition 조건이 true일 경우 → statment 실행 → final-expression 실행

`let i = 0` → `i < 5` (5미만일 경우 true) → `코드블럭 내용` → `i++` (증감연산자 1씩 증가)  
`i = 1` → `i < 5` → `코드블럭 내용` → `i++`  
`i = 2` → `i < 5` → `코드블럭 내용` → `i++`  
`i = 5` → `i < 5` → `for문에서 빠져나옴`

- 선택적 식 사용

```js
// 변수를 초기화하려고 initialization 블럭을 사용하지 않고, 외부에서 불러와도 된다.
let i = 0;
for (; i < 9; i++) {
  console.log(i);
}
```

```js
// condition 블럭을 사용하지 않아도 되지만 반복문 본문에 무한루프를 탈출 할 수 있는 방안을 넣어야한다.
for (let i = 0; i++){
  console.log(i);
  if (i > 3) break; /* 반복문 탈출 */
}
```

```js
// 모든 블록을 생략할 수 있다. 언젠간 참이 되도록 해야 한다.
for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

```js
// 보조제어문

// 조건을 만족하면 반복을 종료
for (i = 0; i < 10; i++) {
  if (i == 5) {
    break; /* 01234 */
  }
  document.write("i");
}

// 조건에 맞는것만 skip하고 반복문 실행
for (j = 0; j < 10; j++) {
  if (j == 5) continue; /* 012346789 */
  // if함수에서 실행할 문장이 1개일 경우 {} 오브젝트를 열지 않아도 된다.
  document.write("j");
}
```

2. while

- 실행하기 전, 조건을 확인하고 참일 경우 반복한다.

while(조건문){  
반복할 문장;  
증감식;  
}

```js
let i = 0;

while (i < 10) {
  document.write(`${i + 1}번 반복문<br>`);
  i++;
}
```

3. do~while

- 한번 실행 한 뒤, 조건을 확인하고 참일 경우 반복한다.

  초기값;  
  do {  
   &nbsp;&nbsp;실행할 문장;  
   &nbsp;&nbsp;증감식  
  } while (조건);

```js
let j = 0;

do {
  document.write(`${j}`);
  j++;
} while (j < 0);
```

4. for in

```

```

## #06 함수

자주 사용되는 명령문을 저장해놓은 것이다.

- 익명함수: 함수명이 없는 함수, 생성된 함수를 변수에 할당하여 사용한다  
  let 변수명 = function(){  
   함수표현식;  
  }

```js
// 선언적 명명함수
function a1() {
  console.log("a");
}

// 익명함수
let a2 = function () {
  console.log("b");
};
```

```js
// html
<button onclick="colorBg('red')">red</button>
<button onclick="colorBg('blue')">blue</button>
<button onclick="colorBg('yellow')">yellow</button>
<button onclick="colorBg('green')">green</button>

// js [btn-red] -> background: red
let colorBg = function (color) {
  console.log(color); /* red */
  // 아래와 같은 태그를 사용하면 더 빠른 결과를 얻을 수 있음.
  // document.getElementsByTagName("body")[0].style.backgroundColor = color;
  document.querySelector("body").style.backgroundColor = color; // 통합 태그 선택자
};
```

1. 기본함수

```js
// 선언 1
   function 함수이름(){
     실행할 문장;
   }

// 선언 2
   let 함수이름 = function(){
    실행할 문장;
   }

// 호출
함수();
```

2. 매개변수 함수

function 함수이름(매개변수){  
실행할 문장;  
}  
함수이름(값);

```js
function hi(uName, age) {
  document.write(uName, age); /* a5b10 */
}

hi("a", 5);
hi("b", 10);
```

3. 리턴
   호출한 함수로 값을 돌려주는것, 함수가 변수로 사용된다

function 함수이름(매개변수,매개변수){  
 실행할 문장;  
 return 변수;  
}

let 변수 = 함수이름(값);

```js
// 전역변수, 어디에서든 호출이 가능한 변수
// let alpha;

function ret(a, b) {
  // 지역변수 (지역 안에서만 사용 가능한 변수)
  let alpha = a + b;
  // 지역변수의 값을 함수에다가 저장한다.
  return alpha;
}

// a(10) + b(20)의 값(30)을 ret이 현재 갖고 있다.
let beta = ret(10, 20);
document.write(beta); /* 30 */
```

## #07 객체

```js
// 사용자 정의객체
// property: bland = "LG", inch = 60, flat = true,
// method: on(), off(), changeChannel(9), volumn("up")
let TV = new Object(); /* 객체 생성 */
TV.bland = "LG"; /* 속성 추가 */
TV.inch = 60; /* 속성 추가 */
TV.flat = true; /* 속성 추가 */

/* method 추가 */
TV.on = function () {
  console.log("On");
};
/* method 추가 */
TV.off = function () {
  console.log("Off");
};
/* method 추가 */
TV.changeChannel = function (num) {
  console.log(num + "channel");
};
/* method 추가 */
TV.volumn = function (upDown) {
  console.log(upDown);
};
console.log(TV.bland); /* LG */
TV.volumn(20); /* 함수 실행 (20) */
```

```js
// 객체 생성 리터럴방식
let TV = {
  bland: "LG",
  inch: 60,
  flat: true,
  on: function () {
    console.log("On");
  },
  off: function () {
    console.log("Off");
  },
  changeChannel: function (num) {
    console.log(num);
  },
  volumn: function (upDown) {
    console.log(upDown);
  },
};
```

개별적으로 생성해서 사용해도 되지만, 기본적으로 JS 안에 내장되어 있는 객체가 있다.

### 내장객체

```js
// Date
let now = new Date(); /* 20**-**-** */
let year = now.getFullYear(); /* 20** */
let month = now.getMonth(); /* 0~11 1월~12월 */
let date = now.getDate(); /* 0~31 */
let day = now.getDay(); /* 0~6 일~토 */
let hours = now.getHours(); /* 0~23 */
let minutes = now.getMinutes(); /* 0~59 */
let seconds = now.getSeconds(); /* 0~59 */
```

1s => 1000ms

```js
let dDay = new Date(2023, 11, 25);

let diff = (dDay - now) / (24 * 60 * 60 * 1000);
```

24: 시간  
60: 분  
60: 초  
1000: 1초

<br>

### 수학객체 (Math)

```js
// 변수
let num1 = -5;
let num2 = 3;

// 절대값 (Math.abs)
Math.abs(num1); /* 5 */

// 최대값 (Math.max)
Math.max(num1, num2, 50, 100); /* 100 */

// 최소값 (Math.min)
Math.min(num1, num2, 50, 100); /* -5 */

// 거듭제곱 (Math.pow)
Math.pow(num2, 4); /* 3^4 = 81 */

// 제곱근 (Math.sqrt)
Math.sqrt(9); /* √9 */

// 랜덤 (Math.random)
Math.random(); /* 0.0~ 0.99 */

// 반올림 (Math.round)
Math.round(10.5); /* 11 */

// 올림 (Math.ceil)
Math.ceil(10.1); /* 11 */

// 내림 (Math.floor)
Math.floor(11.8); /* 11 */

// 파이 (Math.PI)
Math.PI; /* 3.141592653589793 */
```

### 숫자객체 (Number)

```js
let num1 = "10.123";
let num2 = "3.141529";
let num3 = 13.2421;
let num4 = "char10.123";

// 문자열 -> 숫자
num1 + 20; /* 10.12320 */
Number(num1 + 20); /* 30.123 */

// 정수 (parseInt)
parseInt(num1); /* 10 */

// 실수 (paseFloat)
parseFloat(num1) + 10; /* 20.123 */

// 소수점 자릿수
num3.toFixed(2); /* 13.24 */
num3.toPrecision(5); /* 13.242 */

// NaN (Not A Number) 숫자가 아님
isNaN(num1); /* false */
isNaN(num3); /* false */
isNaN(num4); /* true */
```

### 배열객체 (Array)

```js
// 배열 각각 지정하기
let fruit = new Array();
fruit[0] = "사과";
fruit[1] = "배";
fruit[2] = "샤인머스캣";
fruit[3] = "포도";
fruit; /* (4) ['사과', '배', '샤인머스캣', '포도'] */

// 배열 한번에 지정하기
let fruit2 = new Array("홍시", "키위", "망고", "파인애플");
fruit2; /* (4) ['홍시', '키위', '망고', '파인애플'] */

// 내장객체를 사용하지 않고 배열 생성
let fruit3 = ["사과", "배", "샤인머스캣", "포도"];
fruit3; /* (4) ['사과', '배', '샤인머스캣', '포도'] */

// n번째 배열 내용 확인하기
fruit[0]; /* 사과 */
```

메서드와 속성

```js
let fruit = ["사과", "배", "샤인머스캣", "포도"];
let rain = ["우산", "우비", "장우산"];

// 마지막에 데이터 추가
fruit.push("딸기"); /* (5) ["사과", "배", "샤인머스캣", "포도", "딸기"] */

// 마지막 데이터 제거
rain.pop(); /* (2) ['우산', '우비'] */

// 앞에 데이터 추가
fruit.unshift("딸기"); /* (5) ['딸기', '사과', '배', '샤인머스캣', '포도'] */

// 앞에 데이터 제거
fruit.shift(); /* (3) ['배', '샤인머스캣', '포도'] */

// 중간에 데이터 추가
fruit.splice(2, 0, "딸기", "수박", "멜론");
/* (7) [ '사과', '배', '딸기', '수박', '멜론', '샤인머스캣', '포도' ] */

// 중간에 데이터 제거
fruit.splice(2, 2); /* (2) [ '사과', '배' ] */

// 오름차순 정렬
fruit.sort();

// 내림차순 정렬
fruit.reverse();

// 배열 하나로 합치기
let alpha = fruit.concat(rain);
/* (7) [ '사과', '배', '샤인머스캣', '포도', '우산', '우비', '장우산' ] */

// 배열의 데이터를 특수문자로 연결 (배열 해제, 문자)
let join = rain.join("*"); /* 우비*우비*장우산 */

// 배열의 개수 길이
fruit.length; /* 4 */
```

내장객체를 이용한 종합예제

```js
let now = new Date(); /* 현재 날짜 값 */
let year = now.getFullYear(); /* 현재 년도 */
let month = now.getMonth(); /* 이번 달 */

let thisDay = new Date(year, month, 1); /* 이번 달의 1일 */
let thisWeek = thisDay.getDay(); /* 1일의 요일 값 */

/* 1~12월 배치도 */
let lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 반복문에 이용할 변수
let week = ["일", "월", "화", "수", "목", "금", "토"]; /* 요일 배열 */
let num = 1; /* 1일 */

// 달력 row 수 구하기
/* [월]의 줄 수: 소수점 올림((마지막 일[월] + 시작요일) / 일주일) */
let row = Math.ceil((lastDate[month] + thisWeek) / 7);

let cal = "<table>";
cal += "<tr>";
/* column 방향으로 7줄 */
for (i = 0; i < 7; i++) {
  // week 배열의 i번째, 즉 0~7: 일~토
  cal += `<th style="border: 1px solid">${week[i]}</th>`;
}
cal += "</tr>";

/* row 방향으로 row 줄 */
for (i = 0; i < row; i++) {
  cal += "<tr>";

  /* column 방향으로 7줄 (일주일) */
  for (j = 0; j < 7; j++) {
    if ((i == 0 && j < thisWeek) || num > lastDate[month]) {
      //1번 조건: 1번 줄 (i==0)에 시작요일보다 작은 경우 아래를 실행 (시작 요일 찾아가기)
      //2번 조건: if로 인해서 num 값이 ++되어 커지는데, 이번달의 마지막 날보다 커지면 아래 실행
      cal += "<td></td>";
    } else {
      // j가 7이 될 때 까지 num을 1씩 증가
      cal += `<td style="border: 1px solid">${num++}</td>`;
    }
  }
  cal += "</tr>";
}
cal += "</table>";
```

### 문자열객체

```js
// 선언 방법
// let str = new String("text");
let str = "random text";

console.log(str);

// 문자 추출하기: charAt(위치)
console.log(str.charAt(3)); /* d */

// 문자열 추출하기: substr(시작위치, 개수)
console.log(str.substr(4, 2)); /* om  */
// substring(시작위치, [끝위치 - 1])
console.log(str.substring(7, 11)); /* text */

// 특정 문자의 위치 찾기: indexOf("문자")
// 대부분 문자열을 찾을 때는 indexOf함수를 사용한다.
console.log(str.indexOf("d")); /* 3 */
console.log(str.indexOf("b")); /* 없는 문자는 -1 */
// [정규식] 특정 문자의 위치 찾기: search("문자")
// 시작 위치를 지정할 수는 없지만 정규식을 사용하여 문자열을 찾을 수 있다.
console.log(str.search("x")); /* 9 */
console.log(str.search("z")); /* 없는 문자는 -1 */

// 대소문자: method()
console.log(str.toUpperCase()); /* RANDOM TEXT */
console.log(str.toLowerCase()); /* random text */

// 문자열 길이 속성: length
console.log(str.length); /* 11 */

// 코드값: charCodeAt(코드) A~Z: 65~90  a~z: 97~122
console.log(str.charCodeAt(0)); /* 114 (r) */

// 코드값으로 문자 찾기: fromCharCode(code)
console.log(String.fromCharCode(114)); /* r */

// 문자열 분리: split("문자")
let sp = str.split(" "); /* ['random', 'text'] */

// 문자열 합치기: concat(문자열)
console.log(str.concat(" text")); /* random text text */

// 문자열 앞 공백 제거: trim()
console.log(str.trim());

// 문자열 반복: repeeat(정수)
let txt = "txt ";
console.log(`random ${txt.repeat(3)}`); /* random txt txt txt */

// 문자열 대체: replace(변경할 문자, 문자) 대소문자 구분
console.log(str.replace("random", "new")); /* new text */
```

<br>

### 브라우저 객체

window는 생략 가능하다

```js
// open: url을 popup 형식으로 열기: 현재 트렌드는 미사용, div(레이어)로 대체하여 사용함
window.open("url", "popup", "width=500, height: 400, top=100, left=200");

// close: open한 것을 닫음
window.close();

// alert: 확인 창 / 창이 나올 경우 다른 코드는 실행을 멈춤
window.alert();

// prompt: 데이터를 입력하는 창
window.prompt();

// confirm: 확인/취소 버튼이 있는 창
window.confirm();

// setinterval: 일정 시간마다 반복
setInterval(console.log("반복"), 1000); /* 1s */

// clearInterval: 반복 취소
clearInterval(변수);

// setTimeout: 일정 시간 이후 실행
setTimeout("console.log('text')", 3000); /* 3s */
```

<br>

### 스크린 객체

스크린에 대한 정보들을 확인 할 수 있다.

```js
// 스크린의 너비, 높이값
document.write(`width: ${screen.width}`);
document.write(`height: ${screen.height}`);

// 사용할 수 있는 너비, 높이값
document.write(`availWidth: ${screen.availWidth}`);
document.write(`availHeight: ${screen.availHeight}`);

// 컬러 수
document.write(`color: ${screen.colorDepth}`); /* 24 */
```

<br>

### Location

브라우저의 주소를 변경하거나 얻어올 때 사용된다

```js
// 주소
location.href; /* http://127.0.0.1:8080/ */

// 호스트이름
location.hostname; /* 127.0.0.1 */
// 호스트
location.host; /* 127.0.0.1:8080 */
// 프로토콜
location.protocol; /* http: */

// 새로고침
location.reload();

location.href = "http://naver.com"; /* 링크 연결 */
location.assign("http://www.google.com"); /* 링크 변경 */
```

<br>

### Window

```js
window.innerWidth; /* 개발자 도구 범위 미포함 너비 */
window.outerWidth; /* 개발자 도구 범위 포함 너비 */

window.innerHeight; /* 브라우저 주소창 미포함 높이 */
window.outerHeight; /* 브라우저 주소창 포함 높이 */
```

<br>

### History

```js
history.back(); /* 이전 페이지로 이동 */
history.forward(); /* 방문했던 페이지로 이동 */
```

<br>

### Navigator

```js
/* 현재는 사용하지 않는 코드 */
// 방문자의 브라우저 코드명을 알아낼 때
navigator.appCodeName; /* Mozila */
// 브라우저의 이름 알아내기
navigator.appName; /* Netscape */
// 브라우저의 버전 알아내기
navigator.appVersion; /* 5.0 */
  ↓
// 모두 확인하기
navigator.userAgent;

// language 방문자의 사용 언어
navigator.language; /* ko-KR */
```

```js
// 위치값 찾기
navigator.geolocation.getCurrentPosition(callback, error);

function callback(position) {
  const latitude = position.coords.latitude; /* 위도 */
  const longitude = position.coords.longitude; /* 경도 */
  location.href = `https://www.openstreetmap.org/#map=17/${latitude}/${longitude}`;
}

function error() {
  document.write("error");
}
```

<br>

### DOM 객체

```js
// 태그 생성
let hTitle = document.createElement("tag"); /* <tag></tag> */

// 태그 내용물
let hText = document.createTextNode("dom text");

// 태그 내용 삽입
hTitle.appendChild(hText);

// body에 적용하기
document.body.appendChild(hTitle);
```

```js
// 이미지 태그 생성
let img = document.createElement("img");

// 속성값 넣기
/* (구버전) */
img.src = "url";
img.alt = "text";

/* (신버전) */
img.setAttribute("src", "url");
img.setAttribute("alt", "text");

// body에 적용하기
document.body.appendChild(img);
```

`window.onload = function(){}` head 태그에 스크립트를 작성할 때 사용하는 속성

html를 모두 로드했다면 function을 실행한다.

<br>

- innerHTML, innerText

```js
let hTitle = document.createElement("h1");

// let text = document.createTextNode("text");
// hTitle.appendChild(text);

hTitle.innerText = "text";

document.body.append(hTitle); /* text */
```

append는 추가하지만 innerHTML의 경우 덮어씌운다.

추가로 innerHTML은 태그값 모두를 불러오지만 innerText의 경우는 텍스트만 불러온다.

innerHTML - `안녕하세요 <span>태그</span>`  
innerText - `안녕하세요 태그`

<br>

- dom 선택자

1. tag

```js
let hTitle = document.getElementsByTagName("h1")[0]; /* 0번째 tag */
hTitle.style.color = "green";
```

2. class

```js
let cText =
  document.getElementsByClassName("cClass")[0]; /* 0번째 cClass 태그 */
cText.style.color = "red";
// cText.stlye["background-color"] = "red"; /* css 형식 */

let cTextQuery = document.querySelectorAll(".cClass"); /* 모든 cClass 클래스 */

for (i = 0; i < cTextQuery.length; i++) {
  cTextQuery[i].style["text-decoration"] = "underline";
}
```

3. id

```js
let cId = document.getElementById("cId"); /* cId라는 ID */
cId.style.color = "blue";
```

4. form

```js
let cForm = document.querySelector("#cForm"); /* cForm라는 ID를 불러옴  */
cForm.style["background-color"] = "skyblue";
```

getElementsByTagName, getElemetsByClassName, getElemetById를 모두 합친

`querySelector`라는 method가 있다.

<br>

- 형재 선택자

```js
// 바로 다음에 오는 형제를 선택
nextSibling; /* 태그 옆에 엔터를 쳤을 경우 #text로 나온다. */
nextElementSibling; /* 선택된 태그 다음 태그가 나온다. */

<h1></h1>
<h2></h2>

let title = document.querySelector("h1");
let nextSibling = title.nextSibling; /* #text */
let nextElementSibling = title.nextElementSibling; /* <h2></h2> */

nextElementSibling.classList.add("active"); /* <h2 class="active"></h2> */
```

```js
// 앞에 오는 형제를 선택
previousSibling; /* 태그 앞에 있는 것을 선택한다. */
previousElementSibling; /* 선택된 태그 앞에 있는 태그를 선택한다 */

<h1></h1>
<h2></h2>

let title = documnt.querySelector("h2");
let previousSibling = title.previousSibibling;
let previousElementSibling = title.previousElementSibling; /* <h1></h1> */

previousElementSibling.classList.add("active"); /* <h1 class="active"></h1> */
```

```js
// 자식 선택자
fristChild, firstElementChild; /* 첫번째 자식 */
lastChild, lastElementChild; /* 마지막 자식 */
children, childNodes; /* 자식들 */
childElementCount; /* 자식요소 수 */
```

```js
// class 관련 기본 속성
classList.add;
classList.remove;
classList.toggle;


<div class="box"></div>
<button class="add"></button>
<button class="remove"></button>
<button class="toggle"></button>

let box = document.querySelector(".box");
let classAdd = document.querySelector(".add");
let classRemove = document.querySelector(".remove");
let classToggle = document.querySelector(".toggle");

classAdd.onlcik = function(){
  box.classList.add("bg"); /* Add btn 클릭하면 <div class="box bg"> */
}
classRemove.onclick = function(){
  box.classList.remove("bg"); /* <div class="box"> */
}
classToggle.onclick = function(){
  box.classList.toggle("bg"); /* click하면 class="bg", 있는 상태에서 하면 class="" */
}
```

<br>

```js
//  공통 예제
<ul class="menu">
  <li>
    <a href="#">list1</a>
  </li>
  <li>
    <a href="#">list2</a>
  </li>
  <li>
    <a href="#">list3</a>
  </li>
  <li>
    <a href="#">list4</a>
  </li>
  <li>
    <a href="#">list5</a>
  </li>
</ul>;

let list = document.querySelector(".menu");
```

```js
// firstChild
let first = list.firstElementChild; /* 첫번째 자식 */
first.classList.add("bg"); /* <li class="bg"><a href="#"></a></li> */

// lastChild
let last = list.lastElementChild; /* 마지막 자식 */
first.classList.add("bg2"); /* <li class="bg2"><a href="#"></a></li> */
```

```js
// children
let child = list.children; /* 배열 */
child[1].classList.add("border"); /* <li class="border"><a href="#"></a></li> */

let nav = document.querySelector(".menu>li>a");
for (i = 0; i < nav.length; i++) {
  nav[i].classList.add("border"); /* 모든 li > a 에게 border class Add */
}
```

<br>

- 부모선택자

```js
parentNode

<div>
  부모<h1 class="me">자식</h1>
</div>;

let p = document.querySelector(".me");
let parent = p.parentNode;
parent.classList.add("bg"); /* <div class="bg"></div> */
```

<br>

## #08 이벤트

1. 태그 object에 이벤트 적용  
   `<태그 이벤트종류="자바스크립트코드;">`

2. 태그 object에 이름을 준 후 스크립트에서 적용

```js
<태그 id="아이디명">
<script>
let 변수명 = document.getElementById("아이디명");
변수명.이벤트종류 = function(){
  스크립트 코드
}
</script>
```

3. 이벤트 리스너로 적용

- addEventListener
- removeEventListener
- hasEventListener

`변수명.addEventListener("이벤트종류", function(e) {})`

```html
<button>btn</button>;
```

```js
function fc() {
  let val = document.querySelector("body");
  val.style["background-color"] = "#000";
}

let btn = document.querySelector("button");
btn.addEventListener("click", fc);
```

btn을 클릭하면 body의 배경색이 #000 으로 변경된다.

<br>

이벤트 목록

리스너 이벤트로 사용할 때에는 앞에 on을 생략하고 작성한다. 그 외의 경우에는 on을 같이 작성해야한다.

e 매개변수에는 많은 정보를 나타내는데 대표적인 정보만 작성함

- e.type : 이벤트 종류  
  e.target : 이벤트를 준 대상  
  e.clientX : X 좌표  
  e.clientY : Y 좌표  
  e.keyCode : 키보드의 코드값

```js
// 마우스 이벤트
click; /* 클릭하면 */
dbclick; /* 더블클릭하면 */
mouseover; /* 마우스를 올려두면 */
mouseout; /* 마우스가 벗어나면 */
mousedown; /* 클릭되는 동안 */
mouseup; /* 클릭이 해제되면 */
mousemove; /* 마우스가 움직이면 */
contextmenu; /* 우클릭하면 */

// 키보드 이벤트
keydown; /* 키를 누를 때 */
keyup; /* 키를 놓을 때 */
keypress; /* deprecated 권장하지 않음 */

// 포커스 이벤트
focus; /* 선택한 요소에 포커스가 들어가면 */
blur; /* 선택한 요소에서 포커스가 벗어나면 */

// 기타 이벤트
load; /* 선택한 요쇼의 하위요소들이 모두 불려지면 */
change; /* 선택한 요소의 값이 변하면 */
reset; /* reset 버튼이 클릭되면 */
submit; /* 전송 버튼이 클릭되면 */
```
