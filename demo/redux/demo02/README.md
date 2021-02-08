# react redux

```
npm install --save react-redux
```

1. 提供器 Provider
包裹需要使用store的组件
```
import { Provider } from 'react-redux'
<Provider store={store}>
    <TodoList />
  </Provider>
```

2. 连接器 connect
组件内将状态影射成props，作为连接器参数
```
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const dispatchToProps = (dispach) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispach(action)
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);
```