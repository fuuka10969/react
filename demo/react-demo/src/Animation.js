import React, { Component, Fragment } from 'react'
import axios from 'axios'

import './style.css'
import AnimationItem from './AnimationItem'
import Character from './Character'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Animation extends Component {
  // 生命周期：在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'dd',
      list: []
    }
  }

  // componentWillMount() {
  //   console.log('componentWillMount----组件将要挂载到页面的时刻')
  // }
  componentDidMount() {
    // console.log('componentDidMount----组件挂载完成的时刻')
    axios.get('https://www.fastmock.site/mock/8e909c44ed40d10491b4e3b0eebf164c/api/api')
      .then((res) => {
        // console.log('axios 获取数据成功' + JSON.stringify(res))
        this.setState({
          list: res.data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // shouldComponentUpdate() {
  //   console.log('1-shouldComponentUpdate')
  //   return true
  // }
  // componentWillUpdate() {
  //   console.log('2-componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('4-componentDidUpdate')
  // }


  render() {
    // console.log('3-render----组件挂载中')
    return (
      <Fragment>
        <div>
          <label htmlFor="my">我的番剧：</label>
          <input
            id="my"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.addList}>新增</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={500}
                    classNames="item"
                    unmountOnExit
                    appear={true}
                    key={index + item}
                  >
                    <AnimationItem

                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Character />
      </Fragment>
    )
  }
  inputChange(e) {
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }
  addList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      // 解决异步问题
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Animation 