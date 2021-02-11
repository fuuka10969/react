import React, { useState, useMemo } from 'react';

function Example7() {
  const [taka, setTaka] = useState('vocal')
  const [toru, setToru] = useState('guitar')
  return (
    <div>
      <button onClick={() => {setTaka(new Date().getTime())}}>taka</button>
      <button onClick={() => {setToru(new Date().getTime())}}>toru</button>
      <ChildComponent name={toru}>{taka}</ChildComponent>
    </div>
  )
}

function ChildComponent(name, children) {
  function changeTaka() {
    console.log('taka is singing')
    return name + 'taka is singing' 
  }
  const actionTaka = changeTaka(name)


  return (
    <div>
      <div>{actionTaka}</div>
      <div>{children}</div>
    </div>
  )
}

export default Example7