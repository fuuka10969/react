import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={500}
          classNames="item"
          unmountOnExit
        >
          <div>核心人物：五条悟</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>切换显示</button>
        {/* <div className={this.state.isShow ? 'show' : 'hide'}>核心人物：五条悟</div> */}
      </div>
    );
  }
  handleToggle = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default Character;