# Redux

## Redux 리덕스

상태를 저장하는 것으로, State에 직접적인 접속은 불가능하고 이를 복사한 뒤 변화시킬 수 있다.

<br>

```js
function reducer(oldState, action){
  ...
}

let store = Redux.createStore(reducer);
```

`Redux.creaeStore` 를 통해 Store를 만들고, 그 안에는 state와 reducer가 있다.

예를 들어 `store` 를 은행이라고 하면,

|     | store |   |
| --- | ----- | -- |
|     |      | dispatch |
| state | reducer | subscribe |
|     |      | getState |

state는 은행 돈이며, 이는 직접 접근할 수 없으니,  
직원인 dispatch, subscribe, getState인 함수가 있다.

손님인 나는 render 이다.

```js
function render(){
  let state = store.getState();
  document.querySelector("#app").innerHTML = `
    <h1>WEB</h1>
    ...
  `
}
```

render &rarr; getState &rarr; state 로 접근해,  
state &rarr; getState &rarr; render 로 정보를 얻는다.

그러면 우리는 webpage를 볼 수 있는 것이다. (UI 생성)

state 값이 변할 때 마다 render를 재 실행해야 하는데, 자동화에 필요한게 `subscribe` 이다.

```js
store.subscribe(render);
```

**nodemon 처럼 state의 값이 변할때 마다 render를 실행하게 된다.**

<br>

### 사용자가 정보를 추가할 때는 어떻게 해야 할 지?

```js
  <form onsubmit={
  store.dispatch({type: 'create', payload: {title:title, desc: desc}})}
  >
  </form>
```

form에는 event가 있고, **`type: 'create'`** 타입이라는 것으로 action을 칭한다.

Submit &rarr; action &rarr; dispatch &rarr; reducer, subscribe

dispatch는 reducer에게 2가지 인수를 보낸다.

현재의 state 값, action 데이터값

```js
function reducer(state, action){
  if(action.type === "create"{
    ...
    return Object.assign({}, state, {
      contents:newContents,
      maxId:newMaxId,
      mode: 'read',
      selectedId:newMaxId
    });
  }
)}
```

form의 type이 action.type 이 되는 것이다.  
return하는 값은 state의 새로운 값이 된다.

state가 변했으니 render가 다시 되어야 하니 dispatch가 subscribe를 호출한다.

그러면 다시 render &rarr; getState &rarr; state &rarr; getState &rarr; render 로 진행된다.

<br>

---

## Redux 장점

R E D U

R에는 R에 대한 이벤트와 E, D, U에 대한 색상 변경 이벤트가 있음,  
E에는 E에 대한 이벤트, R, D, U  
<code>R, E, D, U</code>  
<code>E, R, D, U</code>  
<code>D, R, E, U</code>  
<code>U, R, E, D</code>  

총 4^2 만큼의 이벤트가 있다.

n개가 될 때 마다 n^2 만큼의 이벤트가 추가되고, 이 중 하나의 객체라도 삭제할 경우,  
해당 객체를 찾지 못해 전체가 실행이 불가능하다.

2 = 4, 3 = 9, 4= 16, 5 = 25 ...

<br>

### **Redux를 사용하면**

R, E, D, U, X

X는 store라고 하고,

R &larr;&rarr; X  
E &larr;&rarr; X  
D &larr;&rarr; X  
U &larr;&rarr; X

총 8개정도로 줄어든다.

---

<br>

## Redux를 사용해보자

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js"></script>
</head>
<body>
  <style>
          .container {
        border: 5px solid #000;
        padding: 10px;
      }
  </style>
  <div id="red"></div>
  <script>
    function reducer(state, action){
      if(state === undefined){
        return { color: 'red' }
      }
    }
    const store = Redux.createStore(reducer);
    function red(){
      const state = store.getState();
      document.querySelector('#red').innerHTML = `
      <div class="container" id="component_red" style="background-color: ${state.color}">
      <h1>red</h1>
      <input type="button" value="fire" onclick="
      store.dispatch({type: 'CHANGE_COLOR', color: 'red'})
    `;
  }
  red();
</script>
</body>
</html>
```

`reducer` `store` `state` 3개의 변수들이 있는데,  

store를 만들어 주어야 state가 생기니 `Redux.createStore()` 를 사용한다.  
그리고, reducer를 통해 작성 및 수정이 가능하니 함수를 생성시켜준다.

state가 처음에는 존재하지 않으니, undefined일 경우에 기본 값으로 `color: red` 를 반환시키도록 했다.

그리고, state의 값을 가져오는 getState를 사용해 값은 가져와본다.

`state.color` 를 사용해 `red` 라는 값에 접근이 가능하다.

<br><br>

```js
console.log(state, action);
// state:  {color: 'yellow'} 
// action:  {type: 'CHANGE_COLOR', color: 'red'}
```

reducer의 state를 사용할 때, 현재의 state를 불러오는 것이라,  
state를 복사해서 새로운 state를 만들어서 이를 사용하는 것이 좋다.

```js
function reducer(state, action){
  if(state === undefined){
    return { color: 'red' }
  }
  let newState;
  if(action.type === "CHANGE_COLOR"){
    newState = Object.assign({}, state)
  }
}
```

### Object.assign

객체를 복사하기 위해서 `Object.assign()`를 사용하는데, 첫번째 인자에는 빈 객체를 넣는다.  
두번째부터 인자에 복제할 속성을 가진 객체를 준다. `Object.assign({}, {name: '이름'}, {city: '서울})`  // {name: '이름', city: '서울}

```js
function reducer(state, action){
  if(state === undefined){
    return { color: 'white'}
  }
  let newState;
  if(action.type === "CHANGE_COLOR"){
    newState = Object.assign({}, state, {color: action.color})
  }
  return newState;
}
```

<br>

### Subscribe

`dispatch`를 사용해 state가 변경되었으니 UI에도 적용하기 위해서 render를 사용해야하는데, 이를 자동으로 하기 위해 subscribe를 사용한다.

```js
function render(){
  ...
  <input type="button" value="btn" onclick="
  store.dispatch({type: 'CHANGE_COLOR', color: 'red'});
  ">
}
store.subscribe(render);
render();
```

`함수 render`는 `store.getState()` 를 통해 현재의 state 값을 불러와 사용하기 때문에, 어느곳에서든 사용이 가능해서,  
subscribe에 render 함수를 넣으면, state가 변경되면 render 함수가 재실행 될 것이다.

### Concat

배열을 복제하기 위해서 사용한다.

```js
const original = [{original: true}];
const contents = [{id: 1}, {name: "xan"}]

const newContents = original.concat(contents);
// newContents = [{original: true}, {id: 1}, {name: "xan"}]
```
