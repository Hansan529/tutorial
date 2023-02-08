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

- if~else: 조건이 참, 거짓일때

```js
if(조건문){
  조건이 참일때 실행할 문장;
} else {
  조건이 거짓일때 실행할 문장;
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
