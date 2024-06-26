# React-create-app

기존에는, react를 설치하지 않고, script로 불러왔지만, 이제는 설치해서 로컬에서 빠르게 사용할 것이다.

```bash
$ yarn create react-app name
```

&li;name&gt; 이름의 폴더를 생성하는 것이기 때문에, 폴더 속 프로젝트를 만들지 않도록 주의하자.

```bash
$ cd name
```

```bash
$ code .
```

이제 작업해주면 된다.

<br>

---

## React 기본

### Javascript

라이브러리로 더욱 편리하게 작업 할 수 있다.

또한 HTML을 작성하는 것이 아닌, JS 상에서 생성한 뒤, 렌더링하여 보여주는 SPA 방식이다.

바닐라 JS와 비교해보자.

```html
<html>
  <body>
    <span>A</span>
    <button>B</button>
    <script>
      const span = document.querySelector("span");
      const btn = document.querySelector("button");

      let counter = 0;

      const handleBtn = () => (span.innerText = `A: ${(counter += 1)}`);
      btn.addEventListener("click", handleBtn);
    </script>
  </body>
</html>
```

기존의 HTML 작성 후, JS에서 해당 요소를 불러와 텍스트를 변경하는 코드이다.

여기서, HTML에 내용을 입력하지 않고, JS로 만들 수 있다.

```js
const span = document.createElement("span");
const btn = document.createElement("button");

let counter = 0;

span.innerText = "A";
btn.innerText = "B";

const handleBtn = () => (span.innerText = `A: ${(counter += 1)}`);

btn.addEventListener("click", handleBtn);

document.body.appendChild(span);
document.body.appendChild(btn);
```

생성하고, 텍스트 지정하고, 이벤트 지정하고 간단한 요소인데도 많은 코드가 필요하다.

React를 사용해 코드를 줄여보자

### React

```html
<!DOCTYPE html>
<html lang="ko">
  <body>
    <div id="root"></div>
  </body>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script>
    let counter = 0;

    const root = document.getElementById("root");
    const span = React.createElement(
      "span",
      {
        onMouseEnter: () => console.log("Enter"),
      },
      "A"
    );
    const btn = React.createElement(
      "button",
      {
        id: "btn",
        onClick: () => console.log("click"),
      },
      "B"
    );
    const container = React.createElement("div", null, [span, btn]);
    ReactDOM.createRoot(root).render(container);
  </script>
</html>
```

React를 사용하기 위해서 CDN으로 불러와준다.  
이렇게 되면, script에서 React와 ReactDOM을 사용 할 수 있다.

React.createElement는 만들고자 하는 태그, 프로퍼티, 텍스트로 구성되어 있는데, 프로퍼티에 이벤트를 추가할 수 있다.

이렇게만 해도 훨씬 짧아지는데, 더 편리한 방법이 있다.

JSX라고, 우리가 한 코드를 대신 해준다.

#### JSX

```js
const span = (
  <span class="span" onMouseEnter={() => console.log("Enter")}>
    A
  </span>
);
```

물론 이 상태로 새로고침해보면 &lt; 를 이해 할 수 없어서 오류가 발생하는데, Babel을 통해 변환해 적용시킨다..

작성한 스크립트에 type을 바벨로 지정해준다. `<script type="text/babel"></script>` 바벨도 불러와야 적용된다.  
아직 변경하지 않은 요소가 있는데, div를 수정할 것이다.

```js
// span -> Title, btn -> Button
const Title = () => (
  <h3 class="h3" onMouseEnter={() => console.log("Enter")}>
    A
  </h3>
);

const Container = () => (
  <div>
    <Title />
    <Button />
  </div>
);
ReactDOM.createRoot(root).render(<Container />);
```

컴포넌트가 되는 요소는 첫글자가 대문자여야만 한다. 소문자일 경우 HTML 로 인식하기 때문에 반드시 대문자로 작성해야한다.

`<Title />`로 사용하기 위해서 함수로 지정해주어야 한다. `() => ()`이 `function Title() { return (<h3>...</h3>)}` 와 같이 return이 포함되어있다.

---

#### State

