import React, { useRef } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const onButtonClick = () => {

  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
    </>
  )
}

export default Example8