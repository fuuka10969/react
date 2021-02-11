import React, { useRef } from 'react';

function Example8() {
  const inputEl = useRef(null)
  return (
    <>
      <input ref={inputEl} type="text" />
      <button>在input上展示文字</button>
    </>
  )
}