```js
let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));
function countUp() {
  counter += 1;
  root.render(<Container />);
}
const App = () => (
  <div>
    <h3>클릭 횟수: {counter}</h3>
    <button onClick={countUp}>클릭</button>
  </div>
);
root.render(<App />);
```

```html
<!-- JS에서는 h3의 innerText를 업데이트하면, NodeList를 업데이트하기 위해서 노드트리를 재생성해 많은 작업이 이루어진다. -->
<!-- 하지만 React에서는 가상돔을 사용해 보이는 부분만 수정하고, 업데이트가 끝나면 일괄로 합쳐 실제 DOM에 전달해준다. -->

<body>
  <div id="root">
    <div>
      <h3>클릭 횟수: 0</h3>
    </div>
  </div>
</body>

<!-- JS의 경우 `<body>` `<div id="root">` `<div>` `<h3>` `클릭 횟수: 0` 가 변하는데,  -->
<!-- React의 경우 `0` 만 변하는 모습을 볼 수 있다. -->
```

<br>

btn을 클릭하면 contUp이 실행되어 counter의 값이 1씩 커지는데, 커지기만 할 뿐, UI에는 업데이트 되지 않아서 **재렌더링**을 해준다.  
ReactDOM으로 생성한 요소에 `render()` 해주면 된다.

`root.render(<App />)` === `ReactDOM.createRoot(root).render(<Container />)`와 동일하다.

하지만 업데이트하는 모든 함수마다 render를 해주는건 무리다.

```js
const [counter, setCounter] = React.useStatus(0);
const onClick = () => {
  setCounter(counter + 1);
};
```

React.useStatus는 2개의 배열로 이루어져있는데, undefined와, modefier 있다. ES6의 const {} 처럼  
`const [counter, setCounter]`를 지정하면, undefined, modefier이 counter, setCounter에 저장되는 것이다.  
setCounter를 실행하게 되면, 리렌더링을 해서 업데이트한 요소를 볼 수 있다.

**정리하자면 state가 변하면, 리렌더링이 일어난다.**

추가로, 현재 state 바탕으로 다음 statue를 계산하려면 `setCounter((current) => current + 1)` 로 변경해서 사용하는 게 더 좋다.  
current는 명확하게 현재 state의 counter 값을 줄 것이다.

<br>

---

#### input

input에 대해 접근을 할 수 없는데, state를 사용하면 가능하다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  const [minutes, setMinutes] = React.useState(0);
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  return (
    <div>
      <h1 className="converter">변환기</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        id="minutes"
        placeholder="분"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="hours">Minutes</label>
      <input
        value={minutes}
        id="hours"
        placeholder="시간"
        type="number"
        onChange={onChange}
      />
    </div>
  );
};
root.render(<App />);
```

input에 value를 minutes로 설정한 뒤에, onChange를 추가하지 않으면 input의 값이 변하지 않는다. value는 minutes의 기본 값을 받고 있는데, 업데이트가 되지 않기 떄문이다.  
왜 input에 value={minutes} 로 했냐면, 외부에서도 input의 값을 변경할 수 있도록 설정한 것이다.

return 안에 JSX에도 javascript를 쓰는 방법은 {} 를 사용하면 가능하다.

---

#### Props

재사용 가능한 컴포넌트를 만든다.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
const Btn = (props) => {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: 0,
      }}
    >
      {props.txt}
    </button>
  );
};
const App = () => {
  return (
    <div>
      <Btn txt="변경 저장" />
      <Btn txt="확인" />
    </div>
  );
};
root.render(<App />);
```

Btn 컴포넌트를 불러 올 때, property 를 지정 할 수 있는데, 컴포넌트에서는 1개의 인수를 받는데, 그게 prop이다.  
`txt="텍스트"`를 보내면, Btn (props)에서, `txt: "텍스트"` 값을 얻을 수 있다.  
props.txt 를 추출해보면 **변경 저장, 확인** 값을 얻어 볼 수 있는데, 선언 자체를 단축시켜 더욱 편리하게 사용 할 수 있다.

`Btn (props)` &rarr; `Btn ({txt})`로 변경하면, {txt}만 하더라도 값을 얻을 수 있다.

