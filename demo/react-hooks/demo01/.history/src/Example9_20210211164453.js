import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  
  const onReSize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.addEventListener('resize', onResize)
    }
  }, [])
  
  return size
}

export default useWinSize