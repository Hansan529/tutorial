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
// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   document.write(i);
// }
// document.write("<br>");
// for (j = 0; j < 10; j++) {
//   if (j == 5) {
//     continue;
//   }
//   document.write(j);
// }
//^ pt34 - 함수 function
// function hi() {
//   document.write("hi");
// }

// hi();
//^ pt35 - 매개변수
// function hi(uName, age) {
//   document.write(uName, age);
// }

// hi("a", 5);
// hi("b", 10);
//^ pt36 - return
// let alpha;
// function ret(a, b) {
//   let alpha = a + b;
//   return alpha;
// }
// let beta = ret(10, 20);
// document.write(beta);
//^ pt37 - 익명함수
// function a1() {
//   console.log("a");
// }

// let a2 = function () {
//   console.log("b");
// };
//^ pt38 - 예제
// document.write(`<button onclick="colorBg('red')">red</button>`);
// let colorBg = function (color) {
//   console.log(color);
//   document.querySelector("body").style.backgroundColor = color;
// };
//^ pt39 - 객체
// let TV = new Object();
// TV.bland = "LG";
// TV.inch = 60;
// TV.flat = true;
// TV.on = function () {
//   console.log("On");
// };
// TV.off = function () {
//   console.log("Off");
// };
// TV.changeChannel = function (num) {
//   console.log(num + "channel");
// };
// TV.volumn = function (upDown) {
//   console.log(upDown);
// };
// console.log(TV.bland);
// TV.volumn(20);
//^ pt40 - 객체 리터럴
// let TV = {
//   bland: "LG",
//   inch: 60,
//   flat: true,
//   on: function () {
//     console.log("On");
//   },
//   off: function () {
//     console.log("Off");
//   },
//   changeChannel: function (num) {
//     console.log(num);
//   },
//   volumn: function (upDown) {
//     console.log(upDown);
//   },
// };
//^ pt41 - 내장객체
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let date = now.getDate();
// let day = now.getDay();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();
//^ pt42 - 2
// let dDay = new Date(2023, 04, 26);
// let now = new Date();
// let diff = (dDay - now) / (24*60*60*1000);
//^ pt43 - day night
// let today = new Date();
// let hours = today.getHours();
// if (hours >= 7 && hours <= 18) {
//   document.querySelector("body").style.backgroundImage =
//     "url(./images/day.jpeg)";
// } else {
//   document.querySelector("body").style.backgroundImage =
//     "url(./images/night.jpeg)";
// }
//^ pt44 - Math
// let num1 = -5;
// let num2 = 3;
// document.write(Math.abs(num1));
// document.write(Math.max(num1, num2, 50, 100));
// document.write(Math.min(num1, num2, 50, 100));
// document.write(Math.pow(num2, 4));
// document.write(Math.sqrt(9));
// document.write(Math.random()*100);
// document.write(Math.round(10.5));
// document.write(Math.ceil(10.1));
// document.write(Math.floor(11.8));
// document.write(Math.PI);
//^ pt45 - 2
// let gameNum = prompt("가위, 바위, 보");

// switch (gameNum) {
//   case "가위":
//     gameNum = 1;
//     break;
//   case "바위":
//     gameNum = 2;
//     break;
//   case "보":
//     gameNum = 3;
//     break;
//   default:
//     document.write("오류");
// }
// let com = Math.random() * 3;
// document.write(com);
// if (gameNum == com) {
//   document.write("Win");
// } else {
//   document.write("Lost");
// }
//^ pt46 - number
//^ pt47 - array
// let fruit = new Array();
// fruit[0] = "사과";
// fruit[1] = "배";
// fruit[2] = "샤인머스캣";
// fruit[3] = "포도";
// let fruit2 = new Array("홍시", "키위", "망고", "파인애플");
// let fruit3 = ["사과", "배", "샤인머스캣", "포도"];
//^ pt48 - array method, attribute
let fruit = ["사과", "배", "샤인머스캣", "포도"];
let rain = ["우산", "우비", "장우산"];
// fruit.push("딸기");
// rain.pop();
// fruit.unshift("딸기");
// fruit.shift();
// fruit.splice(2, 0, "딸기", "수박", "멜론");
// fruit.splice(2, 2);
// fruit.sort();
// fruit.reverse();
// let join = rain.join("*");
// console.log("fruit.length;: ", fruit.length);
//^ pt49 - 예제
// let number = ["1", "2", "3", "4", "5"];
// let num = Math.floor(Math.random() * number.length);
//^ pt50 - 예제
// let now = new Date();
// let week = ["일", "월", "화", "수", "목", "금", "토"];

