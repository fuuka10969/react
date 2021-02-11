import React, { useState, createContext, useContext } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CountContext = createContext()

function Counter() {
  let count = useContext(CountContext)
  return (
    <div>{count}</div>
  )
}

function Example4() {
  const [count, setCount] = useState(0) // 数组解构
  return (
    <div>
      <div>you click {count} times</div>
      <button onClick={() => setCount(count+1)}>click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}
 
export default Example4;