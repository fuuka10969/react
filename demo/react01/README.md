# react

安装脚手架工具
```
npm install -g create-react-app
```

创建项目
```
create-react-app react01
```

运行
```
npm start
```

## 知识点
### JSX
1. className
与以前的class一致

2. htmlFor
与以前的for一致

### React

1. Fragment 
React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素。一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。

2. dangerouslySetInnerHTML属性
用于转译html
```
<li dangerouslySetInnerHTML={{ __html:item }}></li>
```

3. this指向
方法一：构造函数内设定
```
this.handleClick = this.handleClick.bind(this)
```
方法二：箭头函数
```
handleClick = () => {}
```

4. setState
  - 异步方法，解决异步问题可用回调
  ```
  this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  ```

5. 父子组件传值
  - props
  - 单项数据流，子组件不能修改父组件的值，只能将父组件的方法传给子组件来操作父组件的数据

6. propTypes
  - propTypes: 使用 PropTypes 进行类型检查
  ```
  import PropTypes from 'prop-types'
  AnimationItem.propTypes = {
    index: PropTypes.number.isRequired,
  };
  ```
  - defaultProps: 通过配置特定的 defaultProps 属性来定义 props 的默认值
    ```
  import PropTypes from 'prop-types'
  AnimationItem.defaultProps = {
    from: '国创',
  }
  ```

7. ref
```
ref={(ul) => { this.ul = ul }}
```
### 生命周期
在某一时刻，自动执行的函数

#### Initialization 初始化阶段
setup props and state

#### Mounting dom挂载阶段
1. componentWillMount: 组件将要挂载到页面的时刻
2. render: 组件挂载中
3. componentDidMount: 组件挂载完成的时刻

#### Updation 

#### Unmounting


## 插件
1. Simple React Snippets
  - imrc
  ```
  import React, { Component } from 'react'
  ```
  - cc
  ```
  class extends Component{}
  ```
  详情查阅Details

2. react-devtools

3. 