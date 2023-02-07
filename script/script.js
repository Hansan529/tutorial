//^ pt2 - 변수
let pt2userName = "홍길동";
let pt2userAge = 18;

let pt2gender = true;

let pt2hobby;

pt2userName = null;

//^ pt3 - 사칙연산자
let pt3num1 = 10,
  pt3num2 = 3,
  pt3num3 = 5;

let pt3result;

pt3result = pt3num1 + pt3num2 + pt3num3;

pt3result = pt3num1 - pt3num2 - pt3num3;

pt3num1 = pt3num1 * pt3num2;

pt3result = pt3num1 / pt3num3;

pt3result = pt3num1 % 7;

//^ pt4 - 연결연산자
let pt4nation = "korea";
let pt4city = "seoul";
let pt4year = 2023;
let pt4month = 2;

//^ pt5 - 증감연산자
let pt5num1 = 5;
let pt5num2 = 10;

//^ pt6 - 대입연산자
let pt6num1 = 10;
let pt6num2 = 3;
let pt6Num3 = 5;

//^ pt7 - table
let pt7count = 1;
let pt7myTable = '<table style="border: 1px solid black">';

pt7myTable += "<tr>";
pt7myTable += "<td>" + pt7count + "</td>";
pt7myTable += "<td>" + ++pt7count + "</td>";
pt7myTable += "<td>" + ++pt7count + "</td>";
pt7myTable += "</tr>";
pt7myTable += "</table>";

// document.write(pt7myTable);

//^ pt8 - table-2
let pt8day = "일";
let pt8myTable = '<table style="border: 1px solid">';

pt8myTable += "<tr>";
pt8myTable += '<th style="border: 1px solid">' + pt8day + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "월" + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "화" + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "수" + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "목" + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "금" + "<th>";
pt8myTable += '<th style="border: 1px solid">' + "토" + "<th>";
pt8myTable += "</tr>";
pt8myTable += "</table>";

// document.write(pt8myTable);

//^ pt9 - 비교연산자
let pt9num1 = 10;
let pt9str1 = "10";
let pt9num2 = 20;

//^ pt10 - 논리연산자
let pt10num1 = 10;
let pt10num2 = 5,
  pt10num3 = 3;
let pt10text = true;

//^ pt11 - 삼향조건연산자
let pt11a = 20;
if (pt11a < 20) {
  true;
} else if (pt11a > 50) {
  ("...");
} else {
  false;
}
//^ pt12 - 2
let pt12tag = '<input id="pt12input" type="number" />';
document.write(pt12tag);

let pt12userAge = prompt("나이", "");
