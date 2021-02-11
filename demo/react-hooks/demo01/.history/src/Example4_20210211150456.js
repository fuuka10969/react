import React, { useState, createContext } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CountContext = createContext()

function Counter()

function Example4() {
  const [count, setCount] = useState(0) // 数组解构
  return (
    <div>
      <div>you click {count} times</div>
      <button onClick={() => setCount(count+1)}>click me</button>
      <CountContext.Provider value={count}>
        
      </CountContext.Provider>
    </div>
  )
}
 
export default Example4;