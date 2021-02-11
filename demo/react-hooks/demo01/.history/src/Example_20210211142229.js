import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <div>you click {count} times</div>
        <button onClick={() => setCount(count+1)}>click</button>
      </div>
  )
}

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       count: 0
//      }
//   }
//   render() { 
//     return ( 
//       <div>
//         <div>you click {this.state.count} times</div>
//         <button onClick={this.addNum}>click</button>
//       </div>
//      );
//   }
//   addNum = () => {
//     this.setState({
//       count: this.state.count +1
//     })
//   }
// }
 
export default Example;