// let day = now.getDay();
// console.log("week[day]: ", `${week[day]}요일`);
//^ pt51 - 예제
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();

// let thisDay = new Date(year, month, 1); /* 이번 달의 1일 */
// let thisWeek = thisDay.getDay(); /* 1일의 요일 */
// let lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let num = 1;
// let week = ["일", "월", "화", "수", "목", "금", "토"];

/* 
28: 0 /7-> 4
28: 1 -> 5
30: 0 -> 5 30/7 => Math.ceil(4.2857142857) : 5
(30+ 6) / 7 -> 6 => Math.ceil(5.1428571429) : 6
 */

// [월]의 줄 수: 소수점 올림((매 달 마지막 날[월] + 시작요일) / 일주일)
// 밀리면서 줄이 늘어남
// let row = Math.ceil((lastDate[month] + thisWeek) / 7);

// let cal = "<table>";
// cal += "<tr>";
// /* column 방향으로 7줄 */
// for (i = 0; i < 7; i++) {
// week 배열의 i번째, 즉 0~7: 일~토
// cal += `<th style="border: 1px solid">${week[i]}</th>`;
// }
// cal += "</tr>";

// /* row 방향으로 row 줄 */
// for (i = 0; i < row; i++) {
//   cal += "<tr>";

//   /* column 방향으로 7줄 (일주일) */
//   for (j = 0; j < 7; j++) {
//     if ((i == 0 && j < thisWeek) || num > lastDate[month]) {
//       //1번 조건: 1번 줄 (i==0)에 시작요일보다 작은 경우 아래를 실행 (시작 요일 찾아가기)
//       //2번 조건: if로 인해서 num 값이 ++되어 커지는데, 이번달의 마지막 날보다 커지면 아래 실행
//       cal += "<td></td>";
//     } else {
//       // j가 7이 될 때 까지 num을 1씩 증가
//       cal += `<td style="border: 1px solid">${num++}</td>`;
//     }
//   }
//   cal += "</tr>";
// }
// cal += "</table>";

//^ pt52 - 문자열객체

// let str = "random text";

// console.log(str);

// console.log(str.charAt(3)); /* d */
// console.log(str.substr(4, 2)); /* om  */
// console.log(str.substring(7, 11));
// console.log(str.indexOf("d"));
// console.log(str.indexOf("b"));
// console.log(str.search("x"));
// console.log(str.search("z"));
// console.log(str.length);
// console.log(str.charCodeAt(0));
// console.log(String.fromCharCode(97));
// let sp = str.split(" ");
// console.log("sp.length: ", sp.length);
// for (i = 0; i < sp.length; i++) {
//   console.log(sp[i]);
// }
// console.log(str.concat(" text"));
// console.log(str.replace("random", "new"));

//^ pt53 - 예제

// let userName = "hansan";
// console.log("userName.toUpperCase(): ", userName.toUpperCase());

// let phoneNumber = "01012345678";
// let phoneNumberLength = phoneNumber.length;
// console.log(phoneNumber.length);
// if (phoneNumberLength >= 11) {
//   let lastNumber = phoneNumber.substring(7, 12);
//   console.log(phoneNumber.replace(lastNumber, "****"));
// } else {
//   let lastNumber = phoneNumber.substring(6, 11);
//   console.log(phoneNumber.replace(lastNumber, "****"));
// }

