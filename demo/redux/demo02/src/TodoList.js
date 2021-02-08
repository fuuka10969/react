import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, inputChange, handleAdd, list } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange} />
        <button onClick={handleAdd}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispach) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispach(action)
    },
    handleAdd() {
      let action = {
        type: 'add_item'
      }
      dispach(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);