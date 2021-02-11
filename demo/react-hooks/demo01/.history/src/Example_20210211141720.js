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
        <div>you click {this.state.count} times</div>
        <button onClick={this.addNum}>click</button>
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