# Redux ToolKit

기존의 리덕스를 사용하면서 불편한 점을 개선시켜 사용할 수 있다.

redux toolkit에는 redux가 포함되어있어서 기존의 redux를 삭제해도 괜찮다.

```bash
$ npm i @reduxjs/toolkit
```

<br>

기존 redux에서 사용하던 reducer를 살펴보면

```js
const initialState = {
  Test: true,
};

function reducer(state = initialState, action){
  let newState = { ...state };
  if(action.type === "ANYTHING_TYPE"){
    newState.Test = action.elements;
  }
  return newState
}
```

state의 기본값을 설정하고, 불변함을 유지하기 위해 state를 새롭게 복제해서 `newState`에 담고,  
action의 타입마다 `if` or `switch` 문을 사용해 나누어 주어야 했고  
또한 매번 `return`과, `...state`를 사용해야 해서, 이 불편함을 해결하고자 `reduxjs/toolkit`을 사용한다.

## createSlice

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Test: true,
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    funcName: (state, action) => {
      state.Test = action.elements;
    },
    secFc: (state, action) => {
      state.any = action.any;
    }
  }
})

export const { funcName, secFc } = testSlice.actions;

export default testSlice.reducer;
```

return을 사용 할 필요 없고, state의 newState를 사용할 필요도 없어진다.

## configureStore

기존의 store를 생성하는 코드

```js
import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

export default store;
```

현재 최신 버전에서는 ~~createStore~~ 형태로 지원은 하지만 configureStore를 사용해보는건 어떠냐고 물어본다.

```js
import { configureStore } from "@reduxjs/toolkit;
import testReducer from "./reducer";

export default configureStore({
  reducer: {
    name: testReducer,
  }
})
```

`name`은 `useSelector`를 사용 할 때, `useSelector((state) => state.name.Test)` 로 된다.