// let tel = phoneNumber.sibstr(0,phoneNumber.length-4)+"*".repeat(4);
// console.log(tel);
//^ pt54 - 예제
// let check1 = false;
// let check2 = false;
// let arrUrl = [".co.kr", ".com", ".go.kr", ".net"];

// let userEmail = "hansan0529@gmail.com";
// if (userEmail.indexOf("@") > 0) {
//   check1 = true;
// }
// for (i = 0; i < arrUrl.length; i++) {
//   if (userEmail.indexOf(arrUrl[i]) > 0) {
//     check2 = true;
//   }
// }

// if (check1 && check2) {
//   console.log(userEmail);
// } else {
//   console.log("Error");
// }
//^ pt55 - 브라우저 객체
//^ pt56 - 브라우저 객체
// alert("설문을 시작합니다");
// let userAge = prompt("나이를 입력하세요");
// let okCancle = confirm(`나이가 ${userAge}가 맞습니까?`);
// if (okCancle) {
//   if (usrAge >= 20) {
//     console.log("가능");
//   } else {
//     console.log("불가능");
//   }
// }
//^ pt57 - 객체: setinterval
// let i = 1;
// function tt() {
//   console.log(i++);
// }

// let timer = setInterval(tt, 1000);
// let stop = clearInterval(timer);

//^ pt58 - 객체: settimeout
// setTimeout('console.log("text")', 3000);

//^ pt59 - 객체: screen
// document.write(`width: ${screen.width}<br>`);
// document.write(`height: ${screen.height}<br>`);
// document.write(`availWidth: ${screen.availWidth}<br>`);
// document.write(`availHeight: ${screen.availHeight}<br>`);
// document.write(`color: ${screen.colorDepth}<br>`);

//^ pt60 - location
// let url = location.href;
// console.log(url);

// console.log(location.hostname);
// console.log(location.host);
// console.log(location.protocol);

//^ pt61 - window
// console.log("window.innerWidth: ", window.innerWidth);
// console.log("window.outerWidth: ", window.outerWidth);
// console.log("window.innerHeight: ", window.innerHeight);
// console.log("window.outerHeight: ", window.outerHeight);

//^ pt62 - history
// document.write("<h1>history index</h1>");
// document.write("<a href='#'>sub1</a>");
// document.write(`<button onclick="history.back();">back</button>`);
// document.write(`<button onclick="history.forward();">forward</button>`);

//^ pt63 - navigator
// document.write(navigator.appCodeName, "<br>");
// document.write(navigator.appName, "<br>");
// document.write(navigator.appVersion, "<br>");
// document.write(navigator.language, "<br>");
// document.write(navigator.userAgent);

//^ pt64 - 예제
// let total = navigator.userAgent;
// if (total.indexOf("Mac") >= 0) {
//   document.write("Mac OS");
// } else if (total.indexOf("iPhone") >= 0) {
//   document.write("iPhone");
// } else {
//   document.write("다른 플랫폼입니다");
// }

//^ pt65 - geolocation
// function getLocation() {
//   navigator.geolocation.getCurrentPosition(success, error);
// }
// function success(position) {
//   console.log("success");
//   console.log(position.coords.latitude, position.coords.longitude);
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   location.href = `https://www.openstreetmap.org/#map=17/${latitude}/${longitude}`;
// }
// function error() {
//   console.log("error");
// }

// document.write(`<button onclick="getLocation();">btn</button>`);

//^ pt66 - dom 객체
// let hTitle = document.createElement("h1");
// let hText = document.createTextNode("dom text");
// hTitle.appendChild(hText);

// document.body.appendChild(hTitle);

//^ pt67
// let img = document.createElement("img");
// img.setAttribute("src", "https://via.placeholder.com/150x100");
// img.setAttribute("alt", "가상 이미지");

