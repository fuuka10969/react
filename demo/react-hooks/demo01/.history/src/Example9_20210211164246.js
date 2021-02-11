import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

}

export default useWinSize