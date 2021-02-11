import React, { createContext } from 'react';

export const ColorContext = createContext()

export const UPDATE_COLOR = "UPDATE_COLOR"

export const Color = props => {
  return (
    <ColorContext.Provider value={{color: 'red'}}>
      {props.children}
    </ColorContext.Provider>
  )
}
