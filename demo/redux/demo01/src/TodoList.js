import React, { Component } from 'react';

import store from './store'
import { changeInputAction, addItemAction, removeItemAction, getTodoList } from './store/actionCreators'

import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {
    store.subscribe(this.storeChange)
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        list={this.state.list}
        handleAdd={this.handleAdd}
        handleRemove={this.handleRemove}
      />
    );
  }
  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  handleAdd = () => {
    const action = addItemAction()
    store.dispatch(action)
  }
  handleRemove = (index) => {
    const action = removeItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;