```js
const Btn = ({ ... value, onClick}) => {
  return(
    <button onClick={onClick}>
    {value}
    </button>
  )
}
const [value, setValue] = React.useState("변경 저장");
...
const onClick = setValue("완료");
...
<Btn text={value} onClick={onClick} />
```

Btn 컴포넌트에 지정한 onClick는 props의 이름일 뿐이다. `props.onClick: setValue("완료")` 가 되는 것이다.  
changeValue가 이벤트를 추가 하는 것이 아닌, Btn의 button에 직접 지정해주어야 이벤트가 추가되는 형식이다.

추가로 배열 안에 추가하려면 다음과 같이 해주어야한다.

```js
const [value, setValue] = React.useState([]);
const onClick = (e) {
  e.preventDefault();
  setValue((currentArray) => [value, ...currentArray]);
  };
```

만약 currentArray가 `[1,2,3,4,5]` 였고, value가 `[0,-1]` 일 경우, 해당 함수 대신 `[value, currentArray]`로 진행할 경우  
`[0, -1, [1,2,3,4,5]]`가 된다. 그래서 안으로 포함시키기 위해 `...`을 입력해 포함시키면 `[0, -1, 1, 2, 3, 4, 5]` 의 결과를 얻을 수 있다.

onClick을 changeValue로 변경하면 이해하기 더 쉬울 것이다.

```js
Btn = ({ changeValue }) => {
  return(
    <button onClick={changeValue}></button>
  )
}
const changeValue = setValue("완료");
<Btn text={value} changeValue={changeValue}>
```

부모가 변하면 자식 컴포넌트들은 모두 리렌더링이 된다. 그래서 text를 console.log 해보면,  
&quot;변경 저장&quot;, &quot;확인&quot; 과  
&quot;완료&quot;, &quot;확인&quot;이 나온다. 분명 나는 첫번째 요소만 변경했는데 모두를 리렌더링하는 모습이다.

이와 같을 때, React.memo라는 것을 사용한다.

#### Memo

```js
const MemorizedBtn = React.memo(Btn);

...
<MemorizedBtn text={value} big={true} changeValue={changeValue} />
```

이후에는 &quot;변경 저장&quot;, &quot;확인&quot;, &quot;완료&quot;만 렌더링 되는 모습을 볼 수 있다.

### useEffect

state가 변경되면 function이 재 시작되는데, `console.log`를 디버깅 해보면, 변경 될 때 마다 콘솔에 렌더링 되는 것을 볼 수 있다.  
API를 호출하거나 단 한번만 렌더하면 되는 요소는 불필요하게 렌더링하게 되므로, 이를 해결하기 위해 useEffect를 사용한다.  
(화면이 모두 로딩 된 후에 실행된다)

```js
import { useState, useEffect } from "react";

function App() => {
const [counter, setCounter] = useState(0);
console.log("렌더링");
useEffect(()=>{
  console.log("한 번만 실행");
  }, []);
```

state가 변할 때 마다, 렌더링은 계속 실행되고, 한 번만 실행은 처음에만 렌더링 된다.

```
렌더링
한 번만 실행
렌더링
렌더링
렌더링
렌더링
```

[]에 변하면 실행하도록 하는 요소를 넣어준다.

```js
console.log("렌더링");
useEffect(() => console.log("검색: ", keyword), [keyword]);

<div>
  <input type="text" placeholder="검색" value={keyword} onChange={onChange} />
  <button onClick={onClick}>클릭</button>
</div>;
```

첫 렌더링

```
렌더링
검색:
```

input Change 시

```
렌더링
검색: T
렌더링
검색: E
렌더링
검색: S
렌더링
검색: T
```

button 클릭으로 인해 state가 변경 될 때

```
렌더링
검색 :
렌더링
렌더링
렌더링
렌더링
렌더링
```

별도의 컴포넌트를 불러 올 때도 사용 가능하다.

```js
function Load() {
  useEffect(() => {
    console.log("여기야 :)");
    return () => console.log("없어졌어 :(");
  }, []);
  return <h2>안녕!</h2>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Load /> : null}
      <button onClick={onClick}>{showing ? "숨어" : "나와"}</button>
    </div>
  );
}
```