// document.body.appendChild(img);

//^ pt68 - innerText
// let hTitle = document.createElement("h1");

// let text = document.createTextNode("text");
// hTitle.appendChild(text);
// hTitle.innerHTML = "asd";

// document.body.append(hTitle);

//^ pt69 - dom selector
// let cTag = document.createElement("p");
// let cClass = document.createElement("p");
// let cId = document.createElement("p");
// let cForm = document.createElement("form");

// cTag.innerHTML = "cTag";
// document.body.append(cTag);
// cTag.style.color = "green";

// cClass.innerHTML = "cClass";
// cClass.classList.add("cClass");
// document.body.append(cClass);

// let cClassText = document.getElementsByClassName("cClass")[0];
// cClassText.style.color = "red";

// cId.innerHTML = "cId";
// document.body.append(cId);
// document.getElementsByTagName("p")[2].id = "cId";

// let cIdtext = document.getElementById("cId");
// cIdtext.style.color = "blue";

// cForm.innerHTML = "cForm";
// document.body.append(cForm);
// document.getElementsByTagName("form")[0].id = "cForm";

// let cFormText = document.querySelector("#cForm");
// cFormText.style.color = "pink";

//^ pt70 - 예제
// let clockDom = document.createElement("div");
// document.body.append(clockDom);
// document.querySelector("div").id = "myClock";

// function myDigit() {
//   let today = new Date();
//   let hour = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   let myClock = document.querySelector("#myClock");
//   myClock.innerText = `${hour}:${m}:${s}`;
// }

// setInterval("myDigit()", 1000);

// myDigit();

//^ pt71 - 인접선택자
// let h1 = document.createElement("h1");
// h1.innerText = "인접선택자";
// document.body.append(h1);

// let ul = document.createElement("ul");
// ul.innerHTML =
//   "<li><a href='#'>list1</a></li><li><a href='#'>list2</a></li><li><a href='#'>list3</a></li>";
// document.body.append(ul);
// document.querySelector("ul").id = "list";

// let hTitle = document.querySelector("h1");
// let next = hTitle.nextElementSibling;
// next.classList.add("active");

// let menu = document.querySelector("#list");
// let prev = menu.previousElementSibling;
// menu.previous;
// prev.classList.add("active");

//^ pt72 - 자식선택자
// let style = document.createElement("style");
// style.append(".bg{background: pink}");
// style.append(".bg2{background: green; color:#fff; font-size:24px}");
// style.append(".border { border: 3px solid salmon; }");
// document.body.append(style);

// let h1 = document.createElement("h1");
// h1.innerText = "자식선택자";
// document.body.append(h1);

// let ul = document.createElement("ul");

// ul.innerHTML =
//   "<li><a href='#'>list1</a></li><li><a href='#'>list2</a></li><li><a href='#'>list3</a></li>";
// document.body.append(ul);
// document.querySelector("ul").id = "list";

// let list = document.querySelector("#list");

// let first = list.firstElementChild;
// first.classList.add("bg");

// let last = list.lastElementChild;
// last.classList.add("bg2");

// let child = list.children;
// child[1].classList.add("border");

// let nav = document.querySelectorAll("#list>li>a");
// nav[1].classList.add("border");

// for (i = 0; i < nav.length; i++) {
//   nav[i].classList.add("border");
// }

//^ pt73 - 부모선택자
// let style = document.createElement("style");
// style.append(".bg{background: pink; padding: 50px}");
// style.append(".me{background:skyblue");
// document.body.append(style);

// let h1 = document.createElement("h1");
// h1.innerText = "부모선택자";
// document.body.append(h1);

// let div = document.createElement("div");
// document.body.append(div);
// div.innerHTML = "부모<div class='me'>자식</div>";

// let p = document.querySelector(".me");
// let parent = p.parentNode;
// parent.classList.add("bg");
// console.log("parent: ", parent);

