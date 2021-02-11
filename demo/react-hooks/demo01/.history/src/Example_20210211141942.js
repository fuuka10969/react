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
    this.setState({
      count: this.state.count +1
    })
  }
}
 
export default Example;