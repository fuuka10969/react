# redux

```
yarn add antd

yarn add redux

yarn add axios
```

## 实现步骤

组件 -> store -> reducer -> 组件

1. 创建store

2. 在 store/reducer.js中创建值
```
const defaultState = {
  inputValue: 'write something',
  list: [ '1', '2', '3' ]
}

export default (state = defaultState, action) => {
  return state
}
```

3. 组件constructor内引入
```
this.state = store.getState()
```

4. componentDidMount中订阅
```
store.subscribe(this.storeChange)
```

5. 绑定值
```
this.state.xxx
```

6. 事件修改值
```
changeInputValue = (e) => {
  const action = {
    type: 'changeInput',
    value: e.target.value
  }
  store.dispatch(action)
}
```

7. reducer.js处理事件
```
if(action.type === 'changeInput') {
  let newState = JSON.parse(JSON.stringify(state))
  newState.inputValue = action.value
  return newState
}
```

## 工具
redux-devtools

## 小技巧
1. actionTypes和actionCreators统一管理

2. 组件UI和业务逻辑分离

3. 无状态组件
无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在<code>state</code>（状态）。因为无状态组件其实就是一个函数（方法）,所以它的性能也比普通的<code>React</code>组件要好。

## 中间件 redux-thunk
```
npm install --save redux-thunk
```

将axios封装到actionCreator中

## 中间件 redux-saga
```
npm install --save redux-saga
```