import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('index useEffect')
  })
  return (
    <div>index page</div>
  )
}

function List() {
  useEffect(() => {
    console.log('list useEffect')
  })
  return (
    <div>list page</div>
  )
}

function Example() {
  const [count, setCount] = useState(0) // 数组解构
  useEffect(() => {
    console.log('useEffect', count)
  })
  return (
    <div>
        <div>you click {count} times</div>
        <button onClick={() => setCount(count+1)}>click me</button>
        <Router>
          <ul>
            <li><Link to="/">index</Link></li>
            <li><Link to="/list/">index</Link></li>
          </ul>
          <Route path="/" exact component={Index}></Route>
          <Route path="/list" component={List}></Route>
        </Router>
      </div>
  )
}
 
export default Example;