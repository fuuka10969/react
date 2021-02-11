import React, { useState, createContext } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

const countContext = createContext()

function Example4() {
  const [count, setCount] = useState(0) // 数组解构
  return (
    <div>
        <div>you click {count} times</div>
        <button onClick={() => setCount(count+1)}>click me</button>
      </div>
  )
}
 
export default Example4;