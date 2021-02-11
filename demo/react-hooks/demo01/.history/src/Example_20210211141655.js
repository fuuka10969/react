import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     }
  }
  render() { 
    return ( 
      <div>
        <div onClick={this.addNum}>click</div>
        <div>{this.state.count}</div>
      </div>
     );
  }
  addNum = () => {
    let count = this.state.count ++
    console.log(count)
    this.setState({
      count: count
    })
  }
}
 
export default Example;