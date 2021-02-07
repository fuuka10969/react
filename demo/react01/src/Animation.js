import React, { Component, Fragment } from 'react'
import AnimationItem from './AnimationItem'
import './style.css'

class Animation extends Component {
  // 生命周期：在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'dd',
      list: [
        '无限滑板',
        '堀与宫村',
      ]
    }
  }

  componentWillMount() {
    console.log('componentWillMount----组件将要挂载到页面的时刻')
  }
  componentDidMount() {
    console.log('componentDidMount----组件挂载完成的时刻')
  }


  render() {
    console.log('render----组件挂载中')
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
          {
            this.state.list.map((item, index) => {
              return (
                <AnimationItem
                  key={index + item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
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