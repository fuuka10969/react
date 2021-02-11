import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Example() {
  const [count, setCount] = useState(0) // 数组解构
  useEffect(() => {
    console.log('useEffect', count)
  })
  return (
    <div>
        <div>you click {count} times</div>
        <button onClick={() => setCount(count+1)}>click me</button>
      </div>
  )
}
 
export default Example;