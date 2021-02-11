import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('hello, index useEffect')
    return () => {
      console.log('bye-bye index')
    }
  }, [])
  return (
    <div>index page</div>
  )
}

function List() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('list useEffect')
    return () => {
      console.log('bye-bye list')
    }
  }, [count])
  return (
    <div>list page</div>
  )
}

function Example4() {
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
            <li><Link to="/list/">list</Link></li>
          </ul>
          <Route path="/" exact component={Index}></Route>
          <Route path="/list" component={List}></Route>
        </Router>
      </div>
  )
}
 
export default Example4;