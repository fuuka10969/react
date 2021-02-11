
import React, { useState, useMemo } from 'react';

function Example7() {
  const [taka, setTaka] = useState('taka is waiting')
  const [toru, setToru] = useState('toru is waiting')
  return (
    <>
      <button onClick={() => { setTaka(new Date().getTime()) }}>taka</button>
      <button onClick={() => { setToru(new Date().getTime() + 'guitar') }}>toru</button>
      <ChildComponent name={taka}>{toru}</ChildComponent>
    </>
  )
}

function ChildComponent({ name, children }) {
  function changeTaka(name) {
    console.log('taka is singing')
    return name + 'vocal'
  }

  const actionTaka = useMemo(() => changeTaka(name), [name])

  return (
    <>
      <div>{actionTaka}</div>
      <div>{children}</div>
    </>
  )
}

export default Example7