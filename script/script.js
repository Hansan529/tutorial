//^ pt2 - 변수
// let pt2userName = "홍길동";
// let pt2userAge = 18;

// let pt2gender = true;

// let pt2hobby;

// pt2userName = null;

//^ pt3 - 사칙연산자
// let pt3num1 = 10,
//   pt3num2 = 3,
//   pt3num3 = 5;

// let pt3result;

// pt3result = pt3num1 + pt3num2 + pt3num3;

// pt3result = pt3num1 - pt3num2 - pt3num3;

// pt3num1 = pt3num1 * pt3num2;

// pt3result = pt3num1 / pt3num3;

// pt3result = pt3num1 % 7;

//^ pt4 - 연결연산자
// let pt4nation = "korea";
// let pt4city = "seoul";
// let pt4year = 2023;
// let pt4month = 2;

//^ pt5 - 증감연산자
// let pt5num1 = 5;
// let pt5num2 = 10;

//^ pt6 - 대입연산자
// let pt6num1 = 10;
// let pt6num2 = 3;
// let pt6Num3 = 5;

//^ pt7 - table
// let pt7count = 1;
// let pt7myTable = '<table style="border: 1px solid black">';

// pt7myTable += "<tr>";
// pt7myTable += "<td>" + pt7count + "</td>";
// pt7myTable += "<td>" + ++pt7count + "</td>";
// pt7myTable += "<td>" + ++pt7count + "</td>";
// pt7myTable += "</tr>";
// pt7myTable += "</table>";

// document.write(pt7myTable);

//^ pt8 - table-2
// let pt8day = "일";
// let pt8myTable = '<table style="border: 1px solid">';

// pt8myTable += "<tr>";
// pt8myTable += '<th style="border: 1px solid">' + pt8day + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "월" + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "화" + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "수" + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "목" + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "금" + "<th>";
// pt8myTable += '<th style="border: 1px solid">' + "토" + "<th>";
// pt8myTable += "</tr>";
// pt8myTable += "</table>";

// document.write(pt8myTable);

//^ pt9 - 비교연산자
// let pt9num1 = 10;
// let pt9str1 = "10";
// let pt9num2 = 20;

//^ pt10 - 논리연산자
// let pt10num1 = 10;
// let pt10num2 = 5,
//   pt10num3 = 3;
// let pt10text = true;

//^ pt11 - 삼향조건연산자
//^ pt12 - 2
// let pt12userAge = prompt("나이");
// pt12userAge >= 30 ? document.write("30 up") : document.write("30 down");
//^ pt13 - 3
// let a = prompt("a");
// let b = prompt("b");
// let c = prompt("c");
// let d = Number(a) + Number(b) + Number(c);
// d >= 15000 ? document.write(true) : document.write(false);
//^ pt14 - 4
/* let pt14a = Number(prompt(""));
let pt14b = Number(prompt(""));
let pt14c = (pt14a - 100) * 0.9 + -5;
let pt14d = pt14c - 5 <= pt14b <= pt14c + 5;
pt14d >= true ? console.log("정상") : console.log("노력"); */
//^ pt15 조건문
// let num = prompt("1~7 숫자");