//^ pt74 - cloneNode 복사
// let style = document.createElement("style");
// style.append("li{list-style: nonel; margin:0; padding: 0;");
// document.body.append(style);

// let ul = document.createElement("ul");

// ul.innerHTML =
//   "<li><a href='#'>list1</a></li><li><a href='#'>list2</a></li><li><a href='#'>list3</a></li>";
// document.body.append(ul);
// let classs = document.querySelector("ul");
// classs.classList.add("list");

// let list = document.querySelector(".list");
// let first = list.firstElementChild.cloneNode(true);
// list.appendChild(first);

//^ pt76 - mouse event
// let btnCreate = document.createElement("p");

// btnCreate.innerHTML = "<button>btn</button>";
// document.body.append(btnCreate);

// function bg(e) {
//   // let myBody = document.querySelector("body");
//   // myBody.style["background-color"] = "skyblue";
//   console.log(e);
// }

// let btn = document.querySelector("button");
// // btn.addEventListener("mouseover", bg);
// btn.style.position = "absolute";

// btn.style.top = 0;
// btn.style.left = 0;

// let btnX = parseInt(btn.style.left);
// let btnY = parseInt(btn.style.top);

// let xPos = 0;
// let yPos = 0;

// function clickHandler(e) {
//   xPos = e.clientX;
//   yPos = e.clientY;
//   let moveX = xPos - btnX;
//   let moveY = yPos - btnY;

//   setInterval(function () {
//     if ((moveX > 0 && btnX < xPos) || (moveX < 0 && btnX > xPos)) {
//       btnX += moveX * 0.2;
//       btnY += moveY * 0.2;
//       btn.style.left = btnX + "PX";
//       btn.style.top = btnY + "PX";
//     }
//   }, 50);
// }

// let myBody = document.querySelector("body");
// myBody.style["height"] = "100vh";
// document.addEventListener("click", clickHandler);

//* pt77
// document.addEventListener("click", function (e) {
//   xPos = e.clientX;
//   yPos = e.clientY;
//   console.log(xPos, yPos);
// });

// moveBtn();

// function moveBtn() {
//   requestAnimationFrame(moveBtn);
//   btnX += (xPos - btnX) * 0.1;
//   btnY += (yPos - btnY) * 0.1;
//   // btn.style.transform = `translate(${btnX}px,${btnY}px)`;
//   btn.style.left = btnX + "px";
//   btn.style.top = btnY + "px";
// }

//^ pt79
let htmlStyle = document.createElement("style");
htmlStyle.append("*{margin:0; padding: 0}");
htmlStyle.append("li{list-style:none}");
htmlStyle.append(
  "div { width: 400px; margin:100px auto; text-align: center; position: relative; background-color: antiquewhite;}"
);
htmlStyle.append(".arrow>li>a{position:absolute;top:50%;}");
htmlStyle.append(".arrow>li>.leftBtn{left: 0;}");
htmlStyle.append(".arrow>li>.rightBtn{right: 0;}");
document.body.append(htmlStyle);

let banner = document.createElement("div");

banner.innerHTML =
  "<div><img src='../images/list-1.jpg' class='bannerImg'></div><ul class='arrow'><li><a href='#' class='leftBtn'>left</a></li><li><a href='#' class=rightBtn>right</a></li></ul>";
document.body.append(banner);

let left = document.querySelector(".leftBtn");
let right = document.querySelector(".rightBtn");
let myImg = document.querySelector(".bannerImg");

let showBanner = 1;

right.addEventListener("click", function () {
  if (showBanner < 3) {
    showBanner++;
  } else {
    showBanner = 1;
  }
  myImg.src = `../images/list-${showBanner}.jpg`;
});

left.addEventListener("click", function () {
  if (showBanner > 1) {
    showBanner--;
  } else {
    showBanner = 3;
  }
  myImg.src = `../images/list-${showBanner}.jpg`;
});