btn은 기본적으로 `나와`를 출력하며, 누를 경우 Load가 불러와지고, useEffect로 인해 `여기야 :)` 를 볼 수 있다.  
null로 변경하면서 Load를 지웠을 때, `없어졌어 :(` 를 얻을 수 있다.

**create, destory 2개의 상태에 따른 실행 요소를 선택 할 수 있다.**

이를 `cleanup function` 이라고 한다.

```js
function Load() {
  function destoryedFn() {
    console.log("없어졌어 :(");
  }
  function effectFn() {
    console.log("여기야 :)");
    return destoryedFn;
  }
  useEffect(effectFn, []);
  return <h2>안녕!</h2>;
}
```

다음처럼 함수를 분리해서 사용 할 수 있다.

<br>

### PropType

text에 String이 아닌, Number가 입력되고, Boolean이 입력되면 원치 않은 결과를 얻을 수 있다보니, 유효성 검사가 필요하다.  
그래서, React의 PropType을 사용해 검사를 실시한다.

```html
<script src="https://unpkg.com/prop-types@15.8.1/prop-types.js"></script>
```

```js
Btn.propTypes = {
  text: PropTypes.string.isRequried,
  fontSize: PropTypes.number,
  submit: PropTypes.bool,
};
```

다음과 같이 지정하면, text는 string에 필수로 필요하며, fontSize는 Number, submit은 boolean만 입력이 가능하다.  
다른 여러가지 유효성 검사 프로퍼티는 다음과 같다.

```js
MyComponent.propTypes = {
  // optional 선택사항
  optionArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 렌더링할 수 있는 모든 것: 숫자, 문자열, 요소 또는 배열
  optionalNode: PropTypes.node,

  // Element인지 검사
  optionalElement: PropTypes.element,

  optionalMessage: PropTypes.instanceOf(Message),

  // 속성이 News 또는 Photos 중 하나
  optionalEnum: PropTypes.oneOf(["News", "Photos"]),

  ...
};
```

[React PropTypes](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html) &larr; 다음 사이트에서 자세히 확인 가능함

#### Default Value

컴포넌트를 불러올 때, 프로퍼티를 지정하지 않을 경우 입력될 기본값을 설정한다.

```js
const Btn = ({ text, fontSize = 14, submit, changeValue, value }) => {};
```

fontSize 속성이 없을 경우 14로 지정된다.

---

<br>

### CSS Module

CSS를 모든 영역에 적용하고 싶지 않기 때문에, 모듈러 형식으로 사용한다.

`Button.js`, `src/Button.module.css`

```css
.btn {
  color: #fff;
  background-color: tomato;
}
```

```js
import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({text}){
return <button className={styled.btn}><{text}/button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
```

className이 Button_btn\_\_F4YIC 처럼 랜덤으로 변하며, 해당 스타일이 적용된다.

물론 css의 이름이 같아도 문제는 없다.

```js
// Button.module.css
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}></button>;
}

// App.module.css
import styles from "./App.module.css";

function Button({ text }) {
  return <button className={styles.title}></button>;
}
```

결과는 App.title**@@@, Button_title**@@@ 랜덤으로 나오기 때문에 CSS 클래스가 같아도 문제 없다.

<br>

---

## TODO 만들어보기

```js
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDeafult();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  const onClick = (e) => {
    const idx = parseInt(e.target.className);
    setToDos(toDos.filter((item, toDoIndex) => idx !== toDoIndex));
  }
  return (
    <div>
      <h1>할 일 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} />
        <button>추가</button>
      </form>
      <hr>
      <ul>
      {toDos.map((item, index) => {
        <li key={index}>
          <span>{item}</span>
          <button onClick={onClick} className={index}>X</button>
        </li>
      })}
      </ul>
    </div>
  );
}
```

toDo를 submit하면, input 요소의 value를 초기화하기 위해 toDo를 empty하고, toDos 배열에 toDo를 추가한다.  
삭제 버튼을 누르면, className을 정수형으로 변경하고, toDos에서 filter로 idx 번째를 제외한 나머지를 얻는다. 해당 값을 저장한다.

