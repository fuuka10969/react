import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
// 标签重定向：import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: '111' },
        { cid: 456, title: '222' },
        { cid: 789, title: '333' },
      ]
    }
    // 编程式重定向
    this.props.history.push('/home/')
  }
  render() {
    return (
      <div>
        {/* 标签重定向：<Redirect to="/home/">首页</Redirect> */}
        <h2>this is index page</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/list:${item.cid}`}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;