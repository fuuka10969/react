# react router

## 开发环境配置和安装

```
create-react-app demo

npm start

npm install --save react-router-dom

```

## 引入
```
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
```
Router: 路由器
Route: 线路
Link: 当成a标签

```
<Route path="/" exact component={Index} />
```
exact：首页精确匹配


## 动态传值
1. 设置规则
```
<Route path="/list:id" component={List} />
```

2. 传递值
```
<Link to={`/list:${item.cid}`}>{item.title}</Link>
```

3. 接收值
```
componentDidMount() {
  let tempId = this.props.match.params.id
  this.setState({
    id: tempId
  })
}
```

4. 显示内容

## 重定向（根据场景选择）

链接跳转与重定向的区别：链接跳转页面可以前进后退，重定向不能

1. Redirect标签跳转 
```
import { Redirect } from 'react-router-dom'
<Redirect to="/home/">首页</Redirect>
```

2. 编程式重定向
```
this.props.history.push('/home/')
```