---

<br>

## Bitcoin 뷰어

```js
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (e) => setMoney(e.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>비트코인 {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>로딩 중</strong>
      ) : (
        <div>
          <input
            type="number"
            onChange={onChange}
            value={money}
            placeholder="보유한 달러"
          />
          <select>
            {coins.map((item, index) => {
              <option key={index} value={item}>
                {item.name} ({item.symbol}) : {item.quotes.USD.price} [
                {money / item.quotes.USD.price}]
              </option>;
            })}
          </select>
        </div>
      )}
    </div>
  );
}
```

API를 호출하는데, 1회만 호출하도록 하기 위해서, useEffect를 사용했고, JSON 형태로 받고, 해당 json을 coins State에 저장하기 위해 setCoins에 json을 붙여넣어준다. 로딩이 기본적으로 `true`이기 때문에 `false`로 변경해준다.

그래서, 로딩 중에는 본문이 나오지 않도록 설정하고, 로딩이 마치면 목록을 불러오도록 한다.

---

<br>

## 영화 목록 나열해보기

```js
// ./routes/Home
import { useState, useEffect } from "react";
import Movie from "../Component/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const date = new Date();
  const dateString = date
    // 한국 시간으로 현재 날짜 숫자값 얻기
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    // .(dot) 과 \s 공백은 (/g 전체) ""(empty)로 변경시킨다. 2023. 05. 25 -> 20230525
    .replace(/\.|\s/g, "");
  const getMovies = async () => {
    const json =
      await // fetch 요청으로 json을 받았고, json에 json 타입으로 저장함.
      (
        await fetch(
          /* ** 해당 key는 예시용 키임 ** */
          `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${
            dateString - 1
          }`
        )
      ).json();
    // json의 boxOfficeResult.dailyBoxOfficeList에 대한 목록을 Movies에 저장함
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    // 로딩 완료
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>최신 영화</h1>
      {loading ? (
        <h1>로딩 중...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            // Movie Component에 해당 값들을 전달한다.
            <Movie
              key={parseInt(movie.movieCd)}
              rank={parseInt(movie.rank)}
              movieNm={movie.movieNm}
              openDt={parseInt(movie.openDt)}
              audiCnt={parseInt(movie.audiCnt)}
              audiAcc={parseInt(movie.audiAcc)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
```

일별 박스오피스 값들을 받기 위해서, fetch API를 사용해 **movies**에 저장하고, **useEffect**로 한 번만 실행하도록 한다.  
삼항연산자를 사용해 loading이 false라면 Movie Component를 실행한다. **map**을 사용했으니 key 값을 지정해주고, `rank, movieNm, openNm, openDt, audiCnt, audiAcc` 값을 해당 PropTypes에 맞도록  
변환해서 전달한다.

<br>

```js
// ./Component/Movie
import PropTypes from "prop-types";
// 전달 받을 요소를 지정한다.
function Movie({ rank, movieNm, openDt, audiCnt, audiAcc }) {
  return (
    <li>
      {rank}. <h2>{movieNm}</h2>
      <div>
        [{openDt}] 관객 수 {audiCnt}명, 누적 {audiAcc}명
      </div>
    </li>
  );
}

// 해당 요소의 타입을 설정한다.
Movie.propTypes = {
  rank: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  audiCnt: PropTypes.number.isRequired,
  audiAcc: PropTypes.number.isRequired,
};

export default Movie;
```

**prop-types**를 사용해서 정보를 받을 타입을 지정한다.  
전달받은 매개변수를 사용해서 나열한다.

<br>

## React-router-dom

<details>
  <summary>Router</summary>

현재는 단일 페이지에서만 보는데, 다른 페이지로 이동하기 위해서 Router 설정을 할 것이다.
사용하기 쉽도록, 재사용 할 경우 편리하도록 별도의 Component를 생성했으니 사용한다.

```js
// App
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

// 경로, 객체 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <Detail />,
  },
]);

function App() {
  // router에 지정한 요소 연결
  return <RouterProvider router={router} />;
}
```

