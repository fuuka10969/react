import React, { useReducer } from 'react';

function ReducerDemo() {
  const [] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0)
}

// javascript
// function countReducer(state, action) {
//   switch (action.type) {
//     case 'add':
//       return state + 1;
//     case 'sub':
//       return state - 1;
//     default:
//       return state;
//   }
// }