// switch (num) {
//   case "1":
//     console.log("빨강");
//     break;
//   case "2":
//     console.log("주황");
//     break;
//   case "3":
//     console.log("노랑");
//     break;
//   case "4":
//     console.log("초록");
//     break;
//   case "5":
//     console.log("파랑");
//     break;
//   case "6":
//     console.log("남색");
//     break;
//   case "7":
//     console.log("보라");
//     break;
//   default:
//     console.log("1~7 숫자만 가능");
// }
//^ pt16 switch case
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let monthArray = new Array(
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일"
// );
// let date = now.getDate();
// let day = now.getDay();
//^ pt17 - 2
// let pt17a = prompt(
//   "당신이 사용하는 브라우저",
//   "chrome, firefox, safari, opera 저희가 지원하는 서비스입니다."
// );

// switch (pt17a) {
//   case "chrome":
//   case "firefox":
//   case "safari":
//   case "opera":
//     console.log(pt17a + "는 저희가 지원하는 서비스입니다");
//     break;
//   default:
//     console.log(pt17a + "는 지원하지 않는 브라우저입니다");
// }
//^ pt18 - if
// let userAge = prompt("당신의 나이를 입력하세요");

// if (userAge > 50) {
//   document.write("50 이상입니다");
// }
//^ pt19 - if else
// let score = prompt("당신의 점수를 입력하세요");

// if (score >= 60) {
//   document.write("합격");
// } else {
//   document.write("불합격");
// }
//^ pt20 - if else 짝수, 홀수
// let num = Number(prompt("숫자를 입력하세요"));

// if (num % 2 == 0) {
//   document.write("홀수");
// } else {
//   document.write("짝수");
// }
//^ pt21 - 2
// let num1 = Number(prompt("1과목 점수를 입력하세요"));
// let num2 = Number(prompt("2과목 점수를 입력하세요"));
// let num3 = Number(prompt("3과목 점수를 입력하세요"));

// let avg = (num1 + num2 + num3) / 3;

// if (avg < 60) {
//   document.write("불합격");
// } else {
//   if (num1 >= 40 && num2 >= 40 && num3 >= 40) {
//     document.write("합격");
//   } else {
//     document.write("불합격");
//   }
// }
//^ pt22 - 3
// let score = Number(prompt("점수를 입력하세요"));

// if (score >= 90) {
//   document.write("A등급");
// } else if (score >= 80) {
//   document.write("B등급");
// } else if (score >= 70) {
//   document.write("C등급");
// } else if (score >= 60) {
//   document.write("D등급");
// } else {
//   document.write("F등급");
// }
//^ pt23 - 반복문
// for (i = 1; i <= 10; i++) {
//   document.write(`${i} for문<br>`);
// }
//^ pt24 - 2
// for (i = 1; i <= 9; i++) {
//   document.write(`3*${i}=${3 * i}<br>`);
// }
//^ pt25 - 3
// let number = Number(prompt("구구단"));

// for (i = 1; i <= 9; i++) {
//   document.write(`${number}*${i}=${number * i}<br>`);
// }
//^ pt26 - 4
// for (i = 2; i <= 9; i++) {
//   document.write(`<h1>*** ${i}단 ***</h1>`);
//   for (j = 1; j <= 9; j++) {
//     document.write(`${i}*${j}=${i * j}<br>`);
//   }
// }
//^ pt27 - 5
// for (i = 1; i <= 5; ++i) {
//   for (j = 1; j <= 5; j++) {
//     document.write(`★`);
//   }
//   document.write(`<br>`);
// }
//^ pt28 - 6
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(`★`);
//   }
//   document.write(`<br>`);
// }
//^ pt29 - 7
// for (i = 1; i <= 5; i++) {
//   for (j = 5; j >= i; j--) {
//     document.write(`★`);
//   }
//   document.write(`<br>`);
// }
//^ pt30 - 8
// for (i = 0; i < 5; i++) {
//   for (j = 4; j > i; j--) {
//     document.write("&nbsp");
//   }
//   for (j = 0; j <= i; j++) {
//     document.write("*");
//   }
//   for (j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
//^ pt31 - 9
// let num1 = 1;
// let cal = "<table>";
// for (i = 0; i < 5; i++) {
//   cal += "<tr>";
//   for (j = 0; j < 7; j++) {
//     cal += `<td style='border: 1px solid'>${num1++}</td>`;
//   }
//   cal += `</tr>`;
// }
// cal += "</table>";
// document.write(cal);
//^ pt32 - while do~while
// let i = 0;

// while (i < 0) {
//   document.write(`${i + 1}번 반복문<br>`);
//   i++;
// }
// let j = 0;
// do {
//   document.write(`${j}`);
//   j++;
// } while (j < 0);
//^ pt33 - 보조제어문 break & continue
for (i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  document.write(i);
}
document.write("<br>");
for (j = 0; j < 10; j++) {
  if (j == 5) {
    continue;
  }
  document.write(j);
}
