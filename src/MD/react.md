# React 기본

## Javascript

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

## React

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

### JSX

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

### State

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

**정리하자면 status가 변하면, 리렌더링이 일어난다.**
