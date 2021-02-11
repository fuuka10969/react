import React, { useRef } from 'react';

function Example8() {
  const inputEl = useRef(null)
  onButtonClick = () => {
    
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={this.onButtonClick}>在input上展示文字</button>
    </>
  )
}