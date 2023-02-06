//^ pt02 - 변수
let pt02UserName = "홍길동";
let pt02UserAge = 18;

let pt02Gender = true;

let pt02Hobby;

pt02UserName = null;

//^ pt03 - 사칙연산자
let pt03Num1 = 10,
  pt03Num2 = 3,
  pt03Num3 = 5;

let pt03Result;

pt03Result = pt03Num1 + pt03Num2 + pt03Num3;

pt03Result = pt03Num1 - pt03Num2 - pt03Num3;

pt03Num1 = pt03Num1 * pt03Num2;

pt03Result = pt03Num1 / pt03Num3;

pt03Result = pt03Num1 % 7;

//^ pt04 - 연결연산자
let pt04Nation = "korea";
let pt04City = "seoul";
let pt04Year = 2023;
let pt04Month = 2;

//^ pt05 - 증감연산자
let pt05Num1 = 5;
let pt05Num2 = 10;

//^ pt06 - 대입연산자
let pt06Num1 = 10;
let pt06Num2 = 3;
let pt06Num3 = 5;

//^ pt07 - table
let pt07Count = 1;
let pt07MyTable = '<table style="border: 1px solid black">';

pt07MyTable += "<tr>";
pt07MyTable += "<td>" + pt07Count + "</td>";
pt07MyTable += "<td>" + ++pt07Count + "</td>";
pt07MyTable += "<td>" + ++pt07Count + "</td>";
pt07MyTable += "</tr>";
pt07MyTable += "</table>";

// document.write(pt07MyTable);

//^ pt08 - table-2
let pt08Day = "일";
let pt08MyTable = '<table style="border: 1px solid">';

pt08MyTable += "<tr>";
pt08MyTable += '<th style="border: 1px solid">' + pt08Day + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "월" + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "화" + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "수" + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "목" + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "금" + "<th>";
pt08MyTable += '<th style="border: 1px solid">' + "토" + "<th>";
pt08MyTable += "</tr>";
pt08MyTable += "</table>";

document.write(pt08MyTable);