Router를 설정하기 위해서 **react-router-dom**에서 2가지 요소를 불러온다.

path로 주소를 설정하고, 렌더링할 객체 또는 컴포넌트를 설정해준다.

RouterProvider를 통해서 Router를 개통한다.
</details>

<details>
  <summary>Error page</summary>

사용자에게 정보를 전달하기 위해 에러 페이지를 설정한다.

- error-page

```js
import { useRouterError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>문제 발생</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
```

- main

```js
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/';
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

...
```

에러 페이지 설정을 추가하면 접근 불가능한 경로로 접근할 경우 `error-page` 페이지로 이동한다.
</details>

<details>
    <summary>Children</summary>

Root

```jsx
import { Outlet } from 'react-router';

export default function Root() {
    return (
    <>
        <div id="sidebar">
        <h1>라우터 루트</h1>
        <div>
            <form id="search-form" role="search">
            <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
            />
            <div
                id="search-spinner"
                aria-hidden
                hidden={true}
            />
            <div
                className="sr-only"
                aria-live="polite"
            ></div>
            </form>
            <form method="post">
            <button type="submit">New</button>
            </form>
        </div>
        <nav>
            <ul>
            <li>
                <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
                <a href={`/contacts/2`}>Your Friend</a>
            </li>
            </ul>
        </nav>
        </div>
        <hr />
        <div id="detail">
            <Outlet />
        </div>
    </>
    );
}
```

index.js

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'test/:id',
        element: <div>테스트</div>,
      },
    ]
  },
])
```

Outlet 통해서 children 요소의 라우트에 접근 했을 경우 `http://example.com/test/123` element 가 `<Root />` 하위 레이어에서 포함되어 확인 된다.
</details>

<details>
  <summary>Link</summary>

제목을 click 했을 때, **/movie**로 이동하기 위해서는 어떻게 해야 할 까? HTML에서 a 태그를 사용하는 방법이 있을 거다.  
물론 틀린 건 아니지만, 아마 새로고침이 될 것이다.

React는 서버단에서 렌더링하기 때문에, 유저가 새로고침을 하지 않아도 된다.

```js
import { Link } from "react-router-dom";

function Movie(...){
  ...
  <h2><Link to={`/movie/${id}`}>{movieNm}</Link></h2>
}
```

`<a href="/movie"></a>` &rarr; `<Link to="/movie"></Link>`  
구성은 똑같다.
</details>

<br>

### - Params

무작위 값을 주소로 변환하는 파라미터를 사용해 게시글 고유의 내용을 표시한다.

```js
// App
...
{
  path: "/movie/:id",
  element: <Detail />
}

// Detail
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
}
```

해당 링크를 타고 이동했을 때, id의 값을 알 수 있다. Express의 **req.params**와 같다.  
useParams는 {id: 'value'} 를 반환하는데, id는 :id 로 지정되는 것이라 다른 파라미터로 변경하면 그대로 변한다.

- ex `/movie/:movieId` &rarr; **{movieId: '1234567'}**

<br>

## useNavigate

상태를 보존하고, 새로고침 없이 홈페이지를 이동할 때 필요하다.

기존에 홈페이지 경로를 이동하기 위해서는 `window.location.href` 를 사용했다.

```js
const onClick = () => {
  window.location.href = "/";
}
```

하지만, 그럴 경우 `redux` 에서 상태 유지를 한 것을 새로고침하면서 기본값으로 돌아가기 때문에, `useNavigate`를 사용해 이동한다.

기존에는 `useHistory()` 였지만, `react-router-dom` 패키지가 업데이트하면서 `useNavigate`로 변경되었다.

```js
import { useNavigate/*, useHistory*/ } from "react-router-dom";

// const history = useHistory();
const navigate = useNavigate();

const onClick = () => {
  // history.push('/');
  navigate('/');
}

const test = () => {
  navigate(-1);
  // navigate(-2);
}
```

`navigate`에 직접적인 경로를 넣어도 되고, number value를 넣어서 인덱스로 처리, 이전페이지 같은 동작이 가능하다.
