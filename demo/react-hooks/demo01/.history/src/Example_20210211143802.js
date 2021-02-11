import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0) // 数组解构
  return (
    <div>
        <div>you click {count} times</div>
        <button onClick={() => setCount(count+1)}>click me</button>
      </div>
  )
}
 
export default Example;