import React, { useReducer } from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0)
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
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
