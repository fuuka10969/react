import React, { useState, useRef } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Hello, fuuka'
    console.log(inputEl)
  }

  const [text, setText] = useState
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input value={text} onChange={(e) => {setText(e.target.value)}} />
    </>
  )
}

export default Example8