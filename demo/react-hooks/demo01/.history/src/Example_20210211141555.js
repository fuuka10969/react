import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      num: 0
     }
  }
  render() { 
    return ( 
      <div>
        <div onClick={this.addNum}>click</div>
        <div>{this.state.num}</div>
      </div>
     );
  }
  addNum = () => {
    let num = this.state.num ++
    console.log(num)
    this.setState({
      num: num
    })
  }
}
 
export default Example;